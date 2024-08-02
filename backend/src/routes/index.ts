import express from 'express';
import { RegisterRoutes } from './routes';

const router = express.Router();

// Registra todas as rotas geradas pelo TSOA
RegisterRoutes(router);

export default router;
