import { UserDto } from './dtos/user.dto';
import { UsersService } from './users.service';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { promisify } from 'util';
import { randomBytes, scrypt as _scrypt } from 'crypto';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signup(email: string, password: string) {
    const emailAlreadyInUse = await this.userService.findAllUsers(email);

    if (emailAlreadyInUse.length)
      throw new BadRequestException('Email already registered');

    const salt = randomBytes(8).toString('hex');

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    const result = salt + '.' + hash.toString('hex');

    const user = await this.userService.createUser(email, result);

    return user;
  }

  async signin(email: string, password: string) {
    const [user] = await this.userService.findAllUsers(email);

    if (!user) throw new NotFoundException('User not found!');

    const [salt, storedHash] = user.password.split('.');

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if (storedHash !== hash.toString('hex')) {
      throw new BadRequestException('Wrong email or password');
    }
    return user;
  }
}
