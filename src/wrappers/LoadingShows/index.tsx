import React from "react";
import { View, ActivityIndicator } from "react-native";
import { primary_blue } from "../../constants";

import { useAppSelector } from "../../hooks";

interface Props {
  children: React.ReactElement;
}

const LoadingShows: React.FC<Props> = ({ children }) => {
  const loadingShows = useAppSelector((state) => state.shows.loadingShows);

  if (loadingShows) {
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

export default LoadingShows;
