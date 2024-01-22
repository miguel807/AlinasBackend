import { InjectRepository } from '@nestjs/typeorm';
import { ProductInterface } from '../domain/product.entity';
import { ProductRepositoryInterface } from '../domain/product.repository';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { CategoryService } from 'src/category/application/categoryUseCase.service';
import { Category } from 'src/category/infrastructure/category.entity';
import { CategoryMySqlRespository } from 'src/category/infrastructure/category.repository';

export class ProductMySqlRepository implements ProductRepositoryInterface {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    private categoryService: CategoryService,
  ) {}

  async create(product: ProductInterface): Promise<ProductInterface> {
    const newProduct = this.productRepository.create(product);
    const category = await this.categoryService.findOneById(
      product.id_category,
    );
    newProduct.category = category;
    const productCreated = await this.productRepository.save(newProduct);
    return productCreated;
  }
  async getProductById(id: number): Promise<ProductInterface> {
    const product = await this.productRepository.findOneBy({ id: id });
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  async getAllProduct(): Promise<ProductInterface[]> {
    const productList = await this.productRepository.find();
    if (!productList) throw new NotFoundException('There are no products');
    return productList;
  }

  async update(
    product: ProductInterface,
    id: number,
  ): Promise<ProductInterface> {
    const productUpdate = await this.getProductById(id);
    if (!productUpdate) throw new NotFoundException('Product not found');
    const productUpdated = Object.assign(productUpdate, product);
    await this.productRepository.save(productUpdated);
    return productUpdated;
  }

  async delete(id: number): Promise<ProductInterface> {
    const product = await this.getProductById(id);
    if (!product) throw new NotFoundException('Product not found');
    await this.productRepository.delete(product);
    return product;
  }
}
