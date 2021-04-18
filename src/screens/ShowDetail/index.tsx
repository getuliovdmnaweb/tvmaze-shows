import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { primary_blue, primary_gray } from "../../constants";

interface Props {
  route: any;
}

const ShowDetail: React.FC<Props> = ({ route }) => {
  const { show } = route.params;
  console.log(show);
  return (
    <View style={{ backgroundColor: primary_gray, padding: 20 }}>
      <Text style={styles.title}>{show.name}</Text>
      <View style={styles.header}>
        <Image style={styles.image} source={{ uri: show.image.medium }} />
        <View style={styles.detailContainer}>
          <Text style={styles.detailTitle}>Show Detail</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailOption}>Schedule:</Text>
            {show.schedule.days.map((day: string, index: number) => {
              if (index === show.genres.length - 1) {
                return (
                  <Text key={day} style={styles.font}>
                    {" "}
                    {day},
                  </Text>
                );
              }
              return (
                <Text key={day} style={styles.font}>
                  {" "}
                  {day}.
                </Text>
              );
            })}
            <Text style={styles.font}> At {show.schedule.time}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailOption}>Genres:</Text>
            {show.genres.map((genre: string, index: number) => {
              if (index === show.genres.length - 1) {
                return (
                  <Text key={genre} style={styles.font}>
                    {genre}
                  </Text>
                );
              }
              return (
                <Text key={genre} style={styles.font}>
                  {" "}
                  {genre} |
                </Text>
              );
            })}
          </View>
        </View>
      </View>

      <Text style={{ color: "white", textAlign: "justify" }}>
        {show.summary.replace(/[<p>\<b>{\}\[\]\\\/]/gi, "")}
      </Text>
    </View>
  );
};

export default ShowDetail;
