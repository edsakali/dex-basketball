import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { ParamsGetElement } from "../../api/teams/services";
import { playerServices } from "../../api/players/services";

export const fetchPlayers = createAsyncThunk<
  any,
  ParamsGetElement,
  { rejectValue: string; getState: () => void }
>("teams/fetchPlayers", async (props, { rejectWithValue, getState }) => {
  try {
    const { auth } = getState() as RootState;
    if (!auth.user) {
      throw new Error("Invalid operation User is undefined");
    }
    return await playerServices.getPlayers(auth.user, props);
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
