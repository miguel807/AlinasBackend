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

  findOne(name: string) {
    return this.productRepository.getProductById(name);
  }

  update(name: string, updateProduct: ProductInterface) {
    return this.productRepository.update(updateProduct, name);
  }

  remove(name: string) {
    return this.productRepository.delete(name);
  }
}
