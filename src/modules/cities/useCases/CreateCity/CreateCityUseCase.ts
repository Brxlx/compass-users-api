import { injectable, inject } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';

import { City } from '.prisma/client';

import { ICreateCityDTO } from '../../dtos/ICreateCityDTO';
import { CitiesRepsitoryContract } from '../../repositories/contracts/CitiesRepositoryContract';

@injectable()
class CreateCityUseCase {
  constructor(
    @inject('CitiesRepository')
    private citiesRepository: CitiesRepsitoryContract
  ) {}

  async execute(data: ICreateCityDTO): Promise<City> {
    const { name, state } = data;

    // Check if city already exists
    const checkCityAlreadyExists = await this.citiesRepository.getCityByName(name);

    if (checkCityAlreadyExists) throw new AppError('City already exists');

    return this.citiesRepository.createCity({ name, state });
  }
}

export { CreateCityUseCase };
