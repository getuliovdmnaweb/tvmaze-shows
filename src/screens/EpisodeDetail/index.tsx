import moment from "moment";
import React from "react";
import { Image, Text, View, ScrollView } from "react-native";
import { primary_gray } from "../../constants";
import { styles } from "./styles";

interface Props {
  route: any;
}
const EpisodeDetail: React.FC<Props> = ({ route }) => {
  const { episode } = route.params;

  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.title}>{episode.name}</Text>
        <Image style={styles.image} source={{ uri: episode.image.medium }} />
        <Text style={styles.summary}>
          {episode.summary
            .replace(/<[^>]*>/g, " ")
            .replace(/\s{2,}/g, " ")
            .trim()}
        </Text>
      </View>
      <View style={{ padding: 20 }}>
        <Text style={styles.title}>Episode Info</Text>
        <View style={styles.detailRow}>
          <Text style={styles.fontOption}>Air Date: </Text>
          <Text style={{ color: primary_gray }}>
            {moment.utc(episode.airstamp).format("LL")}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.fontOption}>Number: </Text>
          <Text style={{ color: primary_gray }}>
            Season {episode.season}, Episode {episode.number}{" "}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default EpisodeDetail;
