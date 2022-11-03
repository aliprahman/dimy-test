import { CustomerService } from './customer.service';
import { ProductService } from './product.service';
import { PaymentMethodService } from './payment-method.service';
import { OrderService } from './order.service';

export const ListService = [
  CustomerService,
  ProductService,
  PaymentMethodService,
  OrderService,
];
