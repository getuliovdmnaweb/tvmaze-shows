import { SearchedShow, Show } from "../../../types";
import { api } from "./api";
export * from "./api";
import { ALL_SHOWS, SEARCH_SHOWS } from "./urls";
export * from "./urls";

export const fetchAllShows = async (page: number): Promise<Show[]> => {
  const response = await api.get(ALL_SHOWS, {
    params: { page },
  });
  return response;
};

export const fetchSearchedShows = async (showName: string): Promise<Show[]> => {
  const response = await api.get(SEARCH_SHOWS, {
    params: { q: showName },
  });
  const showsList = response.map((show: SearchedShow) => ({
    score: show.score,
    ...show.show,
  }));
  return showsList;
};
