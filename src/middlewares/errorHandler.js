import { HttpError } from 'http-errors';

export function errorHandler(error, req, res, next) {
  if (HttpError(error) === true) {
    return res
      .status(error.status)
      .send({ status: error.status, message: error.message });
  }
  res.status(500).json({
    status: 500,
    message: 'Something went wrong',
    data: error.message,
  });
}
