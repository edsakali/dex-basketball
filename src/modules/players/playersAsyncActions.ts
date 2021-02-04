import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { playerServices } from "../../api/players/services";
import { postImage } from "../../api/postImg";
import { PlayerParams } from "../../api/players/PlayersDto";
import { ParamsGetElement } from "../../api/teams/services";

export const fetchPlayers = createAsyncThunk(
  "teams/fetchPlayers",
  async (props, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as RootState;
      if (!auth.user) {
        throw new Error("Invalid operation User is undefined");
      }
      return await playerServices.getPlayers(auth.user);
    } catch (err) {
      if (err.message) {
        return rejectWithValue(err.message);
      } else {
        return rejectWithValue(err);
      }
    }
  }
);

export const fetchPlayersFilter = createAsyncThunk<
  any,
  ParamsGetElement,
  { rejectValue: string; getState: () => void }
>("teams/fetchPlayersFilter", async (props, { rejectWithValue, getState }) => {
  try {
    const { auth } = getState() as RootState;
    if (!auth.user) {
      throw new Error("Invalid operation User is undefined");
    }
    return await playerServices.getPlayersFilter(auth.user, props);
  } catch (err) {
    if (err.message) {
      return rejectWithValue(err.message);
    } else {
      return rejectWithValue(err);
    }
  }
});

export const fetchPositions = createAsyncThunk(
  "teams/fetchPositions",
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

export const fetchAddPlayer = createAsyncThunk<
  any,
  PlayerParams,
  { rejectValue: string; getState: () => void }
>(
  "teams/fetchAddPlayer",

  async (AddPlayerParams, { rejectWithValue, getState }) => {
    const {
      formData,
      name,
      number,
      position,
      team,
      birthday,
      weight,
      height,
    } = AddPlayerParams;
    try {
      const { auth } = getState() as RootState;
      if (!auth.user) {
        throw new Error("Invalid operation User is undefined");
      }
      console.log(formData);
      const avatarUrl = await postImage(auth.user, formData);
      return await playerServices.postPlayer(auth.user, {
        avatarUrl,
        name,
        number,
        position,
        team,
        birthday,
        weight,
        height,
      });
    } catch (err) {
      if (err.message) {
        return rejectWithValue(err.message);
      } else {
        return rejectWithValue(err);
      }
    }
  }
);
