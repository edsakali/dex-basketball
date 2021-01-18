import { createSlice } from "@reduxjs/toolkit";
import { Team } from "../../api/teams/TeamsDto";
import { fetchTeams } from "./teamsAsyncActions";

export type Loading = "pending" | "idle";

interface TeamsState {
  data: Array<Team>;
  loading: Loading;
  error?: string | null;
}

const initialState: TeamsState = {
  data: [],
  loading: "idle",
};

const teamsSlice = createSlice({
  name: "teams",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTeams.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchTeams.fulfilled, (state, action) => {
      state.loading = "idle";
      state.data = action.payload.data;
    });
    builder.addCase(fetchTeams.rejected, (state, action) => {
      state.loading = "idle";
      state.error = action.error.message;
    });
  },
});

export const teamsActions = teamsSlice.actions;

export const teamsReducer = teamsSlice.reducer;
