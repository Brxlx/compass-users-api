import { injectable, inject } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';

import { User } from '.prisma/client';

import { UsersRepositoryContract } from '../../repositories/contracts/UsersRepositoryContract';

@injectable()
class DeleteUserByIdUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepositoryContract
  ) {}

  async execute(id: string): Promise<User> {
    if (!id) throw new AppError('Missing required id argument');

    // Check if user exists
    const user = await this.usersRepository.getUserById(id);

    if (!user) throw new AppError('User not found', 404);

    // Delete user
    const deleteUser = await this.usersRepository.deleteUserById(id);

    if (!deleteUser) throw new AppError('Error trying to delete user');

    return deleteUser;
  }
}

export { DeleteUserByIdUseCase };
