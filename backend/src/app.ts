import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { RegisterRoutes } from './routes/routes'; // Importa as rotas geradas pelo TSOA
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';
import dotenv from 'dotenv';
import { authMiddleware } from './middlewares/authMiddleware'; 
import { errorHandler } from './middlewares/errorHandler'; 

dotenv.config();

const app: Application = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Usa o middleware de autenticação em rotas protegidas
app.use('/api', authMiddleware);

// Usa as rotas definidas pelo TSOA
RegisterRoutes(app);

// Middleware de manipulação de erros
app.use(errorHandler);

export default app;
