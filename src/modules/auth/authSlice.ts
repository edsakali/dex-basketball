import { createSlice } from "@reduxjs/toolkit";
import { signInAction, signUpAction } from "./authActions";
import { RootState } from "../../redux/store";
import { LoadState } from "../../redux/loadState";
import { User } from "../../api/auth/AuthDto";

interface AuthState {
  loading: LoadState;
  user?: User | null;
}

const initialState: AuthState = {
  loading: LoadState.needLoad,
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
      state.loading = LoadState.idle;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUpAction.pending, (state) => {
      state.loading = LoadState.pending;
    });
    builder.addCase(signUpAction.fulfilled, (state, { payload }) => {
      state.loading = LoadState.idle;
      state.user = payload;
    });
    builder.addCase(signUpAction.rejected, (state) => {
      state.loading = LoadState.idle;
    });
    builder.addCase(signInAction.pending, (state) => {
      state.loading = LoadState.pending;
    });
    builder.addCase(signInAction.fulfilled, (state, { payload }) => {
      state.loading = LoadState.idle;
      state.user = payload;
    });
    builder.addCase(signInAction.rejected, (state) => {
      state.loading = LoadState.idle;
    });
  },
});

export const { logout, getUser } = authSlice.actions;

export const authSelector = (state: RootState) => state.auth;

export const authReducer = authSlice.reducer;
