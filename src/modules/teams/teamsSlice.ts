import { createSlice } from "@reduxjs/toolkit";
import { TeamParams } from "../../api/teams/TeamsDto";
import {
  fetchAddTeam,
  fetchDeleteTeam,
  fetchTeamId,
  fetchTeams,
  fetchTeamsFilter,
} from "./teamsAsyncActions";
import { RootState } from "../../redux/store";

export type Loading = "pending" | "idle";

interface TeamsState {
  data: Array<TeamParams>;
  loading: Loading;
  count?: number;
  size?: number;
  team?: TeamParams | undefined;
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
      state.count = action.payload.count;
      state.size = action.payload.size;
    });
    builder.addCase(fetchTeams.rejected, (state, action) => {
      state.loading = "idle";
      state.error = action.error.message;
    });
    builder.addCase(fetchTeamsFilter.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchTeamsFilter.fulfilled, (state, action) => {
      state.loading = "idle";
      state.data = action.payload.data;
    });
    builder.addCase(fetchTeamsFilter.rejected, (state, action) => {
      state.loading = "idle";
      state.error = action.error.message;
    });
    builder.addCase(fetchTeamId.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchTeamId.fulfilled, (state, action) => {
      state.loading = "idle";
      state.team = action.payload;
    });
    builder.addCase(fetchTeamId.rejected, (state, action) => {
      state.loading = "idle";
      state.error = action.error.message;
    });

    builder.addCase(fetchDeleteTeam.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchDeleteTeam.fulfilled, (state) => {
      state.loading = "idle";
    });
    builder.addCase(fetchDeleteTeam.rejected, (state, action) => {
      state.loading = "idle";
      state.error = action.error.message;
    });
    builder.addCase(fetchAddTeam.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchAddTeam.fulfilled, (state) => {
      state.loading = "idle";
    });
    builder.addCase(fetchAddTeam.rejected, (state, action) => {
      state.loading = "idle";
      state.error = action.error.message;
    });
  },
});

export const teamsSelector = (state: RootState) => state.teams;
export const teamsActions = teamsSlice.actions;
export const teamsReducer = teamsSlice.reducer;
