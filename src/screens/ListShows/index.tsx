import React from "react";
import { FlatList, View } from "react-native";
import { useDispatch } from "react-redux";
import { Header, Input, ShowCard } from "../../components";
import { useAppSelector } from "../../hooks";
import { fetchSearchedShows } from "../../redux/actions";
import { Show } from "../../types";
import { LoadingShows } from "../../wrappers";

const ListShows: React.FC = () => {
  const shows = useAppSelector((state) => state.shows.list);
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Header containerStyle={{ marginBottom: 20 }}>
        <Input
          placeholderText="Search Shows"
          onFetch={(inputValue: string) =>
            dispatch(fetchSearchedShows(inputValue))
          }
        />
      </Header>
      <LoadingShows>
        <FlatList
          testID="heroes-list"
          data={shows}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-evenly",
            marginBottom: 20,
          }}
          keyExtractor={(item: Show) => item.id}
          renderItem={({ item }) => (
            <ShowCard heartBroken={false} show={item} />
          )}
        />
      </LoadingShows>
    </View>
  );
};

export default ListShows;
