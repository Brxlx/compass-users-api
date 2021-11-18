import { v4 as uuid } from 'uuid';

import { User } from '.prisma/client';

import { UsersRepositoryContract } from '../contracts/UsersRepositoryContract';

class UsersRepositoryInMemory implements UsersRepositoryContract {
  // public getUserByName: (fullname: string) => Promise<User>;
  public getUserById: (id: string) => Promise<User>;

  public changeUserNameById: (id: string, fullname: string) => Promise<User>;

  public deleteUserById: (id: string) => Promise<User>;

  private users: User[] = [];

  async getUserByName(fullname: string): Promise<User> {
    return this.users.find(user => user.fullname === fullname);
  }

  async createUser(user: User): Promise<User> {
    Object.assign(user, {
      id: uuid(),
    });

    this.users.push(user);
    return user;
  }
}

export { UsersRepositoryInMemory };
