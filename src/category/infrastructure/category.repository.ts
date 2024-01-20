import { InjectRepository } from '@nestjs/typeorm';
import { CategoryInterface } from '../domain/category.entity';
import { CategoryRespositoryInterface } from '../domain/category.repository';
import { Category } from './category.entity';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

export class CategoryMySqlRespository implements CategoryRespositoryInterface {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async createCategory(
    newCategory: CategoryInterface,
  ): Promise<CategoryInterface> {
    const category = this.categoryRepository.create(newCategory);
    const categoryCreated = await this.categoryRepository.save(category);
    return categoryCreated;
  }

  async getAllCategories(): Promise<CategoryInterface[]> {
    const categoryList = await this.categoryRepository.find();
    if (!categoryList) throw new NotFoundException('There are no categories');
    return categoryList;
  }

  async getCategoryById(name: string): Promise<CategoryInterface> {
    const category = await this.categoryRepository.findOne({
      where: { name: name },
    });
    if (!category) throw new NotFoundException('Category not found');
    return category;
  }
  async getCategoryByIdd(id: number): Promise<CategoryInterface> {
    const category = await this.categoryRepository.findOne({
      where: { id: id },
    });
    if (!category) throw new NotFoundException('Category not found');
    return category;
  }

  async updateCategory(
    category: CategoryInterface,
    name: string,
  ): Promise<CategoryInterface> {
    const updateCategory = await this.getCategoryById(name);
    const categoryUpdated = Object.assign(updateCategory, category);
    await this.categoryRepository.save(categoryUpdated);
    return categoryUpdated;
  }
  async deleteById(name: string): Promise<CategoryInterface> {
    const category = await this.getCategoryById(name);
    if (!category)
      throw new NotFoundException('there is no category with that id');
    await this.categoryRepository.delete(category);
    return category;
  }
  async getProductsByCategory(name: string): Promise<any> {
    return await this.categoryRepository.findOne({
      where: { name: name },
      relations: ['products'],
    });
  }
}
