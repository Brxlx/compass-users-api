import { injectable, inject } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';

import { User } from '.prisma/client';

import { UsersRepositoryContract } from '../../repositories/contracts/UsersRepositoryContract';

@injectable()
class ChangeUserNameByIdUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepositoryContract
  ) {}

  async execute(id: string, fullname: string): Promise<User> {
    if (!id) throw new AppError('Missing required id argument');

    // Check if user exists
    const user = await this.usersRepository.getUserById(id);

    if (!user) throw new AppError('User not found', 404);

    // Update user with new name
    const updatedUser = await this.usersRepository.changeUserNameById(id, fullname);

    if (!updatedUser) throw new AppError('Error trying to update user');

    return updatedUser;
  }
}

export { ChangeUserNameByIdUseCase };
