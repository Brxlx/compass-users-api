import 'express-async-errors';
import 'reflect-metadata';

import cors from 'cors';
import express, { json } from 'express';
import helmet from 'helmet';

import 'dotenv/config';
import '../../container';
import { GlobalErrorHandler } from '../../errors/GlobalErrorHandler';
import { dbSetup } from '../database/prisma/connection';
import { routes } from './routes/index';

const app = express();

app.use(cors());

// Json limit
app.use(json({ limit: '10mb' }));

// Security
app.use(helmet());

// Load app routes
app.use(routes);

// Set up custom Error Handler
app.use(GlobalErrorHandler);

// DB Connection
dbSetup().then(() => {
  console.log('database OK');
});

export { app };
