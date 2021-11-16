import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { City } from '.prisma/client';

import { CreateCityUseCase } from './CreateCityUseCase';

class CreateCityController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, state } = req.body as City;
    const createCityUseCase = container.resolve(CreateCityUseCase);

    const responseFromCreateCity = await createCityUseCase.execute({ name, state });

    return res.status(201).json(responseFromCreateCity);
  }
}

export { CreateCityController };
