import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CategoryService } from '../application/categoryUseCase.service';
import { CreateCategoryDto } from './create-category.dto';
import { UpdateCategoryDto } from './update-category.dto';
import { Roles } from 'src/auth/infrastructure/roles.decorator';
import { Role } from 'src/auth/infrastructure/role.enum';
import { RolesGuard } from 'src/auth/infrastructure/roles.guard';
import { AuthGuard } from 'src/auth/infrastructure/auth.guard';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.categoryService.findOne(name);
  }

  @Patch(':name')
  update(
    @Param('name') name: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(name, updateCategoryDto);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.categoryService.remove(name);
  }

  @Get('/getProductsByCategory/:name')
  getProductsByCategory(@Param('name') name: string) {
    return this.categoryService.getProductsByCategory(name);
  }
}
