import { ObjectId } from "mongodb";

export interface IUser {
  _id: ObjectId;
  email: string;
  name: string;
  lastName: string;
  age: number;
  password: string;
  isPremium: boolean;
  createdAt: Date;
  updatedAt: Date;
}
