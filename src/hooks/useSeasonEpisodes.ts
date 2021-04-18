import axios from "axios";
import { useEffect, useState } from "react";
import { useAppDispatch } from "./useRedux";
import { setLoadingEpisodes } from "../redux/actions/shows";
import { Episode, Show } from "../types";

export const useSeasonEpisodes = (show: Show) => {
  const [seasons, setSeasons] = useState<Episode[]>([]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchSeasons = async () => {
      dispatch(setLoadingEpisodes(true));
      const seasonIds = await fetchSeasonsId(show.id);
      const episodesBySeason = await fetchEpisodesBySeason(seasonIds);
      setSeasons(episodesBySeason);
      dispatch(setLoadingEpisodes(false));
    };
    fetchSeasons();
  }, []);

  return {
    seasons,
  };
};

const fetchSeasonsId = async (showId: string) => {
  const seasons = await axios.get(
    `http://api.tvmaze.com/shows/${showId}/seasons`
  );
  const seasonIds = seasons.data.map((season: any) => season.id);
  return seasonIds;
};

const fetchEpisodesBySeason = async (seasonIds: number[]) => {
  const seasonEpisodes = seasonIds.map(async (seasonId: number) => {
    const response = await axios.get(
      `http://api.tvmaze.com/seasons/${seasonId}/episodes`
    );
    return response.data;
  });
  const seasons = await Promise.all(seasonEpisodes);
  return seasons;
};
