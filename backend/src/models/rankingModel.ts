import { Schema, model, Document } from 'mongoose';

export interface IRanking extends Document {
  quizId: string;
  userId: string;
  score: number;
  rank: number;
}

const RankingSchema = new Schema<IRanking>({
  quizId: { type: String, required: true },
  userId: { type: String, required: true },
  score: { type: Number, required: true },
  rank: { type: Number, required: true }
});

export const RankingModel = model<IRanking>('Ranking', RankingSchema);
