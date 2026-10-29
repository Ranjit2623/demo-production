import { IsEnum, IsNotEmpty } from 'class-validator';
import { ProductionStatus } from '../entities/production-batch.entity';

export class UpdateProductionStatusDto {
  @IsNotEmpty()
  @IsEnum(ProductionStatus)
  status: ProductionStatus;
}
