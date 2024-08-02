import { Schema, model, Document } from 'mongoose';

interface IAnswer {
  questionId: string;
  selectedOption: string | boolean;
  isCorrect: boolean;
}

export interface IResult extends Document {
  userId: string;
  quizId: string;
  score: number;
  answers: IAnswer[];
  completedAt: Date;
}

const AnswerSchema = new Schema<IAnswer>({
  questionId: { type: String, required: true },
  selectedOption: { type: Schema.Types.Mixed, required: true },
  isCorrect: { type: Boolean, required: true }
});

const ResultSchema = new Schema<IResult>({
  userId: { type: String, required: true },
  quizId: { type: String, required: true },
  score: { type: Number, required: true },
  answers: { type: [AnswerSchema], required: true },
  completedAt: { type: Date, default: Date.now }
});

export const ResultModel = model<IResult>('Result', ResultSchema);
