import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { graphqlHTTP } from 'express-graphql';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import acronymRoutes from './routes/acronym.routes';
import errorMiddleware from './middlewares/error.middleware';
import connectDB from './config/db';
import { swaggerRoute, graphqlRoute } from './config/constants';
import graphqls from './graphqls';

const app = express();

dotenv.config();

connectDB();

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
app.use(swaggerRoute, swaggerUi.serve, swaggerUi.setup(specs));

// for graphql
app.use(
  graphqlRoute,
  graphqlHTTP((req, res, graphqlParams) => ({
    schema: graphqls.schema,
    rootValue: graphqls.resolver,
    graphiql: true,
    context: {
      req,
      res,
    },
  })),
);

const port = process.env.PORT || 80;

export const Server = app.listen(port, () => {
  console.log('server running on port ' + port);
});

export default app;
