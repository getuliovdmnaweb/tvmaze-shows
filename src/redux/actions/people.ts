import { People } from "../../types";

export const SET_PEOPLE_LIST = "people/SET_PEOPLE_LIST";
export const setPeopleList = (show: People[]) => {
  return {
    type: SET_PEOPLE_LIST,
    payload: show,
  };
};

export const FETCH_SEARCHED_PEOPLE = "people/FETCH_SEARCHED_PEOPLE";
export const fetchSearchedPeople = (peopleName: string) => {
  return {
    type: FETCH_SEARCHED_PEOPLE,
    payload: peopleName,
  };
};

export const SET_LOADING_PEOPLE = "people/SET_LOADING_PEOPLE";
export const setLoadingPeople = (loadingPeople: boolean) => {
  return {
    type: SET_LOADING_PEOPLE,
    payload: loadingPeople,
  };
};
