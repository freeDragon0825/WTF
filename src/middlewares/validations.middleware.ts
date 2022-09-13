import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { RequestHandler } from 'express';

import { ResponseCode } from '../config/config';
import { HttpException } from '../exceptions/HttpException';

const validationMiddleware = (
  type: any,
  value: 'body' | 'query' | 'params',
  skipMissingProperties = false,
  whitelist = true,
  forbidNonWhitelisted = true,
): RequestHandler => {
  return (req, res, next) => {
    console.log(req.body);
    validate(plainToClass(type, req[value]), {
      skipMissingProperties,
      whitelist,
      forbidNonWhitelisted,
    }).then((errors: ValidationError[]) => {
      if (errors.length > 0) {
        const message = errors
          .map((error: ValidationError) =>
            (Object as any).values(error.constraints),
          )
          .join(', ');
        next(new HttpException(ResponseCode.BadRequest, message));
      } else {
        next();
      }
    });
  };
};

export default validationMiddleware;
