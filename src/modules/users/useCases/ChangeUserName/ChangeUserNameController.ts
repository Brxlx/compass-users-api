import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { User } from '.prisma/client';

import { ChangeUserNameByIdUseCase } from './ChangeUserNameUseCase';

class CHangeUserNameByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { fullname } = req.body as User;

    const changeUserNameByIdUseCase = container.resolve(ChangeUserNameByIdUseCase);

    const updatedUser = await changeUserNameByIdUseCase.execute(id, fullname);

    return res.status(200).json(updatedUser);
  }
}

export { CHangeUserNameByIdController };
