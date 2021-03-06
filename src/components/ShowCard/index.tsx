import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Show } from "../../types";
import { styles } from "./styles";
import { light_blue, primary_gray } from "../../constants";
import { useAppDispatch } from "../../hooks";
import { addFavoriteShow, deleteFavoriteShow } from "../../redux/actions";

interface Props {
  show: Show;
  heartBroken: boolean;
}

const ShowCard: React.FC<Props> = ({ show, heartBroken }) => {
  const [likedShow, setLikedShow] = useState(false);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  return (
    <View style={styles.card}>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => navigation.navigate("Show Detail", { show })}
      >
        <Image style={styles.image} source={{ uri: show.image?.medium }} />
      </TouchableOpacity>

      <View style={styles.nameContainer}>
        <Text style={styles.name}>{show.name}</Text>
      </View>
      <View style={styles.iconContainer}>
        {heartBroken ? (
          <TouchableOpacity onPress={() => dispatch(deleteFavoriteShow(show))}>
            <MaterialCommunityIcons
              name="heart-broken"
              size={30}
              color={light_blue}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setLikedShow(true);
              dispatch(addFavoriteShow(show));
            }}
          >
            <MaterialIcons
              name="favorite"
              size={30}
              color={likedShow ? primary_gray : light_blue}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default React.memo(ShowCard);
