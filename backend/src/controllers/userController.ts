import { Controller, Get, Post, Put, Delete, Route, Tags, Body, Path, Security, SuccessResponse } from 'tsoa';
import { UserService } from '../services/userService';
import { IUser } from '../models/userModel';

@Route('users')
@Tags('User')
@Security('Bearer')
export class UserController extends Controller {
  private userService: UserService;

  constructor() {
    super();
    this.userService = new UserService();
  }

  @Get('{userId}')
  public async getUserById(@Path() userId: string): Promise<IUser | null> {
    return this.userService.getUserById(userId);
  }

  @Post('/')
  @SuccessResponse('201', 'Created')
  public async createUser(@Body() userData: IUser): Promise<IUser> {
    return this.userService.createUser(userData);
  }

  @Put('{userId}')
  public async updateUser(@Path() userId: string, @Body() userData: Partial<IUser>): Promise<IUser | null> {
    return this.userService.updateUser(userId, userData);
  }

  @Delete('{userId}')
  @SuccessResponse('204', 'No Content')
  public async deleteUser(@Path() userId: string): Promise<void> {
    await this.userService.deleteUser(userId);
  }
}
