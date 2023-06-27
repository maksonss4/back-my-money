export interface IUserCreate {
  email: string;
  name: string;
  lastName: string;
  age: number;
  password: string;
}

export interface IUser {
  email: string;
  name: string;
  lastName: string;
  age: number;
  password: string;
  isPremium: boolean;
  createdAt: Date;
  updatedAt: Date;
}
