import { Schema, model, Document } from 'mongoose';

interface IQuestion {
  questionId: string;
  type: 'multiple_choice' | 'true_false';
  content: string;
  options?: string[];
  correctAnswer: string | boolean;
  feedback?: string;
}

export interface IQuiz extends Document {
  title: string;
  description?: string;
  questions: IQuestion[];
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

const QuestionSchema = new Schema<IQuestion>({
  questionId: { type: String, required: true },
  type: { type: String, enum: ['multiple_choice', 'true_false'], required: true },
  content: { type: String, required: true },
  options: { type: [String], required: function() { return this.type === 'multiple_choice'; } },
  correctAnswer: { type: Schema.Types.Mixed, required: true },
  feedback: { type: String }
});

const QuizSchema = new Schema<IQuiz>({
  title: { type: String, required: true },
  description: { type: String },
  questions: { type: [QuestionSchema], required: true },
  createdBy: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const QuizModel = model<IQuiz>('Quiz', QuizSchema);
