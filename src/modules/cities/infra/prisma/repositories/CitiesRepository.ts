import { CitiesRepsitoryContract } from 'src/modules/cities/repositories/contracts/CitiesRepositoryContract';

import { City, PrismaClient } from '.prisma/client';

class CitiesRepository implements CitiesRepsitoryContract {
  constructor(private prisma: PrismaClient) {}

  private citiesRepository = this.prisma.city;

  public async createCity({ name, state }: City): Promise<City> {
    return this.citiesRepository.create({ data: { name, state } });
  }
}

export { CitiesRepository };
