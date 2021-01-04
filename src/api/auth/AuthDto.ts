export interface RegisterParams {
  login: string;
  password: string;
  userName?: string;
}

export interface LoginParams
  extends Pick<RegisterParams, "login" | "password"> {}
