import { CategoryInterface } from './category.entity';

export interface CategoryRespositoryInterface {
  createCategory(newCategory: CategoryInterface): Promise<CategoryInterface>;
  getCategoryById(name: string): Promise<CategoryInterface>;
  getAllCategories(): Promise<CategoryInterface[]>;
  updateCategory(
    category: CategoryInterface,
    name: string,
  ): Promise<CategoryInterface>;
  deleteById(name: string): Promise<CategoryInterface>;
  getProductsByCategory(name: string): Promise<any>;
  getCategoryByIdd(id: number): Promise<CategoryInterface>;
}
