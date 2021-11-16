import { UsersRepositoryContract } from 'src/modules/users/repositories/contracts/UsersRepositoryContract';

import { PrismaClient, User } from '.prisma/client';

class UsersRepository implements UsersRepositoryContract {
  private prisma = new PrismaClient();

  async getUserByName(fullname: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { fullname } });
  }

  async getUserById(id: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async createUser({ fullname, sex, birthdate, age, cityId }: User): Promise<User> {
    return this.prisma.user.create({ data: { fullname, sex, birthdate, age, cityId } });
  }

  async deleteUserById(id: string): Promise<User> {
    return this.prisma.user.delete({ where: { id } });
  }
}

export { UsersRepository };
