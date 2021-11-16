import { UsersRepositoryContract } from 'src/modules/users/repositories/contracts/UsersRepositoryContract';

import { PrismaClient, User } from '.prisma/client';

class UsersRepository implements UsersRepositoryContract {
  private prisma = new PrismaClient();

  async getUserByName(fullname: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { fullname }, include: { city: true } });
  }
}

export { UsersRepository };
