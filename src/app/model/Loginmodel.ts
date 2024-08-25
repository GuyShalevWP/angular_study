export interface Loginmodel {
  username: string;
  password: string;
}

export interface user {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  gender: string;
}

export interface Role {
  value: string;
  viewValue: string;
}
