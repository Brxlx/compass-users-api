import AppError from 'src/shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

import { City } from '.prisma/client';

import { CitiesRepsitoryContract } from '../../repositories/contracts/CitiesRepositoryContract';

@injectable()
class CreateCityUseCase {
  constructor(
    @inject('CitiesRepository')
    private citiesRepository: CitiesRepsitoryContract
  ) {}

  async execute(data: Omit<City, 'id'>): Promise<City> {
    const { name, state } = data;

    // Check if city already exists
    // const

    try {
      return this.citiesRepository.createCity({ name, state });
      // return 'Teste';
    } catch (err) {
      throw new AppError('Error trying create a new city');
    }
  }
}

export { CreateCityUseCase };
