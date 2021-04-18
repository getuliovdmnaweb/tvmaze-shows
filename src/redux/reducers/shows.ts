import { Show } from "../../types";
import { SET_LIST, SET_LOADING_SHOWS } from "../actions";
import { SET_LOADING_EPISODES } from "../actions/shows";

interface ReducerState {
  list: Show[];
  loadingShows: boolean;
  loadingEpisodes: boolean;
}

const initialState: ReducerState = {
  list: [],
  loadingShows: false,
  loadingEpisodes: false,
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
    case SET_LOADING_EPISODES:
      return {
        ...state,
        loadingEpisodes: action.payload,
      };
    default:
      return state;
  }
};
