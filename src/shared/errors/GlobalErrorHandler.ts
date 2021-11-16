import { Request, Response, NextFunction } from 'express';

import AppError from './AppError';

async function GlobalErrorHandler(err: Error, req: Request, res: Response, _: NextFunction) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      statusCode: err.statusCode,
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
    err: err.message,
  });
}

export { GlobalErrorHandler };
