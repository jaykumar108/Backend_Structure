export interface IUser {
  _id?: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: 'user' | 'admin' | 'moderator';
  isActive: boolean;
  lastLogin?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserWithoutPassword extends Omit<IUser, 'password'> {
  password?: undefined;
}

export interface IUserCreateRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface IUserUpdateRequest {
  email?: string;
  firstName?: string;
  lastName?: string;
  role?: 'user' | 'admin' | 'moderator';
  isActive?: boolean;
}
