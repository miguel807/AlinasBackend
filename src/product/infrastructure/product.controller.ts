import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
  Res,
  UseGuards,
} from '@nestjs/common';
import { join } from 'path';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Observable, of } from 'rxjs';
import { ProductService } from '../application/productUseCase.service';
import { CreateProductDto } from './create-product.dto';
import { UpdateProductDto } from './update-product.dto';
import { renameimage } from 'src/helpers/image.helpers';
import { Roles } from 'src/auth/infrastructure/roles.decorator';
import { Role } from 'src/auth/infrastructure/role.enum';
import { RolesGuard } from 'src/auth/infrastructure/roles.guard';
import { AuthGuard } from 'src/auth/infrastructure/auth.guard';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('/uploadImage')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({ destination: './upload', filename: renameimage }),
    }),
  )
  createImage(@UploadedFile() file: Express.Multer.File, @Body() data) {}

  @Get('/downloadImage/:filename')
  getImage(@Param('filename') filename, @Res() res): Observable<Object> {
    return of(res.sendFile(join(process.cwd(), 'upload/' + filename)));
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: number) {
    return this.productService.findOne(name);
  }

  @Patch(':name')
  update(
    @Param('name') name: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.update(name, updateProductDto);
  }

  @Delete(':name')
  remove(@Param('name') name: number) {
    return this.productService.remove(name);
  }
}
