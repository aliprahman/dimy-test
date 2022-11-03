import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-objection';
import { Customer } from '../models/customer.model';
import { CustomerAddress } from '../models/customer-address.model';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer)
    private readonly customerModel: typeof Customer,
    @InjectModel(CustomerAddress)
    private readonly customerAddressModel: typeof CustomerAddress,
  ) {}

  async findById(id: number): Promise<Customer | null> {
    return await this.customerModel.query().findById(id);
  }

  async findAll() {
    return await this.customerModel.query().orderBy('customer_name', 'asc');
  }

  async addresses($customerId) {
    return await this.customerAddressModel
      .query()
      .where('customer_id', $customerId);
  }
}
