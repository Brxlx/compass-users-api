import { Request, Response } from 'express';

import { PrismaClient } from '.prisma/client';

class CreateCityController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, state } = req.body;
    const prisma = new PrismaClient();
    await prisma.city.count();
    return res.send('Foi');
  }
}

export { CreateCityController };
