import { IsNumber, IsString, IsPositive } from 'class-validator';
import { Product } from 'src/product/infrastructure/product.entity';

export class CreateCategoryDto {
  @IsString()
  name: string;
  @IsString()
  photo: string;
  @IsString()
  description: string;
  @IsNumber()
  @IsPositive()
  count_products: number;
}
