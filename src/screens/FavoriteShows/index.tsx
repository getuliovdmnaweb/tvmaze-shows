import React, { useMemo } from "react";
import { FlatList, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header, ShowCard } from "../../components";
import { useAppSelector } from "../../hooks";
import { Show } from "../../types";
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
        renderItem={({ item }) => <ShowCard show={item} />}
      />
    );
  }, []);
};

const FavoriteShows: React.FC = () => {
  const shows = useAppSelector((state) => state.shows.list);
  return (
    <SafeAreaView>
      <Header containerStyle={{ marginBottom: 20 }}>
        <Text style={styles.title}>Favorite Shows</Text>
      </Header>

      <ShowList shows={shows} />
    </SafeAreaView>
  );
};

export default FavoriteShows;
