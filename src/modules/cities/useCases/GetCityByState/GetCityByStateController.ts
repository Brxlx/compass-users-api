import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { City } from '.prisma/client';

import { GetCityByStateUseCase } from './GetCityByStateUseCase';

class GetCityByState {
  async handle(req: Request, res: Response): Promise<Response> {
    const { state } = req.params as City;
    const createCityUseCase = container.resolve(GetCityByStateUseCase);

    const getCityByName = await createCityUseCase.execute(state);

    return res.status(200).json(getCityByName);
  }
}

export { GetCityByState };
