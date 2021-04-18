import { Show } from "../../types";
import {
  SET_LIST,
  SET_LOADING_SHOWS,
  ADD_FAVORITE_SHOW,
  DELETE_FAVORITE_SHOW,
  SET_LOADING_EPISODES,
} from "../actions";
import {} from "../actions/shows";

interface ReducerState {
  list: Show[];
  loadingShows: boolean;
  loadingEpisodes: boolean;
  favoriteList: Show[];
}

const initialState: ReducerState = {
  list: [],
  loadingShows: false,
  loadingEpisodes: false,
  favoriteList: [],
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
    case ADD_FAVORITE_SHOW:
      return {
        ...state,
        favoriteList: [...state.favoriteList, action.payload],
      };
    case DELETE_FAVORITE_SHOW:
      const newFavoriteList = state.favoriteList.filter(
        (show) => show.id !== action.payload.id
      );
      return {
        ...state,
        favoriteList: newFavoriteList,
      };
    default:
      return state;
  }
};
