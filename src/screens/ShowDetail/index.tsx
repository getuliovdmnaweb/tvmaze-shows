import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { primary_gray } from "../../constants";
import DetailRow from "./localComponents/DetailRow";
import axios from "axios";
import { useSeasonEpisodes } from "../../hooks/useSeasonEpisodes";
import LoadingEpisodes from "../../wrappers/LoadingEpisodes";

interface Props {
  route: any;
}

const ShowDetail: React.FC<Props> = ({ route }) => {
  const { show } = route.params;
  const { episodes } = useSeasonEpisodes(show);
  console.log("Episodes", episodes);
  return (
    <View style={{ backgroundColor: primary_gray, padding: 20 }}>
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
        {show.summary.replace(/[<p>\<b>{\}\[\]\\\/]/gi, "")}
      </Text>
      <LoadingEpisodes>
        <View>
          <Text>List of Episodes</Text>
        </View>
      </LoadingEpisodes>
    </View>
  );
};

export default ShowDetail;
