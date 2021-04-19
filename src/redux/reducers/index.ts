import { combineReducers } from "redux";
import { showsReducer } from "./shows";
import { peopleReducer } from "./people";
export const rootReducer = combineReducers({
  shows: showsReducer,
  people: peopleReducer,
});
