import { Show } from "../../types";

export const SET_LIST = "shows/SET_LIST";
export const setList = (show: Show[]) => {
  return {
    type: SET_LIST,
    payload: show,
  };
};

export const ADD_FAVORITE_SHOW = "shows/ADD_FAVORITE_SHOW";
export const addFavoriteShow = (show: Show) => {
  return {
    type: ADD_FAVORITE_SHOW,
    payload: show,
  };
};

export const DELETE_FAVORITE_SHOW = "shows/DELETE_FAVORITE_SHOW";
export const deleteFavoriteShow = (show: Show) => {
  return {
    type: DELETE_FAVORITE_SHOW,
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

export const SORT_FAVORITE_LIST = "shows/SORT_FAVORITE_LIST";
export const sortFavoriteList = (favoriteList: Show[]) => {
  return {
    type: SORT_FAVORITE_LIST,
    payload: favoriteList,
  };
};

export const SET_SORTING_SHOWS = "shows/SET_SORTING_SHOWS";
export const setSortingShows = (sortingShows: boolean) => {
  return {
    type: SET_SORTING_SHOWS,
    payload: sortingShows,
  };
};

export type ShowsReducerAction = ReturnType<
  | typeof setList
  | typeof fetchAllShows
  | typeof fetchSearchedShows
  | typeof setLoadingshows
  | typeof setLoadingEpisodes
  | typeof addFavoriteShow
  | typeof deleteFavoriteShow
  | typeof sortFavoriteList
>;
