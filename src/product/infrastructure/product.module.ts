import { Module } from '@nestjs/common';
import { ProductService } from '../application/productUseCase.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { ProductMySqlRepository } from './product.repository';
import { CategoryModule } from 'src/category/infrastructure/category.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule, CategoryModule, TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [
    ProductService,
    {
      provide: 'ProductRepositoryInterface',
      useClass: ProductMySqlRepository,
    },
  ],
  exports: [ProductService],
})
export class ProductModule {}
