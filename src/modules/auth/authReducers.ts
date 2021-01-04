import { createSlice } from "@reduxjs/toolkit";
// import { RootState } from "../../redux/rootReducer";
import { signInAction, signUpAction } from "./authActions";

interface AuthState {
  loading: "idle" | "pending";
  user: any;
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
    builder.addCase(signUpAction.fulfilled, (state) => {
      state.loading = "idle";
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

// export const selectAuth = (state: RootState) => state;

export default authSlice.reducer;
