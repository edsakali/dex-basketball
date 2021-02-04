import { createAsyncThunk } from "@reduxjs/toolkit";
import { ParamsGetElement, teamsServices } from "../../api/teams/services";
import { RootState } from "../../redux/store";
import { AddTeamParams, EditTeamParams } from "../../api/teams/TeamsDto";
import { postImage } from "../../api/postImg";

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

export const fetchTeamsFilter = createAsyncThunk<
  any,
  ParamsGetElement,
  { rejectValue: string; getState: () => void }
>("teams/fetchTeamsFilter", async (props, { rejectWithValue, getState }) => {
  try {
    const { auth } = getState() as RootState;
    if (!auth.user) {
      throw new Error("Invalid operation User is undefined");
    }
    return await teamsServices.getTeamsFilter(auth.user, props);
  } catch (err) {
    if (err.message) {
      return rejectWithValue(err.message);
    } else {
      return rejectWithValue(err);
    }
  }
});

export const fetchTeamId = createAsyncThunk<
  any,
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
  any,
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
      console.log(formData);
      const imageUrl = await postImage(auth.user, formData);
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

export const fetchEditTeam = createAsyncThunk<
  any,
  EditTeamParams,
  { rejectValue: string; getState: () => void }
>(
  "teams/fetchEditTeam",

  async (AddTeamParams, { rejectWithValue, getState }) => {
    const {
      id,
      file,
      formData,
      name,
      foundationYear,
      division,
      conference,
      imageUrlLogo,
    } = AddTeamParams;
    try {
      const { auth } = getState() as RootState;
      if (!auth.user) {
        throw new Error("Invalid operation User is undefined");
      }
      const imageUrl = !file
        ? imageUrlLogo
        : await postImage(auth.user, formData);
      return await teamsServices.editTeam(auth.user, {
        id,
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
