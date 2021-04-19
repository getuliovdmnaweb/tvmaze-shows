import axios from "axios";
import { useEffect, useState } from "react";
import { useAppDispatch } from "./useRedux";
import { setLoadingPeopleShows } from "../redux/actions";
import { People } from "../types";

export const usePeopleShows = (person: People) => {
  const [personShows, setPersonShows] = useState<any>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchPersonShows = async () => {
      dispatch(setLoadingPeopleShows(true));

      const personEmbed: any = await axios.get(
        `http://api.tvmaze.com/people/${person.id}?embed=castcredits`
      );

      const personShowLinks = personEmbed.data._embedded.castcredits.map(
        (credit: any) => credit._links.show.href
      );
      const shows = await fetchPeopleShows(personShowLinks);

      setPersonShows(shows);

      dispatch(setLoadingPeopleShows(false));
    };

    fetchPersonShows();
  }, []);

  return {
    personShows,
  };
};

const fetchPeopleShows = async (showLinks: string[]) => {
  const peopleShows = showLinks.map(async (showLink: string) => {
    const response = await axios.get(showLink);
    return response.data;
  });

  const shows = await Promise.all(peopleShows);

  return shows;
};
