import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { RegisterRoutes } from './routes';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';
import dotenv from 'dotenv';

// Carrega variáveis de ambiente do arquivo .env
dotenv.config();

const app: Application = express();

// Middleware para parsear requisições JSON
app.use(bodyParser.json());

// Middleware para habilitar CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Middleware para servir a documentação Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Registra as rotas geradas pelo TSOA
RegisterRoutes(app);

// Middleware para manipulação de erros
app.use((err: any, req: any, res: any, next: any) => {
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    details: err.details || null,
  });
});

export default app;
