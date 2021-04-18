import { Show } from "../types";

export const sortAlphabetically = (favoriteList: Show[]): Show[] => {
  const listOfNames = favoriteList.map((show) => show.name);
  const sortedNames = listOfNames.sort();
  const sortedList = sortedNames.map((name) => {
    return favoriteList.find((show: Show) => show.name === name);
  });
  return sortedList as Show[];
};
