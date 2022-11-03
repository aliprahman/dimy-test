import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-objection';
import { Product } from '../models/product.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product) private readonly productModel: typeof Product,
  ) {}

  async findById(id: number): Promise<Product | null> {
    return await this.productModel.query().findById(id);
  }

  async findAll() {
    return await this.productModel.query().orderBy('name', 'asc');
  }
}
