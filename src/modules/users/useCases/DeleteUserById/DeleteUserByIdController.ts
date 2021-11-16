import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteUserByIdUseCase } from './DeleteUserByIdUseCase';

class DeleteUserByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteUserByIdUseCase = container.resolve(DeleteUserByIdUseCase);

    await deleteUserByIdUseCase.execute(id);

    return res.status(204).send();
  }
}

export { DeleteUserByIdController };
