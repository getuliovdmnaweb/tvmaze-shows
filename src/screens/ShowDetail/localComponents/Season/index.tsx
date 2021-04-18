import React, { useMemo, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Episode } from "../../../../types";
import { styles } from "./styles";
import EpisodeCard from "../EpisodeCard";

interface Props {
  season: Episode[];
  seasonNumber: number;
}

const EpisodeList: React.FC<{ season: Episode[] }> = ({ season }) => {
  return useMemo(
    () => (
      <FlatList
        testID="comic-list"
        data={season}
        horizontal={true}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <EpisodeCard episode={item} />}
      />
    ),
    []
  );
};

const Season: React.FC<Props> = ({ season, seasonNumber }) => {
  const [showList, setShowList] = useState<boolean>(false);

  return (
    <View key={seasonNumber}>
      <TouchableOpacity
        style={styles.seasonCard}
        onPress={() => setShowList((prevState) => !prevState)}
      >
        <Text style={styles.title}>Season {seasonNumber}</Text>
        <MaterialIcons
          name={showList ? "keyboard-arrow-down" : "keyboard-arrow-right"}
          size={24}
          color="white"
        />
      </TouchableOpacity>
      {showList ? <EpisodeList season={season} /> : null}
    </View>
  );
};

export default Season;
