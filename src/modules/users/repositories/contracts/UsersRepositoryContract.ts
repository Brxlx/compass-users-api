import { User } from '.prisma/client';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';

abstract class UsersRepositoryContract {
  public getUserByName: (fullname: string) => Promise<User>;

  public getUserById: (id: string) => Promise<User>;

  public createUser: ({ fullname, genre, birthdate, age, cityId }: ICreateUserDTO) => Promise<User>;

  public changeUserNameById: (id: string, fullname: string) => Promise<User>;

  public deleteUserById: (id: string) => Promise<User>;
}
export { UsersRepositoryContract };
