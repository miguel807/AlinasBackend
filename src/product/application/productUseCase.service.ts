import { Inject, Injectable } from '@nestjs/common';
import { ProductRepositoryInterface } from '../domain/product.repository';
import { ProductInterface } from '../domain/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @Inject('ProductRepositoryInterface')
    private readonly productRepository: ProductRepositoryInterface,
  ) {}
  create(createProduct: ProductInterface) {
    return this.productRepository.create(createProduct);
  }

  findAll() {
    return this.productRepository.getAllProduct();
  }

  findOne(id: number) {
    return this.productRepository.getProductById(id);
  }

  update(id: number, updateProduct: ProductInterface) {
    return this.productRepository.update(updateProduct, id);
  }

  remove(id: number) {
    return this.productRepository.delete(id);
  }
}
