import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../modules/auth/authSlice";
import { teamsReducer } from "../modules/teams/teamsSlice";
import { playersReducer } from "../modules/players/playersSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  teams: teamsReducer,
  players: playersReducer,
});

export default rootReducer;
