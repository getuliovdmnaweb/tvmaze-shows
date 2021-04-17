import React from "react";
import { FlatList, View } from "react-native";
import { useAppSelector } from "../../hooks";
import { Show } from "../../types";
import { Header, ShowCard } from "./localComponents";

const ListShows: React.FC = () => {
  const shows = useAppSelector((state) => state.shows.list);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Header containerStyle={{ marginBottom: 20 }} />

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
    </View>
  );
};

export default ListShows;
