import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dtos/user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repository: Repository<User>) {}

  createUser(email: string, password: string) {
    return this.repository.save({email, password});
  }

  findUser(id: number) {

    if(!id) return null;
    return this.repository.findBy({ id });
  }

  findAllUsers(email: string) {
    return this.repository.find({ where: { email } });
  }

  async updateUser(id: number, attrs: Partial<UserDto>) {
    const user = await this.repository.findOne({ where: { id } });

    if (!user) throw new NotFoundException('User not found');

    Object.assign(user, attrs);

    return this.repository.save(user);
  }

  async deleteUser(id: number) {
    const user = await this.repository.findOne({ where: { id } });

    if (!user) throw new NotFoundException('User not found');

    return this.repository.remove(user);
  }
}
