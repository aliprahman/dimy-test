import {
  Model,
  Column,
  Table,
  columnTypes,
  Relation,
  relationTypes,
} from 'nestjs-objection';
import { CustomerAddress } from './customer-address.model';

@Table({ tableName: 'customers' })
export class Customer extends Model {
  @Column({ type: columnTypes.increments, primary: true, nullable: false })
  id: number;

  @Column({ type: columnTypes.string, nullable: false })
  customer_name: string;

  @Relation({
    modelClass: CustomerAddress,
    relation: relationTypes.HasManyRelation,
    join: { from: 'customers.id', to: 'customer_addresses.customer_id' },
  })
  addresses: CustomerAddress[];
}
