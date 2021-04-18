import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { Show } from "../../types";
import { Ordering, sortAlphabetically } from "../../utils";
import { useAppDispatch } from "../../hooks";
import { setSortingShows, sortFavoriteList } from "../../redux/actions";

interface Props {
  favoriteShows: Show[];
}

const Dropdown: React.FC<Props> = ({ favoriteShows }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const dispatch = useAppDispatch();

  const sortFavoriteShows = (ordering: Ordering) => {
    setToggleDropdown((prevState) => !prevState);
    dispatch(setSortingShows(true));
    const sortedShows = sortAlphabetically(favoriteShows, ordering);
    dispatch(sortFavoriteList(sortedShows));
    dispatch(setSortingShows(false));
  };
  return (
    <View style={{ marginBottom: 20 }}>
      <TouchableOpacity
        onPress={() => {
          setToggleDropdown((prevState) => !prevState);
        }}
        style={styles.dropDown}
      >
        <Text style={styles.dropdownText}>Sort Alphabetically</Text>
        <MaterialIcons
          name={toggleDropdown ? "keyboard-arrow-down" : "keyboard-arrow-right"}
          size={24}
          color="white"
        />
      </TouchableOpacity>
      {toggleDropdown ? (
        <View style={styles.dropdownSelect}>
          <TouchableOpacity
            onPress={() => {
              sortFavoriteShows(Ordering.ASCENDING);
            }}
            style={styles.dropdownOption}
          >
            <Text style={styles.dropdownOptionText}>Ascending Sort</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              sortFavoriteShows(Ordering.DESCENDING);
            }}
            style={{ padding: 10 }}
          >
            <Text style={styles.dropdownOptionText}>Descending Sort</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default Dropdown;
