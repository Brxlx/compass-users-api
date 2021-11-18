import 'reflect-metadata';
import { v4 as uuid } from 'uuid';

import AppError from '../../../../shared/errors/AppError';
import { UsersRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory';
import { CreateUserUseCase } from './CreateUserUseCase';

describe('[Users] Create new user', () => {
  let userRepository: UsersRepositoryInMemory;
  let createUserUseCase: CreateUserUseCase;

  beforeAll(() => {
    userRepository = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(userRepository);
  });

  it('should be able create a new user', async () => {
    const newUser = await createUserUseCase.execute({
      fullname: 'Test User',
      age: 20,
      birthdate: new Date(Date.now()),
      cityId: uuid(),
      genre: 'male',
    });

    expect(newUser).toHaveProperty('id');
  });

  it('should not be able create a user with same name', async () => {
    userRepository = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(userRepository);

    const newUser = await createUserUseCase.execute({
      fullname: 'Test User With Error',
      age: 26,
      birthdate: new Date(Date.now()),
      cityId: uuid(),
      genre: 'female',
    });

    await expect(createUserUseCase.execute(newUser)).rejects.toEqual(
      new AppError('User already exists')
    );
  });
});
