import React from "react";
import { FlatList, View } from "react-native";
import { useShows } from "../../hooks";
import { Show } from "../../types";
import { Header, ShowCard } from "./localComponents";

const ListShows: React.FC = () => {
  const { shows } = useShows();
  console.log("shows", shows);
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
