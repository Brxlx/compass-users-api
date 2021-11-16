import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { City } from '.prisma/client';

import { GetCityByNameUseCase } from './GetAllCitiesUseCase';

class GetCityByNameController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.body as City;
    const createCityUseCase = container.resolve(GetCityByNameUseCase);

    const getCityByName = await createCityUseCase.execute(name);

    return res.status(200).json(getCityByName);
  }
}

export { GetCityByNameController };
