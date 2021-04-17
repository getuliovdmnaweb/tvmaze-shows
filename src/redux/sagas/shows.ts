import { call, put, takeLatest } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { FETCH_ALL_SHOWS, setList } from "../actions";
import { fetchAllShows } from "./api";

export function* fetchAllShowsSaga(action: AnyAction): any {
  try {
    const pageNumber = action.payload;
    const showsList = yield call(() => fetchAllShows(pageNumber));
    yield put(setList(showsList));
  } catch (e) {
    console.log(e);
  }
}

export function* watchShows() {
  yield takeLatest(FETCH_ALL_SHOWS, fetchAllShowsSaga);
}
