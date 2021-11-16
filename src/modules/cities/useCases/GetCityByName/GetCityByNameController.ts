import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { City } from '.prisma/client';

import { GetCityByNameUseCase } from './GetCityByNameUseCase';

class GetCityByNameController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.params as City;
    const getCityByNameUseCase = container.resolve(GetCityByNameUseCase);

    const getCityByName = await getCityByNameUseCase.execute(name);

    return res.status(200).json(getCityByName);
  }
}

export { GetCityByNameController };
