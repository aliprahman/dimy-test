import { Model, Column, Table, columnTypes } from 'nestjs-objection';

@Table({ tableName: 'payment_methods' })
export class PaymentMethod extends Model {
  @Column({ type: columnTypes.increments, primary: true, nullable: false })
  id: number;

  @Column({ type: columnTypes.string, nullable: false })
  name: string;

  @Column({ type: columnTypes.integer, nullable: false })
  is_active: number;
}
