import { IUser, UserName } from 'src/entities/user';
import { Email } from 'src/types';

export interface AuthenticationService {
  auth(name: UserName, email: Email): Promise<IUser>;
}

export interface UserStorageService {
  user?: IUser;
  updateUser(user: IUser): void;
}