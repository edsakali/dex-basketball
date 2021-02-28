import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAddPlayer,
  fetchDeletePlayer,
  fetchEditPlayer,
  fetchPlayerId,
  fetchPlayers,
  fetchPlayersTeamIds,
  fetchPositions,
  fetchTeamsFilter,
} from "./playersAsyncActions";
import { RootState } from "../../redux/store";
import { Player, PlayerParams } from "../../api/players/PlayersDto";
import { LoadState } from "../../redux/loadState";
import { TeamParams } from "../../api/teams/TeamsDto";

interface PlayersState {
  loading: LoadState;
  data: Array<PlayerParams>;
  teamsFilter: Array<TeamParams>;
  loadingTeamsFilter: LoadState;
  loadingPlayer: LoadState;
  loadingPostPlayer: LoadState;
  loadingEditPlayer: LoadState;
  positions?: Array<string>;
  player?: Player;
  count?: number;
  size?: number;
}

const initialState: PlayersState = {
  data: [],
  teamsFilter: [],
  loading: LoadState.needLoad,
  loadingTeamsFilter: LoadState.needLoad,
  loadingPlayer: LoadState.needLoad,
  loadingPostPlayer: LoadState.needLoad,
  loadingEditPlayer: LoadState.needLoad,
};

const playersSlice = createSlice({
  name: "players",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPlayers.pending, (state) => {
      state.loading = LoadState.pending;
      state.data = [];
    });
    builder.addCase(fetchPlayers.fulfilled, (state, action) => {
      state.loading = LoadState.idle;
      state.data = action.payload.data;
      state.count = action.payload.count;
      state.size = action.payload.size;
    });
    builder.addCase(fetchPlayers.rejected, (state) => {
      state.loading = LoadState.idle;
    });

    builder.addCase(fetchPlayerId.pending, (state) => {
      state.loadingPlayer = LoadState.pending;
    });
    builder.addCase(fetchPlayerId.fulfilled, (state, action) => {
      state.loadingPlayer = LoadState.idle;
      state.player = action.payload;
    });
    builder.addCase(fetchPlayerId.rejected, (state) => {
      state.loadingPlayer = LoadState.idle;
    });
    builder.addCase(fetchPositions.pending, (state) => {
      state.loading = LoadState.pending;
    });
    builder.addCase(fetchPositions.fulfilled, (state, action) => {
      state.loading = LoadState.idle;
      state.positions = action.payload;
    });
    builder.addCase(fetchPositions.rejected, (state) => {
      state.loading = LoadState.idle;
    });
    builder.addCase(fetchAddPlayer.pending, (state) => {
      state.loadingPostPlayer = LoadState.pending;
    });
    builder.addCase(fetchAddPlayer.fulfilled, (state) => {
      state.loadingPostPlayer = LoadState.idle;
    });
    builder.addCase(fetchAddPlayer.rejected, (state) => {
      state.loadingPostPlayer = LoadState.idle;
    });
    builder.addCase(fetchEditPlayer.pending, (state) => {
      state.loadingEditPlayer = LoadState.pending;
    });
    builder.addCase(fetchEditPlayer.fulfilled, (state) => {
      state.loadingEditPlayer = LoadState.idle;
    });
    builder.addCase(fetchEditPlayer.rejected, (state) => {
      state.loadingEditPlayer = LoadState.idle;
    });
    builder.addCase(fetchDeletePlayer.pending, (state) => {
      state.loading = LoadState.pending;
    });
    builder.addCase(fetchDeletePlayer.fulfilled, (state) => {
      state.loading = LoadState.idle;
    });
    builder.addCase(fetchDeletePlayer.rejected, (state) => {
      state.loading = LoadState.idle;
    });
    builder.addCase(fetchPlayersTeamIds.pending, (state) => {
      state.loading = LoadState.pending;
    });
    builder.addCase(fetchPlayersTeamIds.fulfilled, (state, action) => {
      state.loading = LoadState.idle;
      state.data = action.payload.data;
      state.count = action.payload.count;
      state.size = action.payload.size;
    });
    builder.addCase(fetchPlayersTeamIds.rejected, (state) => {
      state.loading = LoadState.idle;
    });
    builder.addCase(fetchTeamsFilter.pending, (state) => {
      state.loadingTeamsFilter = LoadState.pending;
      state.teamsFilter = [];
    });
    builder.addCase(fetchTeamsFilter.fulfilled, (state, action) => {
      state.loadingTeamsFilter = LoadState.idle;
      state.teamsFilter = action.payload;
    });
    builder.addCase(fetchTeamsFilter.rejected, (state) => {
      state.loadingTeamsFilter = LoadState.idle;
    });
  },
});

export const playersSelector = (state: RootState) => state.players;
export const teamsActions = playersSlice.actions;
export const playersReducer = playersSlice.reducer;
