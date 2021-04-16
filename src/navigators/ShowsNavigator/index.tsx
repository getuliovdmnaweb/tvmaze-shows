import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FavoriteShows, ListShows } from "../../screens";
import { screenOptions } from "./styles";

const Stack = createStackNavigator();

function ShowsNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="List Shows" component={ListShows} />
      <Stack.Screen name="Favorite Shows" component={FavoriteShows} />
    </Stack.Navigator>
  );
}

export default ShowsNavigator;
