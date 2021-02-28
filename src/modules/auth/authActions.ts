import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginParams, RegisterParams, User } from "../../api/auth/AuthDto";
import { authServices } from "../../api/auth/services";
import { notification } from "../../core/helpers/notification";
import { CustomError } from "../../core/helpers/errorHelper";
import { toast } from "react-toastify";

export const signUpAction = createAsyncThunk<User, RegisterParams>(
  "auth/signUp",

  async ({ userName, login, password }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const registerData = await authServices.register({
        userName,
        login,
        password,
      });
      localStorage.setItem("user", JSON.stringify(registerData));
      return registerData;
    } catch (err) {
      toast.dismiss();
      if (err instanceof CustomError) {
        notification("error", err.text, { toastId: err.code });
      } else {
        notification("error", "Unknown error!");
      }
      return rejectWithValue("Register Error: " + err);
    }
  }
);

export const signInAction = createAsyncThunk<User, LoginParams>(
  "auth/signIn",

  async (loginParams, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const loginData = await authServices.login(loginParams);
      localStorage.setItem("user", JSON.stringify(loginData));
      return loginData;
    } catch (err) {
      toast.dismiss();
      if (err instanceof CustomError) {
        notification("error", err.text, { toastId: err.code });
      } else {
        notification("error", "Unknown error!");
      }
      return rejectWithValue("Register Error: " + err);
    }
  }
);
