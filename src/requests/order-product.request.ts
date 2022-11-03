import { IsNotEmpty, IsNumber } from 'class-validator';

export class OrderProductRequest {
  @IsNotEmpty()
  @IsNumber()
  product_id: number;

  @IsNotEmpty()
  @IsNumber()
  qty: number;
}
