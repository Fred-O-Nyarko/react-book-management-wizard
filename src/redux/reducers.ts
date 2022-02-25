import { combineReducers } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";
import stepSlice from "./stepsSlice";

export const rootReducer = combineReducers({
  books: bookSlice,
  step: stepSlice,
});
