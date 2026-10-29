import { IsString, IsNotEmpty, IsNumber, Min, IsEnum, IsOptional } from 'class-validator';
import { ProductionStatus } from '../entities/production-batch.entity';

export class CreateProductionBatchDto {
  @IsString()
  @IsNotEmpty()
  batchNumber: string;

  @IsString()
  @IsNotEmpty()
  productName: string;

  @IsNumber()
  @Min(1)
  quantity: number;

  @IsOptional()
  @IsEnum(ProductionStatus)
  status?: ProductionStatus;
}
