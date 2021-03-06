import { injectable, inject } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';

import { User } from '.prisma/client';

import { UsersRepositoryContract } from '../../repositories/contracts/UsersRepositoryContract';

@injectable()
class GetUserByNameUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepositoryContract
  ) {}

  async execute(fullname: string): Promise<User> {
    if (!fullname) throw new AppError('Missing required fullname argument');

    const user = await this.usersRepository.getUserByName(fullname);

    if (!user) throw new AppError('User not found', 404);

    return user;
  }
}

export { GetUserByNameUseCase };
