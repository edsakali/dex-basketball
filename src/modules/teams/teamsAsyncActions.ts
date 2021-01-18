import { createAsyncThunk } from "@reduxjs/toolkit";
import { teamsServices } from "../../api/teams/services";
import { RootState } from "../../redux/store";

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
      console.log(err);
      if (err.message) {
        return rejectWithValue(err.message);
      } else {
        return rejectWithValue(err);
      }
    }
  }
);
