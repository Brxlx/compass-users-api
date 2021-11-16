import { Router } from 'express';
import 'dotenv/config';

import { cityRouter } from './cities.routes';
import { userRouter } from './users.routes';

const routes = Router();

routes.use(`/${process.env.APP_PREFIX}/cities`, cityRouter);
routes.use(`/${process.env.APP_PREFIX}/users`, userRouter);

export { routes };
