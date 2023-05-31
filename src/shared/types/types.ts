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
