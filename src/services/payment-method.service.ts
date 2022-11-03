import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-objection';
import { PaymentMethod } from '../models/payment-method.model';

@Injectable()
export class PaymentMethodService {
  constructor(
    @InjectModel(PaymentMethod)
    private readonly paymentMethodModel: typeof PaymentMethod,
  ) {}

  async findById(id: number): Promise<PaymentMethod | null> {
    return await this.paymentMethodModel.query().findById(id);
  }

  async findAll() {
    return await this.paymentMethodModel.query().orderBy('name', 'asc');
  }
}
