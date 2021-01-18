import { baseFetch } from "../baseFetch";
import { RegisterParams, LoginParams } from "./AuthDto";
import { CustomError } from "../../core/helpers/errorHelper";

const register = async ({ userName, login, password }: RegisterParams) => {
  const response = await baseFetch({
    url: "api/Auth/SignUp",
    method: "POST",
    data: {
      userName,
      login,
      password,
    },
  });
  if (!response.ok) {
    switch (response.status) {
      case 409:
        throw new CustomError(
          response.status.toString(),
          "Пользователь с таким логином уже существует!"
        );
      default:
        throw new CustomError(
          response.status.toString(),
          "Ошибка регистрации!"
        );
    }
  }

  return response.json();
};
const login = async (params: LoginParams) => {
  const response = await baseFetch({
    url: "api/Auth/SignIn",
    data: params,
    method: "POST",
  });

  if (!response.ok) {
    switch (response.status) {
      case 403:
        throw new CustomError(
          response.status.toString(),
          "Пользователь с таким логином/паролем не найден!"
        );
      default:
        throw new CustomError(
          response.status.toString(),
          "Ошибка авторизации!"
        );
    }
  }
  return response.json();
};

export const authServices = {
  login,
  register,
};
