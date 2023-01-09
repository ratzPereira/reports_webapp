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
import { AuthService } from './auth.service';
import { UserDto } from './dtos/user.dto';
import { UserResponseDTO } from './dtos/user.response.dto';
import { UsersService } from './users.service';

@Serialize(UserResponseDTO)
@Controller('users/auth')
export class UsersController {
  constructor(private userService: UsersService, private authService: AuthService) {}

  @Post('/signup')
  createuser(@Body() body: UserDto) {
    return this.authService.signup(body.email, body.password);
  }

  @Post('/signin')
  signin(@Body() body: UserDto) {
    return this.authService.signin(body.email, body.password);
  }

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
