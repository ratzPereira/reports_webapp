import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { Test } from '@nestjs/testing';

describe('AuthService tests', () => {
  it('can creante an instance of auth service', async () => {
    const fakeUsersService = {
      find: () => Promise.resolve([]),
      create: (email: string, pasword: string) =>
        Promise.resolve({ id: 1, email, pasword }),
    };
    const module = await Test.createTestingModule({
      providers: [AuthService, {
        provide: UsersService,
        useValue: fakeUsersService
      }], 
    }).compile();
    const service = module.get(AuthService);

    expect(service).toBeDefined();
  });
});
