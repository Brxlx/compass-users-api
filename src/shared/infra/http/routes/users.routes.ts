import { Response, Router } from 'express';

const userRouter = Router();

userRouter.get('/check', async (_, res: Response) => {
  res.status(200).send({ resp: 'Ok' });
});

export { userRouter };
