import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-objection';
import { Order } from '../models/order.model';
import { Product } from '../models/product.model';
import { OrderProduct } from '../models/order-product.model';
import { OrderPaymentMethod } from '../models/order-payment-method.model';
import { orderInterface } from '../interfaces/order.interface';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Product) private readonly productModel: typeof Product,
    @InjectModel(Order) private readonly orderModel: typeof Order,
    @InjectModel(OrderProduct)
    private readonly orderProductModel: typeof OrderProduct,
    @InjectModel(OrderPaymentMethod)
    private readonly orderPaymentMethodModel: typeof OrderPaymentMethod,
  ) {}

  async findById(id: number): Promise<Order | null> {
    return await this.orderModel.query().findById(id);
  }

  async findAll() {
    return await this.orderModel.query().orderBy('id', 'asc');
  }

  async newOrder(data: orderInterface) {
    let total = 0;
    // calculate total transaction
    for (let index = 0; index < data.products.length; index++) {
      const product = data.products[index];
      const detailProduct = await this.productModel
        .query()
        .findById(product.product_id);
      console.log(detailProduct);
      console.log(product.qty * detailProduct.price);
      total += product.qty * detailProduct.price;
    }
    // insert data order
    const order = await this.orderModel.query().insert({
      customer_id: data.customer_id,
      customer_address_id: data.customer_address_id,
      total,
    });
    // insert data product
    data.products.forEach(async (product) => {
      await this.orderProductModel.query().insert({
        product_id: product.product_id,
        order_id: order.id,
        qty: product.qty,
      });
    });
    // insert data payment-method
    data.payment_method_id.forEach(async (paymentMethod) => {
      await this.orderPaymentMethodModel.query().insert({
        payment_method_id: paymentMethod,
        order_id: order.id,
      });
    });
    return order;
  }
}
