import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoryInterface } from '../domain/category.entity';
import { Product } from 'src/product/infrastructure/product.entity';
import { ProductInterface } from 'src/product/domain/product.entity';

@Entity()
export class Category implements CategoryInterface {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  photo?: string;
  @Column()
  description?: string;
  @Column()
  count_products?: number;
  @OneToMany(() => Product, (products) => products.category, {
    onDelete: 'CASCADE',
  })
  products: ProductInterface[];
}
