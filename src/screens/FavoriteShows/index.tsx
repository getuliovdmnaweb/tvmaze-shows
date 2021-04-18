import React, { useMemo } from "react";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header, ShowCard } from "../../components";
import { useAppSelector } from "../../hooks";
import { Show } from "../../types";
import { sortAlphabetically } from "../../utils";
import Dropdown from "./Dropdown";
import { styles } from "./styles";

interface Props {
  shows: Show[];
}

const ShowList: React.FC<Props> = ({ shows }) => {
  return useMemo(() => {
    return (
      <FlatList
        testID="heroes-list"
        data={shows}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-evenly",
          marginBottom: 20,
        }}
        keyExtractor={(item: Show) => item.id}
        renderItem={({ item }) => <ShowCard heartBroken={true} show={item} />}
      />
    );
  }, [shows]);
};

const FavoriteShows: React.FC = () => {
  const favoriteShows = sortAlphabetically(
    useAppSelector((state) => state.shows.favoriteList)
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header containerStyle={{ marginBottom: 20 }}>
        <Text style={styles.title}>Favorite Shows</Text>
      </Header>
      <Dropdown onOpen={() => console.log("open")} />
      <ShowList shows={favoriteShows} />
    </SafeAreaView>
  );
};

export default FavoriteShows;
