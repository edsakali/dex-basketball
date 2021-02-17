import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "../modules/auth/authSlice";
import { teamsReducer } from "../modules/teams/teamsSlice";
import { playersReducer } from "../modules/players/playersSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  teams: teamsReducer,
  players: playersReducer,
});

export default rootReducer;
