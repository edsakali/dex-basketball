import { baseFetch } from "../baseFetch";
import { RegisterParams, LoginParams } from "./AuthDto";
import { CustomError } from "../../core/helpers/errorHelper";

const register = async (params: RegisterParams) => {
  const response = await baseFetch({
    url: "api/Auth/SignUp",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
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
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
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
