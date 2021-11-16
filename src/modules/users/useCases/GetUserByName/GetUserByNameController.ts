import { Request, Response } from 'express';
import { container } from 'tsyringe';

// import { User } from '.prisma/client';

import { GetUserByNameUseCase } from './GetUserByNameUseCase';

class GetUserByNameController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { fullname } = req.params;

    const getUserByNameUseCase = container.resolve(GetUserByNameUseCase);

    const getUserByName = await getUserByNameUseCase.execute(fullname);

    return res.status(200).json(getUserByName);
  }
}

export { GetUserByNameController };
