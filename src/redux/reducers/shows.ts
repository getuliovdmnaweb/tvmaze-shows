import { Show } from "../../types";
import { ShowsReducerAction, SET_LIST } from "../actions";

interface ShowsReducerState {
  list: Show[];
}

const initialState: ShowsReducerState = {
  list: [],
};

export const showsReducer = (
  state: ShowsReducerState = initialState,
  action: ShowsReducerAction
) => {
  switch (action.type) {
    case SET_LIST:
      return {
        ...state,
        list: [...(action.payload as Show[])],
      };
    default:
      return state;
  }
};
