import { Show } from "../../types";
import { ShowsReducerAction, SET_LIST, SET_LOADING_SHOWS } from "../actions";

const initialState = {
  list: [],
  loadingShows: false,
};

export const showsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LIST:
      return {
        ...state,
        list: [...(action.payload as Show[])],
      };
    case SET_LOADING_SHOWS:
      return {
        ...state,
        loadingShows: action.payload,
      };
    default:
      return state;
  }
};
