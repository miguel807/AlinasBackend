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
      type: 'postgres',
      host: 'dpg-cmm821ocmk4c73e0i8vg-a',
      port: 5432,
      username: 'alinasdb_user',
      password: 'nf338xPUFqcvJBgeeMNawLsoV85ZovYw',
      database: 'alinasdb',
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
