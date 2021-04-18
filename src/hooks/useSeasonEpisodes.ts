import axios from "axios";
import { useEffect, useState } from "react";
import { Episode, Show } from "../types";

export const useSeasonEpisodes = (show: Show) => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  useEffect(() => {
    const fetchEpisodes = async () => {
      const seasonIds = await fetchSeasonsId(show.id);
      const episodesBySeason = await fetchEpisodesBySeason(seasonIds);
      setEpisodes(episodesBySeason);
    };
    fetchEpisodes();
  }, []);

  return {
    episodes,
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
  const episodes = await Promise.all(seasonEpisodes);
  return episodes;
};
