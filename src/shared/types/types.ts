export interface RequestLogin {
  email: string;
  password: string;
}

export interface UserType {
  id: number;
  email: string;
  name: string;
  phone: string;
  cpf: string;
}

export interface ReturnLogin {
  accessToken: string;
  user: UserType;
}

export interface CreateUserType {
  name: string;
  phone: string;
  email: string;
  cpf: string;
  password: string;
  confirmPassword: string;
}


