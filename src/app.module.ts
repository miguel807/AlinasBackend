import { Module } from '@nestjs/common';
import { join } from 'path';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/infrastructure/user.module';
import { AuthModule } from './auth/infrastructure/auth.module';
import { CategoryModule } from './category/infrastructure/category.module';
import { ProductModule } from './product/infrastructure/product.module';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      //host: 'localhost',
      // port: 33060,
      //  username: 'root',
      // password: 'root',
      database: 'alinas.sqlite',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    CategoryModule,
    ProductModule,
  ],
})
export class AppModule {}
