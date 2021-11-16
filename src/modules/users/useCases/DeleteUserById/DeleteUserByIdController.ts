import { Request, Response } from 'express';
import { container } from 'tsyringe';

// import { User } from '.prisma/client';

import { DeleteUserById } from './DeleteUserByIdUseCase';

class DeleteUserByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteUserByIdUseCase = container.resolve(DeleteUserById);

    await deleteUserByIdUseCase.execute(id);

    return res.status(200).send();
  }
}

export { DeleteUserByIdController };
