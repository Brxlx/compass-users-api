import { Router } from 'express';
import 'dotenv/config';

// import x from './states.routes';
import { cityRouter } from './cities.routes';
import { userRouter } from './users.routes';

const routes = Router();

routes.use(`/${process.env.APP_PREFIX}/users`, cityRouter);
routes.use(`/${process.env.APP_PREFIX}/check`, userRouter);

export { routes };
