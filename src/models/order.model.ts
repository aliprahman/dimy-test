import { Model, Column, Table, columnTypes } from 'nestjs-objection';

@Table({ tableName: 'orders' })
export class Order extends Model {
  @Column({ type: columnTypes.increments, primary: true, nullable: false })
  id: number;

  @Column({ type: columnTypes.integer, nullable: false })
  customer_id: number;

  @Column({ type: columnTypes.integer, nullable: false })
  customer_address_id: number;

  @Column({ type: columnTypes.integer, nullable: false })
  total: number;
}
