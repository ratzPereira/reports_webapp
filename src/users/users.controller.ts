import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Serialize } from '../interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';
import { UserResponseDTO } from './dtos/user.response.dto';
import { UsersService } from './users.service';

@Controller('users/auth')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/signup')
  createuser(@Body() body: UserDto) {
    return this.userService.createUser(body);
  }

  @Serialize(UserResponseDTO)
  @Get('/:id')
  findUser(@Param('id') id: number) {
    return this.userService.findUser(id);
  }

  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.userService.findAllUsers(email);
  }

  @Patch('/:id')
  updateUser(@Body() body: UserDto, @Param('id') id: number) {
    return this.userService.updateUser(id, body);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
