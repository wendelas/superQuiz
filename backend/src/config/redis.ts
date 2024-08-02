import { createClient } from 'redis';
import dotenv from 'dotenv';

// Carrega variáveis de ambiente do arquivo .env
dotenv.config();

const REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1';
const REDIS_PORT = parseInt(process.env.REDIS_PORT || '6379', 10);

export const redisClient = createClient({
  url: `redis://${REDIS_HOST}:${REDIS_PORT}`
});

redisClient.on('error', (err) => {
  console.error('Redis Client Error', err);
});

export const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log('Connected to Redis');
  } catch (error) {
    console.error('Failed to connect to Redis', error);
    process.exit(1); // Encerra o processo com erro
  }
};
