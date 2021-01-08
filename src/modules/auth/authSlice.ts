import { createSlice } from "@reduxjs/toolkit";

import { signInAction, signUpAction } from "./authActions";
import { RootState } from "../../redux/store";

interface AuthState {
  loading: "idle" | "pending";
  user: null | {};
  error: string | undefined;
}

const initialState: AuthState = {
  loading: "idle",
  user: null,
  error: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout(state) {
      localStorage.removeItem("token");
      state.user = null;
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

export const { logout } = authSlice.actions;

export const authSelector = (state: RootState) => state.auth;

export default authSlice.reducer;
