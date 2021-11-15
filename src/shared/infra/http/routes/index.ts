import { Router } from 'express';
import 'dotenv/config';

// import x from './states.routes';
import { userRouter } from './users.routes';

const routes = Router();

routes.use(`/${process.env.APP_PREFIX}`, userRouter);

export { routes };
