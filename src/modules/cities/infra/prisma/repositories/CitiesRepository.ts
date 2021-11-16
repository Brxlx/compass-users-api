import { CitiesRepsitoryContract } from 'src/modules/cities/repositories/contracts/CitiesRepositoryContract';

import { City, PrismaClient } from '.prisma/client';

class CitiesRepository implements CitiesRepsitoryContract {
  private prisma = new PrismaClient();

  public getCityByName(name: string): Promise<City> {
    return this.prisma.city.findFirst({ where: { name } });
  }

  public getCityByState(state: string): Promise<City[]> {
    return this.prisma.city.findMany({ where: { state } });
  }

  public async createCity({ name, state }: City): Promise<City> {
    return this.prisma.city.create({ data: { name, state } });
  }
}

export { CitiesRepository };
