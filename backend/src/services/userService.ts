import { UserModel, IUser } from '../models/userModel';
import bcrypt from 'bcrypt';

export class UserService {
  public async createUser(userData: IUser): Promise<IUser> {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = new UserModel({ ...userData, password: hashedPassword });
    return await user.save();
  }

  public async getUserById(userId: string): Promise<IUser | null> {
    return await UserModel.findById(userId);
  }

  public async getUserByUsername(username: string): Promise<IUser | null> {
    return await UserModel.findOne({ username });
  }

  public async updateUser(userId: string, userData: Partial<IUser>): Promise<IUser | null> {
    if (userData.password) {
      userData.password = await bcrypt.hash(userData.password, 10);
    }
    return await UserModel.findByIdAndUpdate(userId, userData, { new: true });
  }

  public async deleteUser(userId: string): Promise<void> {
    await UserModel.findByIdAndDelete(userId);
  }
}
