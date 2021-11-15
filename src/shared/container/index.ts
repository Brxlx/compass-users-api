import { CitiesRepository } from 'src/modules/cities/infra/prisma/repositories/CitiesRepository';
import { container } from 'tsyringe';

import { CitiesRepsitoryContract } from '../../modules/cities/repositories/contracts/CitiesRepositoryContract';

container.registerSingleton<CitiesRepsitoryContract>('CitiesRepository', CitiesRepository);
