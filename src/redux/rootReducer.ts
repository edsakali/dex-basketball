import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../modules/auth/authSlice";
import { teamsReducer } from "../modules/teams/teamsSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  teams: teamsReducer,
});

export default rootReducer;
