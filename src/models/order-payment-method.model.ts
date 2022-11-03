import { Model, Column, Table, columnTypes } from 'nestjs-objection';

@Table({ tableName: 'order_payment_methods' })
export class OrderPaymentMethod extends Model {
  @Column({ type: columnTypes.increments, primary: true, nullable: false })
  id: number;

  @Column({ type: columnTypes.integer, nullable: false })
  order_id: number;

  @Column({ type: columnTypes.integer, nullable: false })
  payment_method_id: number;
}
