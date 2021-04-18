import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { MaterialIcons } from "@expo/vector-icons";
import { Show } from "../../types";
import { styles } from "./styles";
import { light_blue } from "../../constants";

interface Props {
  show: Show;
}

const ShowCard: React.FC<Props> = ({ show }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => navigation.navigate("Show Detail", { show })}
      >
        <Image style={styles.image} source={{ uri: show.image.medium }} />
      </TouchableOpacity>

      <View style={styles.nameContainer}>
        <Text style={styles.name}>{show.name}</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => console.log("Ei")}>
          <MaterialIcons name="favorite" size={30} color={light_blue} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(ShowCard);
