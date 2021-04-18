import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { primary_gray } from "../../constants";
import { useSeasonEpisodes } from "../../hooks";
import { ScrollView } from "react-native-gesture-handler";
import { Season, DetailRow } from "./localComponents";
import { LoadingEpisodes } from "../../wrappers";

interface Props {
  route: any;
}

const ShowDetail: React.FC<Props> = ({ route }) => {
  const { show } = route.params;
  const { seasons } = useSeasonEpisodes(show);

  return (
    <ScrollView>
      <View
        style={{ backgroundColor: primary_gray, padding: 20, marginBottom: 10 }}
      >
        <Text style={styles.title}>{show.name}</Text>
        <View style={styles.header}>
          <Image style={styles.image} source={{ uri: show.image.medium }} />
          <View style={styles.detailContainer}>
            <Text style={styles.detailTitle}>Show Detail</Text>
            <View style={styles.detailRow}>
              <DetailRow optionTitle="Schedule:" options={show.schedule.days} />
              <Text style={styles.font}> At {show.schedule.time}</Text>
            </View>
            <View style={styles.detailRow}>
              <DetailRow optionTitle="Genres:" options={show.genres} />
            </View>
          </View>
        </View>

        <Text style={{ color: "white", textAlign: "justify" }}>
          {show.summary
            .replace(/<[^>]*>/g, " ")
            .replace(/\s{2,}/g, " ")
            .trim()}
        </Text>
      </View>
      <View>
        <Text style={styles.title}>All Seasons</Text>
        <LoadingEpisodes>
          <View style={{ marginBottom: 20, paddingHorizontal: 20 }}>
            {seasons.map((season: any, index: number) => (
              <Season key={index} seasonNumber={index + 1} season={season} />
            ))}
          </View>
        </LoadingEpisodes>
      </View>
    </ScrollView>
  );
};

export default ShowDetail;
