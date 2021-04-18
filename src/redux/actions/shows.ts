import { Show } from "../../types";

export const SET_LIST = "shows/SET_LIST";
export const setList = (show: Show[]) => {
  return {
    type: SET_LIST,
    payload: show,
  };
};

export const FETCH_ALL_SHOWS = "shows/FETCH_ALL_SHOWS";
export const fetchAllShows = (pageNumber: number) => {
  return {
    type: FETCH_ALL_SHOWS,
    payload: pageNumber,
  };
};

export const FETCH_SEARCHED_SHOWS = "shows/FETCH_SEARCHED_SHOWS";
export const fetchSearchedShows = (showName: string) => {
  return {
    type: FETCH_SEARCHED_SHOWS,
    payload: showName,
  };
};

export const SET_LOADING_SHOWS = "shows/LOADING_SHOWS";
export const setLoadingshows = (loadingShows: boolean) => {
  return {
    type: SET_LOADING_SHOWS,
    payload: loadingShows,
  };
};

export const SET_LOADING_EPISODES = "shows/LOADING_EPISODES";
export const setLoadingEpisodes = (loadingEpisodes: boolean) => {
  return {
    type: SET_LOADING_EPISODES,
    payload: loadingEpisodes,
  };
};

export type ShowsReducerAction = ReturnType<
  | typeof setList
  | typeof fetchAllShows
  | typeof fetchSearchedShows
  | typeof setLoadingshows
  | typeof setLoadingEpisodes
>;
