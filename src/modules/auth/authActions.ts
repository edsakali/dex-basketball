import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginParams, RegisterParams } from "../../api/auth/AuthDto";
import { authServices } from "../../api/auth/services";
import { notification } from "../../core/helpers/notification";
import { CustomError } from "../../core/helpers/errorHelper";

export const signUpAction = createAsyncThunk<
  any,
  {
    registerParams: RegisterParams;
    callback?: () => void;
  },
  { rejectValue: string }
>(
  "auth/signUp",

  async ({ registerParams, callback }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const registerData = await authServices.register(registerParams);
      localStorage.setItem("user", JSON.stringify(registerData));
      callback && callback();
      return registerData;
    } catch (err) {
      if (err instanceof CustomError) {
        notification("error", err.text);
      } else {
        notification("error", "Неизвестная ошибка!");
      }
      return rejectWithValue("Register Error: " + err);
    }
  }
);

export const signInAction = createAsyncThunk<
  any,
  {
    loginParams: LoginParams;
    callback?: () => void;
  },
  { rejectValue: string }
>(
  "auth/signIn",

  async ({ loginParams, callback }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const loginData = await authServices.login(loginParams);
      localStorage.setItem("user", JSON.stringify(loginData));
      return loginData;
      // callback && callback();
    } catch (err) {
      if (err instanceof CustomError) {
        notification("error", err.text);
      } else {
        notification("error", "Неизвестная ошибка!");
      }
      return rejectWithValue("Register Error: " + err);
    }
  }
);
