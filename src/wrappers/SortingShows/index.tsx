import React from "react";
import { View, ActivityIndicator } from "react-native";
import { primary_blue } from "../../constants";

import { useAppSelector } from "../../hooks";

interface Props {
  children: React.ReactElement;
}

const SortingShows: React.FC<Props> = ({ children }) => {
  const sortingShows = useAppSelector((state) => state.shows.sortingShows);

  if (sortingShows) {
    return (
      <View style={{ flex: 1 }}>
        <ActivityIndicator
          accessibilityRole="spinbutton"
          size={60}
          color={primary_blue}
        />
      </View>
    );
  }
  return children;
};

export default SortingShows;
