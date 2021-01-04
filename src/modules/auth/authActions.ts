import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginParams, RegisterParams } from "../../api/auth/AuthDto";
import { authServices } from "../../api/auth/services";
import { notification } from "../../core/helpers/notification";

export const signUpAction = createAsyncThunk<
  any,
  RegisterParams,
  { rejectValue: string }
>(
  "auth/signUp",

  async (params, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await authServices.register(params);
      console.log(response);
    } catch (err) {
      notification("error", "Пользователь с таким логином уже существует!");
      return rejectWithValue("Register Error: " + err);
    }
  }
);

export const signInAction = createAsyncThunk<
  any,
  LoginParams,
  { rejectValue: string }
>(
  "auth/signIn",

  async (params, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const user = await authServices.login(params);
      localStorage.setItem("token", JSON.stringify(user.token));
      return user;
    } catch (err) {
      notification("error", "Пользователь с таким логином/паролем не найден!");
      return rejectWithValue("Register Error: " + err);
    }
  }
);
