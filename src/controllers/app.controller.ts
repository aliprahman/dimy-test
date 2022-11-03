import {
  Controller,
  Post,
  Get,
  Param,
  ClassSerializerInterceptor,
  UseInterceptors,
  Body,
} from '@nestjs/common';
import { CustomerService } from '../services/customer.service';
import { ProductService } from '../services/product.service';
import { PaymentMethodService } from '../services/payment-method.service';
import { OrderService } from '../services/order.service';
import { OrderRequest } from '../requests/order.request';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class AppController {
  constructor(
    private customerService: CustomerService,
    private productService: ProductService,
    private paymentMethodService: PaymentMethodService,
    private orderService: OrderService,
  ) {}

  @Get('/customer')
  getCustomer() {
    return this.customerService.findAll();
  }

  @Get('/customer/:id')
  getDeatilCustomer(@Param('id') id: number) {
    return this.customerService.findById(id);
  }

  @Get('/product')
  getProduct() {
    return this.productService.findAll();
  }

  @Get('/product/:id')
  getDeatilProduct(@Param('id') id: number) {
    return this.productService.findById(id);
  }

  @Get('/payment-method')
  getPaymentMethod() {
    return this.paymentMethodService.findAll();
  }

  @Get('/payment-method/:id')
  getDetailPaymentMethod(@Param('id') id: number) {
    return this.paymentMethodService.findById(id);
  }

  @Post('/order')
  createOrder(@Body() body: OrderRequest) {
    return this.orderService.newOrder(body);
  }
}
