import { call, all } from "redux-saga/effects";
import { fetchAllShows } from "../actions";
import { fetchAllShowsSaga, watchShows } from "./shows";

export function* initializeSagas() {
  yield all([
    call(watchShows),
    call(() => fetchAllShowsSaga(fetchAllShows(0))),
  ]);
}
