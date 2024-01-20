import { Inject, Injectable } from '@nestjs/common';
import { CategoryRespositoryInterface } from '../domain/category.repository';
import { CategoryInterface } from '../domain/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('CategoryRespositoryInterface')
    private readonly categoryRepository: CategoryRespositoryInterface,
  ) {}
  create(createCategory: CategoryInterface) {
    return this.categoryRepository.createCategory(createCategory);
  }

  findAll() {
    return this.categoryRepository.getAllCategories();
  }

  findOne(name: string) {
    return this.categoryRepository.getCategoryById(name);
  }

  findOneById(id: number) {
    return this.categoryRepository.getCategoryByIdd(id);
  }

  update(name: string, updateCategory: CategoryInterface) {
    return this.categoryRepository.updateCategory(updateCategory, name);
  }

  remove(name: string) {
    return this.categoryRepository.deleteById(name);
  }

  getProductsByCategory(name: string) {
    return this.categoryRepository.getProductsByCategory(name);
  }
}
