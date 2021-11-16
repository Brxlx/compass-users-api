import AppError from 'src/shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

import { City } from '.prisma/client';

import { CitiesRepsitoryContract } from '../../repositories/contracts/CitiesRepositoryContract';

@injectable()
class GetCityByStateUseCase {
  constructor(
    @inject('CitiesRepository')
    private citiesRepository: CitiesRepsitoryContract
  ) {}

  async execute(state: string): Promise<City[]> {
    if (!state) throw new AppError('Missing required name argument');

    const city = await this.citiesRepository.getCityByState(state);

    if (!city) throw new AppError('City not found', 404);

    return city;
  }
}

export { GetCityByStateUseCase };
