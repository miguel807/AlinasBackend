import { Module } from '@nestjs/common';
import { CategoryService } from '../application/categoryUseCase.service';
import { CategoryController } from './category.controller';
import { CategoryMySqlRespository } from './category.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Category]), JwtModule],
  controllers: [CategoryController],
  providers: [
    CategoryService,
    {
      provide: 'CategoryRespositoryInterface',
      useClass: CategoryMySqlRespository,
    },
  ],
  exports: [CategoryService],
})
export class CategoryModule {}
