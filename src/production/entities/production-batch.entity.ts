import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum ProductionStatus {
  PLANNED = 'PLANNED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

@Entity('production_batches')
export class ProductionBatch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  batchNumber: string;

  @Column()
  productName: string;

  @Column('int')
  quantity: number;

  @Column({
    type: 'enum',
    enum: ProductionStatus,
    default: ProductionStatus.PLANNED,
  })
  status: ProductionStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
