// import {} from '../../dtos';

import { City } from '.prisma/client';

abstract class CitiesRepsitoryContract {
  public createCity: ({ name, state }: City) => Promise<City>;
}
export { CitiesRepsitoryContract };
