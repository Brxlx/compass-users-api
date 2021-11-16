import { User } from '.prisma/client';

abstract class UsersRepositoryContract {
  // public getUserById: (id: string) => Promise<User>;

  public getUserByName: (fullname: string) => Promise<User>;

  // public createUser: ({ fullname, sex, birthdate, age, cityId }: Omit<User, 'id'>) => Promise<User>;
}
export { UsersRepositoryContract };
