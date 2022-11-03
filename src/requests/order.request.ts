import {
  IsNotEmpty,
  IsNumber,
  IsArray,
  ValidateNested,
  ArrayMinSize,
} from 'class-validator';
import { Type } from 'class-transformer';
import { OrderProductRequest } from './order-product.request';

export class OrderRequest {
  @IsNotEmpty()
  @IsNumber()
  customer_id: number;

  @IsNotEmpty()
  @IsNumber()
  customer_address_id: number;

  @IsNumber({}, { each: true })
  payment_method_id: number[];

  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Type(() => OrderProductRequest)
  products: OrderProductRequest[];
}
