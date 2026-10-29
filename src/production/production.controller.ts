import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductionService } from './production.service';
import { CreateProductionBatchDto } from './dto/create-production-batch.dto';
import { UpdateProductionStatusDto } from './dto/update-production-status.dto';

@Controller('production')
export class ProductionController {
  constructor(private readonly productionService: ProductionService) {}

  @Post()
  create(@Body() createDto: CreateProductionBatchDto) {
    return this.productionService.create(createDto);
  }

  @Get()
  findAll() {
    return this.productionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productionService.findOne(id);
  }

  @Patch(':id/status')
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateProductionStatusDto,
  ) {
    return this.productionService.updateStatus(id, updateDto.status);
  }
}
