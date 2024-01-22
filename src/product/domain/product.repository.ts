import { ProductInterface } from './product.entity';

export interface ProductRepositoryInterface {
  create(product: ProductInterface): Promise<ProductInterface>;
  getProductById(id: number): Promise<ProductInterface>;
  getAllProduct(): Promise<ProductInterface[]>;
  update(product: ProductInterface, id: number): Promise<ProductInterface>;
  delete(id: number): Promise<ProductInterface>;
}
