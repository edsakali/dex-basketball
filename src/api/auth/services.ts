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
          "User with this login already exists!"
        );
      default:
        throw new CustomError(
          response.status.toString(),
          "Registration error!"
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
          "User with the specified login / password was not found."
        );
      default:
        throw new CustomError(
          response.status.toString(),
          "Authorisation error!"
        );
    }
  }
  return response.json();
};

export const authServices = {
  login,
  register,
};
