import { Model, Column, Table, columnTypes } from 'nestjs-objection';

@Table({ tableName: 'products' })
export class Product extends Model {
  @Column({ type: columnTypes.increments, primary: true, nullable: false })
  id: number;

  @Column({ type: columnTypes.string, nullable: false })
  name: number;

  @Column({ type: columnTypes.decimal, nullable: false })
  price: number;
}
