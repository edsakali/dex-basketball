import { createAsyncThunk } from "@reduxjs/toolkit";
import { teamsServices } from "../../api/teams/services";
import { RootState } from "../../redux/store";
import { TeamsResponse, Team, TeamParams } from "../../api/teams/TeamsDto";
import { ParamsGetElement } from "../../api/appDto";
import { CustomError } from "../../core/helpers/errorHelper";
import { notification } from "../../core/helpers/notification";
import { getUploadedImage } from "../../api/postImg";
import { PlayersResponse } from "../../api/players/PlayersDto";
import { playerServices } from "../../api/players/services";

export const fetchTeams = createAsyncThunk<
  TeamsResponse,
  ParamsGetElement,
  { rejectValue: string; getState: () => void }
>("teams/fetchTeams", async (params, { rejectWithValue, getState }) => {
  try {
    const { auth } = getState() as RootState;
    if (!auth.user) {
      throw new Error("Invalid operation User is undefined");
    }
    return await teamsServices.getTeams(auth.user, params);
  } catch (err) {
    if (err.message) {
      return rejectWithValue(err.message);
    } else {
      return rejectWithValue(err);
    }
  }
});

export const fetchTeamId = createAsyncThunk<
  Team,
  { id: string },
  { rejectValue: string; getState: () => void }
>("teams/fetchTeamId", async (params, { rejectWithValue, getState }) => {
  try {
    const { auth } = getState() as RootState;
    if (!auth.user) {
      throw new Error("Invalid operation User is undefined");
    }
    return await teamsServices.getTeamId(auth.user, params);
  } catch (err) {
    if (err.message) {
      return rejectWithValue(err.message);
    } else {
      return rejectWithValue(err);
    }
  }
});

export const fetchDeleteTeam = createAsyncThunk<
  Team,
  { id: string },
  { rejectValue: string; getState: () => void }
>("teams/fetchDeleteTeam", async (params, { rejectWithValue, getState }) => {
  try {
    const { auth } = getState() as RootState;
    if (!auth.user) {
      throw new Error("Invalid operation User is undefined");
    }
    return await teamsServices.deleteTeam(auth.user, params);
  } catch (err) {
    if (err instanceof CustomError) {
      notification("error", err.text);
    } else {
      notification("error", "Неизвестная ошибка!");
    }
    return rejectWithValue("Register Error: " + err);
  }
});

export const fetchAddTeam = createAsyncThunk<Team, TeamParams>(
  "teams/fetchAddTeam",

  async (params, { rejectWithValue, getState }) => {
    const { imageFile, callback, ...restParams } = params;
    try {
      const { auth } = getState() as RootState;
      if (!auth.user) {
        throw new Error("Invalid operation User is undefined");
      }

      const imageUrl = imageFile
        ? await getUploadedImage(auth.user, imageFile)
        : "";

      const response = await teamsServices.postTeam(auth.user, {
        imageUrl,
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
        notification("error", "Неизвестная ошибка!");
      }
      return rejectWithValue("Register Error: " + err);
    }
  }
);

export const fetchEditTeam = createAsyncThunk<
  Team,
  TeamParams,
  { rejectValue: string; getState: () => void }
>(
  "teams/fetchEditTeam",

  async (params, { rejectWithValue, getState }) => {
    const { imageFile, imageUrlLogo, callback, ...restParams } = params;
    try {
      const { auth } = getState() as RootState;
      if (!auth.user) {
        throw new Error("Invalid operation User is undefined");
      }

      const imageUrl = imageFile
        ? await getUploadedImage(auth.user, imageFile)
        : imageUrlLogo;
      const response = await teamsServices.editTeam(auth.user, {
        imageUrl,
        ...restParams,
      });
      if (response) {
        callback && callback();
        return response;
      }
    } catch (err) {
      if (err.message) {
        return rejectWithValue(err.message);
      } else {
        return rejectWithValue(err);
      }
    }
  }
);

export const fetchTeamPlayers = createAsyncThunk<
  PlayersResponse,
  Array<{ value: string }>
>("teams/fetchTeamPlayers", async (TeamIds, { rejectWithValue, getState }) => {
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
});
