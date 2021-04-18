import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Episode } from "../../../../types";

interface Props {
  episode: Episode;
}

const EpisodeCard: React.FC<Props> = ({ episode }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Episode Detail", { episode })}
      style={styles.episodeCard}
    >
      <Image style={styles.image} source={{ uri: episode.image?.medium }} />
      <View style={styles.textRow}>
        <Text style={styles.episodeTitle}>Episode {episode.number} - </Text>
        <Text style={styles.episodeName}>{episode.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(EpisodeCard);
