import { injectable, inject } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';

import { User } from '.prisma/client';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { UsersRepositoryContract } from '../../repositories/contracts/UsersRepositoryContract';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepositoryContract
  ) {}

  async execute({ fullname, age, genre, birthdate, cityId }: ICreateUserDTO): Promise<User> {
    if (!fullname || !age || !genre || !birthdate || !cityId)
      throw new AppError('Missing required argument(s)');

    // Check if user name already exists
    const checkUserExists = await this.usersRepository.getUserByName(fullname);

    if (checkUserExists) throw new AppError('User already exists');

    const createUser = await this.usersRepository.createUser({
      fullname,
      age,
      genre,
      birthdate,
      cityId,
    });

    if (!createUser) throw new AppError('Error trying to create a new user');

    return createUser;
  }
}

export { CreateUserUseCase };
