import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../modules/auth/authSlice";

const rootReducer = combineReducers({
  auth: authSlice,
});

export default rootReducer;
