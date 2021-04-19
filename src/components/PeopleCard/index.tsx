import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { People } from "../../types";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/core";

interface Props {
  people: People;
}

const ShowCard: React.FC<Props> = ({ people }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.navigate("People Detail", { person: people })}
        accessibilityRole="button"
      >
        <Image style={styles.image} source={{ uri: people.image?.medium }} />
      </TouchableOpacity>

      <View style={styles.nameContainer}>
        <Text style={styles.name}>{people.name}</Text>
      </View>
    </View>
  );
};

export default React.memo(ShowCard);
