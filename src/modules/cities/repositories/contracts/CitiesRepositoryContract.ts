import { City } from '.prisma/client';

import { ICreateCityDTO } from '../../dtos/ICreateCityDTO';

abstract class CitiesRepsitoryContract {
  public getCityByName: (name: string) => Promise<City>;

  public getCityByState: (state: string) => Promise<City[]>;

  public createCity: ({ name, state }: ICreateCityDTO) => Promise<City>;
}
export { CitiesRepsitoryContract };
