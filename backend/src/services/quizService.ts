import { QuizModel, IQuiz } from '../models/quizModel';

export class QuizService {
  public async createQuiz(quizData: IQuiz): Promise<IQuiz> {
    const quiz = new QuizModel(quizData);
    return await quiz.save();
  }

  public async getQuizById(quizId: string): Promise<IQuiz | null> {
    return await QuizModel.findById(quizId);
  }

  public async getAllQuizzes(): Promise<IQuiz[]> {
    return await QuizModel.find();
  }

  public async updateQuiz(quizId: string, quizData: Partial<IQuiz>): Promise<IQuiz | null> {
    return await QuizModel.findByIdAndUpdate(quizId, quizData, { new: true });
  }

  public async deleteQuiz(quizId: string): Promise<void> {
    await QuizModel.findByIdAndDelete(quizId);
  }
}
