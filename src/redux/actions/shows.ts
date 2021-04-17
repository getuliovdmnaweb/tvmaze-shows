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

export type ShowsReducerAction = ReturnType<
  typeof setList | typeof fetchAllShows
>;
