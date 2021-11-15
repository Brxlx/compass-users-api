import { Router } from 'express';

const userRouter = Router();

userRouter.get('/check', async (req, res) => {
  res.status(200).send({ resp: 'Ok' });
});

export { userRouter };
