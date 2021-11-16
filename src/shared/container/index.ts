import { container } from 'tsyringe';

// Import Repositories and contracts for register on container
import { CitiesRepository } from '../../modules/cities/infra/prisma/repositories/CitiesRepository';
import { CitiesRepsitoryContract } from '../../modules/cities/repositories/contracts/CitiesRepositoryContract';
import { UsersRepository } from '../../modules/users/infra/prisma/repositories/UsersRepository';
import { UsersRepositoryContract } from '../../modules/users/repositories/contracts/UsersRepositoryContract';

// Register the repositories on the application and make then injectable
container.registerSingleton<CitiesRepsitoryContract>('CitiesRepository', CitiesRepository);
container.registerSingleton<UsersRepositoryContract>('UsersRepository', UsersRepository);
