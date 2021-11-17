import { injectable, inject } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';

import { City } from '.prisma/client';

import { CitiesRepsitoryContract } from '../../repositories/contracts/CitiesRepositoryContract';

@injectable()
class GetCityByNameUseCase {
  constructor(
    @inject('CitiesRepository')
    private citiesRepository: CitiesRepsitoryContract
  ) {}

  async execute(name: string): Promise<City> {
    if (!name) throw new AppError('Missing required name argument');

    const city = await this.citiesRepository.getCityByName(name);

    if (!city) throw new AppError('City not found', 404);

    return city;
  }
}

export { GetCityByNameUseCase };
