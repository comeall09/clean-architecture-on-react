import { Email, UniqueId } from 'src/types';

export type UserName = string;

export interface IUser {
  id: UniqueId;
  name: UserName;
  email: Email;
}

export function createUser(name: UserName, email: Email): IUser {
  return {
    id: 0, // FIXME
    name,
    email,
  };
}
