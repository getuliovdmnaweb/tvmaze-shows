import { call, put, takeLatest } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import {
  setPeopleList,
  FETCH_SEARCHED_PEOPLE,
  setLoadingPeople,
} from "../actions";
import { fetchSearchedPeople } from "./api";

export function* fetchSearchedPeopleSaga(action: AnyAction): any {
  try {
    yield put(setLoadingPeople(true));
    const peopleName = action.payload;
    const peopleList = yield call(() => fetchSearchedPeople(peopleName));
    yield put(setPeopleList(peopleList));
    yield put(setLoadingPeople(false));
  } catch (e) {
    console.log(e);
  }
}

export function* watchPeople() {
  yield takeLatest(FETCH_SEARCHED_PEOPLE, fetchSearchedPeopleSaga);
}
