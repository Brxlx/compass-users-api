import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { User } from '.prisma/client';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { fullname, age, sex, birthdate, cityId } = req.body as User;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    const createUser = await createUserUseCase.execute({
      fullname,
      age,
      sex,
      birthdate,
      cityId,
    });

    return res.status(201).json(createUser);
  }
}

export { CreateUserController };
