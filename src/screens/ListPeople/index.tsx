import React from "react";
import { FlatList, View } from "react-native";
import { useDispatch } from "react-redux";
import { Header, Input, PeopleCard } from "../../components";
import { useAppSelector } from "../../hooks";
import { fetchSearchedPeople } from "../../redux/actions";
import { People } from "../../types";
import { LoadingPeople } from "../../wrappers";

const ListPeople: React.FC = () => {
  const people = useAppSelector((state) => state.people.list);
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Header containerStyle={{ marginBottom: 20 }}>
        <Input
          placeholderText="Search People"
          onFetch={(inputValue: string) =>
            dispatch(fetchSearchedPeople(inputValue))
          }
        />
      </Header>
      <LoadingPeople>
        <FlatList
          testID="heroes-list"
          data={people}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-evenly",
            marginBottom: 20,
          }}
          keyExtractor={(item: People) => item.id.toString()}
          renderItem={({ item }) => <PeopleCard people={item} />}
        />
      </LoadingPeople>
    </View>
  );
};

export default ListPeople;
