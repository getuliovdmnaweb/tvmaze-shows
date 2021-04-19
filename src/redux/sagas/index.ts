import { call, all } from "redux-saga/effects";
import { fetchAllShows } from "../actions";
import { fetchAllShowsSaga, watchShows } from "./shows";
import { watchPeople } from "./people";

export function* initializeSagas() {
  yield all([
    call(watchPeople),
    call(watchShows),
    call(() => fetchAllShowsSaga(fetchAllShows(0))),
  ]);
}
