import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductionBatch, ProductionStatus } from './entities/production-batch.entity';
import { CreateProductionBatchDto } from './dto/create-production-batch.dto';

@Injectable()
export class ProductionService {
  constructor(
    @InjectRepository(ProductionBatch)
    private readonly batchRepository: Repository<ProductionBatch>,
  ) {}

  async create(dto: CreateProductionBatchDto): Promise<ProductionBatch> {
    const existing = await this.batchRepository.findOne({
      where: { batchNumber: dto.batchNumber },
    });
    if (existing) {
      throw new ConflictException(`Batch number ${dto.batchNumber} already exists`);
    }

    const batch = this.batchRepository.create({
      ...dto,
      status: dto.status ?? ProductionStatus.PLANNED,
    });
    return this.batchRepository.save(batch);
  }

  async findAll(): Promise<ProductionBatch[]> {
    return this.batchRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<ProductionBatch> {
    const batch = await this.batchRepository.findOne({ where: { id } });
    if (!batch) {
      throw new NotFoundException(`Production batch #${id} not found`);
    }
    return batch;
  }

  async updateStatus(id: number, status: ProductionStatus): Promise<ProductionBatch> {
    const batch = await this.findOne(id);
    batch.status = status;
    return this.batchRepository.save(batch);
  }
}
