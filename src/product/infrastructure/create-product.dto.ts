import { IsString, IsNumber, IsPositive, IsBoolean } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  photo: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsBoolean()
  isVisible: boolean;

  @IsNumber()
  @IsPositive()
  id_category: number;
}
