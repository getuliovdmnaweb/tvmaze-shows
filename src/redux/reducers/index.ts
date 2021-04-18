import { combineReducers } from "redux";
import { showsReducer } from "./shows";

export const rootReducer = combineReducers({
  shows: showsReducer,
});
