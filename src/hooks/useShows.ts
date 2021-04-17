import { useEffect, useState } from "react";
import { ALL_SHOWS, api } from "../api";

export const useShows = () => {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    const fetchShows = async () => {
      const fetchedShows = await api.get(ALL_SHOWS, {
        params: { page: 0 },
      });
      setShows(fetchedShows);
    };
    fetchShows();
  }, []);

  return {
    shows,
  };
};
