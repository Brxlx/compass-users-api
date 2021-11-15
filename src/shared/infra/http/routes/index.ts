import { Router } from 'express';

// import x from './states.routes';
import { userRouter } from './users/users.routes';

const routes = Router();

routes.use('/v1', userRouter);

export { routes };
