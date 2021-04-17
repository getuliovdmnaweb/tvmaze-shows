import { Show } from "../../../types";
import { api } from "./api";
export * from "./api";
import { ALL_SHOWS } from "./urls";
export * from "./urls";

export const fetchAllShows = async (page: number): Promise<Show[]> => {
  const response = await api.get(ALL_SHOWS, {
    params: { page },
  });
  return response;
};
