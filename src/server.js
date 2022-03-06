import express from 'express';
import routes from './routes/index';
import asyncErrorMiddleware from './middlewares/errors.middleware';


export const launch = ({ protocol, port, host }) => {
  const application = express();

  application.use(express.json());

  application.use(routes);
  application.use(asyncErrorMiddleware)
  application.listen(
    port,
    () => console.log(`API ready at ${protocol}://${host}:${port}`),
  );
}