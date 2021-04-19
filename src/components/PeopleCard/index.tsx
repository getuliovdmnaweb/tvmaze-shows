import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { People } from "../../types";
import { styles } from "./styles";

interface Props {
  people: People;
}

const ShowCard: React.FC<Props> = ({ people }) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity accessibilityRole="button">
        <Image style={styles.image} source={{ uri: people.image?.medium }} />
      </TouchableOpacity>

      <View style={styles.nameContainer}>
        <Text style={styles.name}>{people.name}</Text>
      </View>
    </View>
  );
};

export default React.memo(ShowCard);
