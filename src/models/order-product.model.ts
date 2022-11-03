import { Model, Column, Table, columnTypes } from 'nestjs-objection';

@Table({ tableName: 'order_products' })
export class OrderProduct extends Model {
  @Column({ type: columnTypes.increments, primary: true, nullable: false })
  id: number;

  @Column({ type: columnTypes.integer, nullable: false })
  order_id: number;

  @Column({ type: columnTypes.integer, nullable: false })
  product_id: number;

  @Column({ type: columnTypes.integer, nullable: false })
  qty: number;
}
