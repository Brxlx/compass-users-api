import { Request, Response } from 'express';
import { container } from 'tsyringe';

// import { User } from '.prisma/client';

import { GetUserByIdUseCase } from './GetUserByIdUseCase';

class GetUserByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { fullname } = req.params;

    const getUserByIdUseCase = container.resolve(GetUserByIdUseCase);

    const getUserById = await getUserByIdUseCase.execute(fullname);

    return res.status(200).json(getUserById);
  }
}

export { GetUserByIdController };
