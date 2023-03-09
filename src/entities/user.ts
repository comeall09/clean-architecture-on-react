import { Email, UniqueId } from 'src/types';
import { Ingredient } from './product';

export type UserName = string;

export interface IUser {
  id: UniqueId;
  name: UserName;
  email: Email;
  preferences: Ingredient[];
  allergies: Ingredient[];
}

export function createUser(name: UserName, email: Email, preferences: Ingredient[], allergies: Ingredient[]): IUser {
  return {
    id: 0, // FIXME
    name,
    email,
    preferences: preferences,
    allergies: allergies,
  };
}

export function hasAllergy(user: IUser, ingredient: Ingredient): boolean {
  return user.allergies.includes(ingredient);
}

export function hasPreference(user: IUser, ingredient: Ingredient): boolean {
  return user.preferences.includes(ingredient);
}

export function changeName(user: IUser, newName: UserName): IUser {
  const updated = structuredClone(user);
  updated.name = newName;
  return updated;
}

const clone = (obj: IUser): IUser => structuredClone(obj);
export function addAllergy(user: IUser, ingredient: Ingredient): IUser {
  const updated = clone(user);
  const allergies = [...user.allergies, ingredient];
  updated.allergies = allergies;
  return updated;
}
export function  removeAllergy(user: IUser, ingredient: Ingredient): IUser {
  const updated = clone(user);
  const allergies = [...user.allergies].filter((name) => name !== ingredient);
  updated.allergies = allergies;
  return updated;
}
