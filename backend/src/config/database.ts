import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Carrega variáveis de ambiente do arquivo .env
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/quiz-app';

export const connectDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1); // Encerra o processo com erro
  }
};
