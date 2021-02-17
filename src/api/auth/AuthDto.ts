export interface RegisterParams {
  login: string;
  password: string;
  userName: string;
}

export interface User {
  name: string;
  token: string;
  avatarUrl: string;
}

export interface LoginParams
  extends Pick<RegisterParams, "login" | "password"> {}
