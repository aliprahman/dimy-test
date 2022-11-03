import { Model, Column, Table, columnTypes } from 'nestjs-objection';

@Table({ tableName: 'customer_addresses' })
export class CustomerAddress extends Model {
  @Column({ type: columnTypes.increments, primary: true, nullable: false })
  id: number;

  @Column({ type: columnTypes.integer, nullable: false })
  customer_id: number;

  @Column({ type: columnTypes.text, nullable: false })
  address: string;
}
