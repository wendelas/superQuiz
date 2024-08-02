import { Controller, Get, Post, Put, Delete, Route, Tags, Body, Path, SuccessResponse } from 'tsoa';
import { QuizService } from '../services/quizService';
import { IQuiz } from '../models/quizModel';

@Route('quizzes')
@Tags('Quiz')
export class QuizController extends Controller {
  private quizService: QuizService;

  constructor() {
    super();
    this.quizService = new QuizService();
  }

  @Get('/')
  public async getAllQuizzes(): Promise<IQuiz[]> {
    return this.quizService.getAllQuizzes();
  }

  @Get('{quizId}')
  public async getQuizById(@Path() quizId: string): Promise<IQuiz | null> {
    return this.quizService.getQuizById(quizId);
  }

  @Post('/')
  @SuccessResponse('201', 'Created')
  public async createQuiz(@Body() quizData: IQuiz): Promise<IQuiz> {
    return this.quizService.createQuiz(quizData);
  }

  @Put('{quizId}')
  public async updateQuiz(@Path() quizId: string, @Body() quizData: Partial<IQuiz>): Promise<IQuiz | null> {
    return this.quizService.updateQuiz(quizId, quizData);
  }

  @Delete('{quizId}')
  @SuccessResponse('204', 'No Content')
  public async deleteQuiz(@Path() quizId: string): Promise<void> {
    await this.quizService.deleteQuiz(quizId);
  }
}
