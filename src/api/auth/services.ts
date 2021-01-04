import { baseFetch } from "../baseFetch";
import { RegisterParams, LoginParams } from "./AuthDto";

const register = async (params: RegisterParams) =>
  await baseFetch("api/Auth/SignUp", "POST", params);

const login = async (params: LoginParams) =>
  await baseFetch("api/Auth/SignIn", "POST", params);

export const authServices = {
  login,
  register,
};
