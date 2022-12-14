import { NextFunction, Request, Response } from 'express';

import { ResponseCode } from '../config/constants';
import { HttpException } from '../exceptions/HttpException';

const errorMiddleware = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const status: number = error.status || ResponseCode.InternalServerError;
    const message: string = error.message || 'Something went wrong';

    console.log(
      `[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`,
    );
    res.status(status).json({ message });
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;
