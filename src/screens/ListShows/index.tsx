import React from "react";
import { FlatList, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { Show } from "../../types";
import { Header, ShowCard } from "./localComponents";

const ListShows: React.FC = () => {
  const shows = useSelector((state: RootState) => state.shows.list);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Header containerStyle={{ marginBottom: 20 }} />
      <View>
        <FlatList
          testID="heroes-list"
          data={shows}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-evenly",
            marginTop: 10,
          }}
          keyExtractor={(item: Show) => item.id}
          renderItem={({ item }) => <ShowCard show={item} />}
        />
      </View>
    </View>
  );
};

export default ListShows;
