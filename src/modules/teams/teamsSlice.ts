import { createSlice } from "@reduxjs/toolkit";
import { TeamParams } from "../../api/teams/TeamsDto";
import {
  fetchAddTeam,
  fetchDeleteTeam,
  fetchEditTeam,
  fetchTeamId,
  fetchTeamPlayers,
  fetchTeams,
} from "./teamsAsyncActions";
import { RootState } from "../../redux/store";
import { LoadState } from "../../redux/loadState";
import { PlayerParams } from "../../api/players/PlayersDto";

interface TeamsState {
  dataTeams: Array<TeamParams>;
  teamsFilter?: Array<TeamParams>;
  loading: LoadState;
  loadingTeam: LoadState;
  loadingTeamPlayers: LoadState;
  loadingPostTeam: LoadState;
  loadingPutTeam: LoadState;
  teamPlayers: Array<PlayerParams>;
  count?: number;
  size?: number;
  team?: TeamParams;
}

const initialState: TeamsState = {
  dataTeams: [],
  teamPlayers: [],
  loading: LoadState.needLoad,
  loadingTeam: LoadState.needLoad,
  loadingTeamPlayers: LoadState.needLoad,
  loadingPostTeam: LoadState.needLoad,
  loadingPutTeam: LoadState.needLoad,
};

const teamsSlice = createSlice({
  name: "teams",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTeams.pending, (state) => {
      state.loading = LoadState.pending;
      state.dataTeams = [];
    });
    builder.addCase(fetchTeams.fulfilled, (state, action) => {
      state.loading = LoadState.idle;
      state.dataTeams = action.payload.data;
      state.count = action.payload.count;
      state.size = action.payload.size;
    });
    builder.addCase(fetchTeams.rejected, (state, action) => {
      state.loading = LoadState.idle;
    });
    builder.addCase(fetchTeamId.pending, (state) => {
      state.loadingTeam = LoadState.pending;
    });
    builder.addCase(fetchTeamId.fulfilled, (state, action) => {
      state.loadingTeam = LoadState.idle;
      state.team = action.payload;
    });
    builder.addCase(fetchTeamId.rejected, (state, action) => {
      state.loadingTeam = LoadState.idle;
    });
    builder.addCase(fetchTeamPlayers.pending, (state) => {
      state.loadingTeamPlayers = LoadState.pending;
    });
    builder.addCase(fetchTeamPlayers.fulfilled, (state, action) => {
      state.loadingTeamPlayers = LoadState.idle;
      state.teamPlayers = action.payload.data;
    });
    builder.addCase(fetchTeamPlayers.rejected, (state, action) => {
      state.loadingTeamPlayers = LoadState.idle;
    });

    builder.addCase(fetchDeleteTeam.pending, (state) => {
      state.loading = LoadState.pending;
    });
    builder.addCase(fetchDeleteTeam.fulfilled, (state) => {
      state.loading = LoadState.idle;
    });
    builder.addCase(fetchDeleteTeam.rejected, (state, action) => {
      state.loading = LoadState.idle;
    });
    builder.addCase(fetchAddTeam.pending, (state) => {
      state.loadingPostTeam = LoadState.pending;
    });
    builder.addCase(fetchAddTeam.fulfilled, (state) => {
      state.loadingPostTeam = LoadState.idle;
    });
    builder.addCase(fetchAddTeam.rejected, (state, action) => {
      state.loadingPostTeam = LoadState.idle;
    });
    builder.addCase(fetchEditTeam.pending, (state) => {
      state.loadingPutTeam = LoadState.pending;
    });
    builder.addCase(fetchEditTeam.fulfilled, (state) => {
      state.loadingPutTeam = LoadState.idle;
    });
    builder.addCase(fetchEditTeam.rejected, (state, action) => {
      state.loadingPutTeam = LoadState.idle;
    });
  },
});

export const teamsSelector = (state: RootState) => state.teams;
export const teamsActions = teamsSlice.actions;
export const teamsReducer = teamsSlice.reducer;
