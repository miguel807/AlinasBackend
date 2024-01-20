import { CategoryInterface } from './category.entity';

export class CategoryValue {
  public name: string;
  public photo: string;
  public description: string;
  public count_products: number;

  constructor(category: CategoryInterface) {
    this.name = category.name;
    this.photo = category.photo;
    this.description = category.description;
    this.count_products = category.count_products;
  }
}
