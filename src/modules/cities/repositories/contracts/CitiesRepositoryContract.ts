// import {} from '../../dtos';

import { City } from '.prisma/client';

abstract class CitiesRepsitoryContract {
  public getCityByName: (name: string) => Promise<City>;

  public getCityByState: (state: string) => Promise<City[]>;

  public createCity: ({ name, state }: Omit<City, 'id'>) => Promise<City>;
}
export { CitiesRepsitoryContract };
