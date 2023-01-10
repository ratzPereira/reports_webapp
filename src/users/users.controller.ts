
import { CurrentUser } from './decorators/current-user.decorator';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Session,
} from '@nestjs/common';
import { Serialize } from '../interceptors/serialize.interceptor';
import { AuthService } from './auth.service';
import { UserDto } from './dtos/user.dto';
import { UserResponseDTO } from './dtos/user.response.dto';
import { UsersService } from './users.service';

@Serialize(UserResponseDTO)
@Controller('users/auth')
export class UsersController {
  constructor(
    private userService: UsersService,
    private authService: AuthService,
  ) {}

  @Get('/whoami')
  whoAmI(@CurrentUser() user: UserDto) {
    return user;
  }

  @Post('/signout')
  signout(@Session() session: any) {
    session.userId = null;
  }

  @Post('/signup')
  async createuser(@Body() body: UserDto, @Session() session: any) {
    const user = await this.authService.signup(body.email, body.password);

    session.userId = user.id;

    return user;
  }

  @Post('/signin')
  async signin(@Body() body: UserDto, @Session() session: any) {
    const user = await this.authService.signin(body.email, body.password);

    session.userId = user.id;
    return user;
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
