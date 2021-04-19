import React from "react";
import { View, ActivityIndicator } from "react-native";
import { primary_blue } from "../../constants";

import { useAppSelector } from "../../hooks";

interface Props {
  children: React.ReactElement;
}

const LoadingPeopleShows: React.FC<Props> = ({ children }) => {
  const loadingPeopleShows = useAppSelector(
    (state) => state.people.loadingPeopleShows
  );

  if (loadingPeopleShows) {
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

export default LoadingPeopleShows;
