import { createSlice } from "@reduxjs/toolkit";

import { signInAction, signUpAction } from "./authActions";
import { RootState } from "../../redux/store";

export interface User {
  name: string;
  token: string;
  avatarUrl: string;
}

interface AuthState {
  loading: "idle" | "pending";
  error: string | undefined;
  user?: User | null;
}

const initialState: AuthState = {
  loading: "idle",
  error: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout(state) {
      localStorage.removeItem("user");
      state.user = null;
    },
    getUser(state) {
      const user = localStorage.getItem("user");
      if (user) {
        state.user = JSON.parse(user);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUpAction.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(signUpAction.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.user = payload;
      state.error = undefined;
    });
    builder.addCase(signUpAction.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
    builder.addCase(signInAction.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(signInAction.fulfilled, (state, { payload }) => {
      state.loading = "idle";
      state.user = payload;
      state.error = undefined;
    });
    builder.addCase(signInAction.rejected, (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    });
  },
});

export const { logout, getUser } = authSlice.actions;

export const authSelector = (state: RootState) => state.auth;

export default authSlice.reducer;
