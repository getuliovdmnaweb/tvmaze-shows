import React from "react";
import { Text, View } from "react-native";

interface Props {
  route: any;
}
const EpisodeDetail: React.FC<Props> = ({ route }) => {
  const { episode } = route.params;
  console.log(episode);
  return (
    <View>
      <Text>Espisode Detail</Text>
    </View>
  );
};

export default EpisodeDetail;
