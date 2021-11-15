import cors from 'cors';
import express, { json } from 'express';
import helmet from 'helmet';

import 'dotenv/config';
import 'express-async-errors';
import { GlobalErrorHandler } from 'src/shared/errors/GlobalErrorHandler';

import { setup } from '../database/prisma/connection';
import { routes } from './routes/index';

const app = express();

app.use(cors());
app.use(json({ limit: '40mb' }));
// app.disable('x-powered-by');
app.use(helmet());
app.use(routes);
app.use(GlobalErrorHandler);

/* Mongo connection */
try {
  setup();
  // console.log('All good so far');
} catch (err) {
  throw new Error(err);
}

export { app };
