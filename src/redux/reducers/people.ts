import { People } from "../../types";
import {
  SET_LOADING_PEOPLE,
  SET_LOADING_PEOPLE_SHOWS,
  SET_PEOPLE_LIST,
} from "../actions/people";

interface ReducerState {
  list: People[];
  loadingPeople: boolean;
  loadingPeopleShows: boolean;
}

const initialState: ReducerState = {
  list: [],
  loadingPeople: false,
  loadingPeopleShows: false,
};

export const peopleReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PEOPLE_LIST:
      return {
        ...state,
        list: [...(action.payload as People[])],
      };

    case SET_LOADING_PEOPLE:
      return {
        ...state,
        loadingPeople: action.payload,
      };
    case SET_LOADING_PEOPLE_SHOWS:
      return {
        ...state,
        loadingPeopleShows: action.payload,
      };
    default:
      return state;
  }
};
