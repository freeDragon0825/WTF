import express from 'express';
import bodyParser from 'body-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import acronymRoutes from './routes/acronym.routes';
import errorMiddleware from './middlewares/error.middleware';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/acronym', acronymRoutes);
app.use(errorMiddleware);

// for swagger
const options = {
  swaggerDefinition: {
    info: {
      title: 'REST API',
      version: '1.0.0',
      description: 'Example docs',
    },
  },
  apis: ['swagger.yaml'],
};
const specs = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const port = process.env.PORT || 80;

export const Server = app.listen(port, () => {
  console.log('server running on port ' + port);
});

export default app;
