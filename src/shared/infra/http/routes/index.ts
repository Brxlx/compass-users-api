import { Router } from 'express';
import 'dotenv/config';
import swaggerUi from 'swagger-ui-express';

import swaggerDocs from '../../docs/swagger.json';
import { cityRouter } from './cities.routes';
import { userRouter } from './users.routes';

const routes = Router();

routes.use(`/cities`, cityRouter);
routes.use(`/users`, userRouter);
routes.use(`/docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export { routes };
