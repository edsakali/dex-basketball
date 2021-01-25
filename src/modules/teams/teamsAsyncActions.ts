import { createAsyncThunk } from "@reduxjs/toolkit";
import { teamsServices } from "../../api/teams/services";
import { RootState } from "../../redux/store";
import { AddTeamParams } from "../../api/teams/TeamsDto";

export const fetchTeams = createAsyncThunk(
  "teams/fetchTeams",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as RootState;
      if (!auth.user) {
        throw new Error("Invalid operation User is undefined");
      }
      return await teamsServices.getTeams(auth.user);
    } catch (err) {
      if (err.message) {
        return rejectWithValue(err.message);
      } else {
        return rejectWithValue(err);
      }
    }
  }
);

export const fetchTeamId = createAsyncThunk<
  any,
  { id: number },
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

export const fetchAddTeam = createAsyncThunk<
  any,
  AddTeamParams,
  { rejectValue: string; getState: () => void }
>(
  "teams/fetchAddTeam",

  async (AddTeamParams, { rejectWithValue, getState }) => {
    const {
      formData,
      name,
      foundationYear,
      division,
      conference,
    } = AddTeamParams;
    try {
      const { auth } = getState() as RootState;
      if (!auth.user) {
        throw new Error("Invalid operation User is undefined");
      }
      const imageUrl = await teamsServices.postImage(auth.user, formData);
      return await teamsServices.postTeam(auth.user, {
        name,
        foundationYear,
        division,
        conference,
        imageUrl,
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
