import { ProductInterface } from './product.entity';

export interface ProductRepositoryInterface {
  create(product: ProductInterface): Promise<ProductInterface>;
  getProductById(name: string): Promise<ProductInterface>;
  getAllProduct(): Promise<ProductInterface[]>;
  update(product: ProductInterface, name: string): Promise<ProductInterface>;
  delete(name: string): Promise<ProductInterface>;
}
