import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Episode } from "../../../../types";

interface Props {
  episode: Episode;
}

const EpisodeCard: React.FC<Props> = ({ episode }) => {
  return <View style={styles.episodeCard} />;
};

export default React.memo(EpisodeCard);
