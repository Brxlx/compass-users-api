import { Response, Router } from 'express';

const userRouter = Router();

userRouter.get('/', async (_, res: Response) => {
  res.status(200).send({ resp: 'Ok' });
});

export { userRouter };
