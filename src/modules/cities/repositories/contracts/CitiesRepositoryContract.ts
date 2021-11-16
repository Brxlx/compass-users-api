// import {} from '../../dtos';

import { City } from '.prisma/client';

abstract class CitiesRepsitoryContract {
  public getCityByName: (name: string) => Promise<City>;

  public createCity: ({ name, state }: City) => Promise<City>;
}
export { CitiesRepsitoryContract };
