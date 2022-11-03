export interface orderInterface {
  customer_id: number;
  customer_address_id: number;
  payment_method_id: number[];
  products: orderProduct[];
}

interface orderProduct {
  product_id: number;
  qty: number;
}
