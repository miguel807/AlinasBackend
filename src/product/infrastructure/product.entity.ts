import { CategoryInterface } from 'src/category/domain/category.entity';
import { Category } from 'src/category/infrastructure/category.entity';
import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  photo: string;

  @Column({ default: ' ' })
  description: string;

  @Column()
  price: number;

  @Column({ default: true })
  isVisible: boolean;

  @ManyToOne(() => Category, (category) => category.products)
  category: CategoryInterface;
}
