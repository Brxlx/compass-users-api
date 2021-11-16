import AppError from 'src/shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

import { User } from '.prisma/client';

import { UsersRepositoryContract } from '../../repositories/contracts/UsersRepositoryContract';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepositoryContract
  ) {}

  async execute({ fullname, age, sex, birthdate, cityId }: Omit<User, 'id'>): Promise<User> {
    if (!fullname || !age || !sex || !birthdate || !cityId)
      throw new AppError('Missing required argument(s)');

    const createUser = await this.usersRepository.createUser({
      fullname,
      age,
      sex,
      birthdate,
      cityId,
    });

    if (!createUser) throw new AppError('Error trying to create a new user');

    return createUser;
  }
}

export { CreateUserUseCase };
