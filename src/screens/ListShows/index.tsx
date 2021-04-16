import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Header } from "./localComponents";

const ListShows: React.FC = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
      }}
    >
      <Header containerStyle={{ marginBottom: 20 }} />
      <View>
        <Text>List</Text>
      </View>
    </ScrollView>
  );
};

export default ListShows;
