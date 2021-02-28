import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { playerServices } from "../../api/players/services";
import { getUploadedImage } from "../../api/postImg";
import {
  Player,
  PlayerParams,
  PlayersResponse,
} from "../../api/players/PlayersDto";
import { ParamsGetElement } from "../../api/appDto";
import { CustomError } from "../../core/helpers/errorHelper";
import { notification } from "../../core/helpers/notification";
import { teamsServices } from "../../api/teams/services";
import { Team } from "../../api/teams/TeamsDto";

export const fetchPlayers = createAsyncThunk<PlayersResponse, ParamsGetElement>(
  "players/fetchPlayersFilter",
  async (params, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as RootState;
      if (!auth.user) {
        throw new Error("Invalid operation User is undefined");
      }
      return await playerServices.getPlayers(auth.user, params);
    } catch (err) {
      if (err.message) {
        return rejectWithValue(err.message);
      } else {
        return rejectWithValue(err);
      }
    }
  }
);

export const fetchPositions = createAsyncThunk(
  "players/fetchPositions",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as RootState;
      if (!auth.user) {
        throw new Error("Invalid operation User is undefined");
      }
      return await playerServices.getPositions(auth.user);
    } catch (err) {
      if (err.message) {
        return rejectWithValue(err.message);
      } else {
        return rejectWithValue(err);
      }
    }
  }
);

export const fetchAddPlayer = createAsyncThunk<Player, PlayerParams>(
  "players/fetchAddPlayer",

  async (params, { rejectWithValue, getState }) => {
    const { imageFile, callback, ...restParams } = params;
    try {
      const { auth } = getState() as RootState;
      if (!auth.user) {
        throw new Error("Invalid operation User is undefined");
      }

      const avatarUrl = imageFile
        ? await getUploadedImage(auth.user, imageFile)
        : "";

      const response = await playerServices.postPlayer(auth.user, {
        avatarUrl,
        ...restParams,
      });
      if (response) {
        callback && callback();
        return response;
      }
    } catch (err) {
      if (err instanceof CustomError) {
        notification("error", err.text);
      } else {
        notification("error", "Unknown error!");
      }
      return rejectWithValue("Register Error: " + err);
    }
  }
);

export const fetchPlayerId = createAsyncThunk<Player, { id: string }>(
  "players/fetchPlayerId",
  async (params, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as RootState;
      if (!auth.user) {
        throw new Error("Invalid operation User is undefined");
      }
      return await playerServices.getPlayerId(auth.user, params);
    } catch (err) {
      if (err.message) {
        return rejectWithValue(err.message);
      } else {
        return rejectWithValue(err);
      }
    }
  }
);

export const fetchDeletePlayer = createAsyncThunk<Player, { id: string }>(
  "players/fetchDeletePlayer",
  async (params, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as RootState;
      if (!auth.user) {
        throw new Error("Invalid operation User is undefined");
      }
      return await playerServices.deletePlayer(auth.user, params);
    } catch (err) {
      if (err.message) {
        return rejectWithValue(err.message);
      } else {
        return rejectWithValue(err);
      }
    }
  }
);

export const fetchPlayersTeamIds = createAsyncThunk<
  PlayersResponse,
  Array<{ value: string }>
>(
  "players/fetchPlayersTeamIds",
  async (TeamIds, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as RootState;
      if (!auth.user) {
        throw new Error("Invalid operation User is undefined");
      }
      return await playerServices.getPlayerTeamIds(auth.user, TeamIds);
    } catch (err) {
      if (err.message) {
        return rejectWithValue(err.message);
      } else {
        return rejectWithValue(err);
      }
    }
  }
);

export const fetchEditPlayer = createAsyncThunk<Player, PlayerParams>(
  "players/fetchEditPlayer",
  async (params, { rejectWithValue, getState }) => {
    const { imageUrl, imageFile, callback, ...restParams } = params;
    try {
      const { auth } = getState() as RootState;
      if (!auth.user) {
        throw new Error("Invalid operation User is undefined");
      }

      const avatarUrl = imageFile
        ? await getUploadedImage(auth.user, imageFile)
        : imageUrl;

      const response = await playerServices.editPlayer(auth.user, {
        avatarUrl,
        ...restParams,
      });
      if (response) {
        callback && callback();
        return response;
      }
    } catch (err) {
      if (err instanceof CustomError) {
        notification("error", err.text);
      } else {
        notification("error", "Unknown error!");
      }
      return rejectWithValue("Register Error: " + err);
    }
  }
);

export const fetchTeamsFilter = createAsyncThunk<Team[], ParamsGetElement>(
  "players/fetchTeamsFilter",
  async (params, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as RootState;
      if (!auth.user) {
        throw new Error("Invalid operation User is undefined");
      }
      const response = await teamsServices.getTeams(auth.user, params);
      return response.data;
    } catch (err) {
      if (err.message) {
        return rejectWithValue(err.message);
      } else {
        return rejectWithValue(err);
      }
    }
  }
);
