import { call, put, takeLatest } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import {
  FETCH_ALL_SHOWS,
  FETCH_SEARCHED_SHOWS,
  setList,
  setLoadingshows,
} from "../actions";
import { fetchAllShows, fetchSearchedShows } from "./api";

export function* fetchAllShowsSaga(action: AnyAction): any {
  try {
    yield put(setLoadingshows(true));
    const pageNumber = action.payload;
    const showsList = yield call(() => fetchAllShows(pageNumber));
    yield put(setList(showsList));
    yield put(setLoadingshows(false));
  } catch (e) {
    console.log(e);
  }
}

export function* fetchSearchedShowsSaga(action: AnyAction): any {
  try {
    yield put(setLoadingshows(true));
    const showName = action.payload;
    const showsList = yield call(() => fetchSearchedShows(showName));
    yield put(setList(showsList));
    yield put(setLoadingshows(false));
  } catch (e) {
    console.log(e);
  }
}

export function* watchShows() {
  yield takeLatest(FETCH_ALL_SHOWS, fetchAllShowsSaga);
  yield takeLatest(FETCH_SEARCHED_SHOWS, fetchSearchedShowsSaga);
}
