import 'reflect-metadata';
import { v4 as uuid } from 'uuid';

// import AppError from '../../../../shared/errors/AppError';
import { UsersRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory';
import { CreateUserUseCase } from '../CreateUser/CreateUserUseCase';
import { GetUserByNameUseCase } from './GetUserByNameUseCase';

describe('[Users] Find user by name', () => {
  let userRepository: UsersRepositoryInMemory;
  let createUserUseCase: CreateUserUseCase;
  let getUserByNameUseCase: GetUserByNameUseCase;

  beforeAll(() => {
    userRepository = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(userRepository);
    getUserByNameUseCase = new GetUserByNameUseCase(userRepository);
  });

  it('should create a user with defined name to be able to find later', async () => {
    const newUser = await createUserUseCase.execute({
      fullname: 'Bruno Test',
      age: 20,
      birthdate: new Date(Date.now()),
      cityId: uuid(),
      genre: 'male',
    });

    expect(newUser).toHaveProperty('id');
  });

  it('should be able to find a user', async () => {
    const userName = 'Bruno Test';
    const newUser = await getUserByNameUseCase.execute(userName);

    expect(newUser).not.toBeNull();
  });
});
