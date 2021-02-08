import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAddPlayer,
  fetchDeletePlayer,
  fetchPlayerId,
  fetchPlayers,
  fetchPlayersFilter,
  fetchPlayersTeamIds,
  fetchPositions,
} from "./playersAsyncActions";
import { RootState } from "../../redux/store";
import { PlayerParams } from "../../api/players/PlayersDto";

export type Loading = "pending" | "idle";

interface PlayersState {
  loading: Loading;
  data?: Array<PlayerParams>;
  players?: Array<PlayerParams>;
  positions?: Array<string>;
  player?: PlayerParams | undefined;
  count?: number;
  size?: number;
  error?: string | null;
}

const initialState: PlayersState = {
  loading: "idle",
};

const playersSlice = createSlice({
  name: "players",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPlayers.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchPlayers.fulfilled, (state, action) => {
      state.loading = "idle";
      state.data = action.payload.data;
      state.count = action.payload.count;
      state.size = action.payload.size;
    });
    builder.addCase(fetchPlayers.rejected, (state, action) => {
      state.loading = "idle";
      state.error = action.error.message;
    });
    builder.addCase(fetchPlayersFilter.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchPlayersFilter.fulfilled, (state, action) => {
      state.loading = "idle";
      state.data = action.payload.data;
      state.count = action.payload.count;
      state.size = action.payload.size;
    });
    builder.addCase(fetchPlayersFilter.rejected, (state, action) => {
      state.loading = "idle";
      state.error = action.error.message;
    });
    builder.addCase(fetchPlayerId.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchPlayerId.fulfilled, (state, action) => {
      state.loading = "idle";
      state.player = action.payload;
    });
    builder.addCase(fetchPlayerId.rejected, (state, action) => {
      state.loading = "idle";
      state.error = action.error.message;
    });
    builder.addCase(fetchPositions.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchPositions.fulfilled, (state, action) => {
      state.loading = "idle";
      state.positions = action.payload;
    });
    builder.addCase(fetchPositions.rejected, (state, action) => {
      state.loading = "idle";
      state.error = action.error.message;
    });
    builder.addCase(fetchAddPlayer.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchAddPlayer.fulfilled, (state) => {
      state.loading = "idle";
    });
    builder.addCase(fetchAddPlayer.rejected, (state, action) => {
      state.loading = "idle";
      state.error = action.error.message;
    });
    builder.addCase(fetchDeletePlayer.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchDeletePlayer.fulfilled, (state) => {
      state.loading = "idle";
    });
    builder.addCase(fetchDeletePlayer.rejected, (state, action) => {
      state.loading = "idle";
      state.error = action.error.message;
    });
    builder.addCase(fetchPlayersTeamIds.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchPlayersTeamIds.fulfilled, (state, action) => {
      state.loading = "idle";
      state.players = action.payload.data;
      state.count = action.payload.count;
      state.size = action.payload.size;
    });
    builder.addCase(fetchPlayersTeamIds.rejected, (state, action) => {
      state.loading = "idle";
      state.error = action.error.message;
    });
  },
});

export const playersSelector = (state: RootState) => state.players;
export const teamsActions = playersSlice.actions;
export const playersReducer = playersSlice.reducer;
