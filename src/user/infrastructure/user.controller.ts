import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from '../application/userUseCase.service';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update_user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('findOneById/:id')
  findOneById(@Param('id') id: number) {
    return this.userService.findOneById(id);
  }

  @Get('findOneByEmail/:email')
  findOneByEmail(@Param('email') email: string) {
    return this.userService.findOneByEmail(email);
  }

  @Patch(':name')
  update(@Param('name') name: string, @Body() updateProductDto: UpdateUserDto) {
    return this.userService.editUser(name, updateProductDto);
  }

  @Post('/login')
  login(@Body() payload: any) {
    return this.userService.login(payload);
  }
}
