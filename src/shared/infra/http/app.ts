import 'express-async-errors';
import 'reflect-metadata';

import cors from 'cors';
import express, { json } from 'express';
import helmet from 'helmet';
import 'dotenv/config';
import '../../container';
import { GlobalErrorHandler } from 'src/shared/errors/GlobalErrorHandler';

import { dbSetup } from '../database/prisma/connection';
import { routes } from './routes/index';

const app = express();

app.use(cors());
app.use(json({ limit: '40mb' }));
app.use(helmet());
app.use(routes);
app.use(GlobalErrorHandler);

app.use(dbSetup);
export { app };
