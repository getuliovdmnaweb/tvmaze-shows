import { Show } from "../types";

export enum Ordering {
  ASCENDING = "ascending",
  DESCENDING = "descending",
}

export const sortAlphabetically = (
  favoriteList: Show[],
  ordering: Ordering
) => {
  const listOfNames = favoriteList.map((show) => show.name);
  const sortedNames =
    ordering === Ordering.ASCENDING
      ? listOfNames.sort()
      : listOfNames.sort(descendingOrder);

  const sortedList = sortedNames.map((name) => {
    return favoriteList.find((show: Show) => show.name === name);
  });
  return sortedList as Show[];
};

const descendingOrder = (a: any, b: any) => {
  if (a > b) {
    return -1;
  }
  if (b > a) {
    return 1;
  }
  return 0;
};
