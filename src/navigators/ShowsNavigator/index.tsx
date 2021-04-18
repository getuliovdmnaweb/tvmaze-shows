import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { EpisodeDetail, ListShows, ShowDetail } from "../../screens";
import { screenOptions } from "./styles";

const Stack = createStackNavigator();

function ShowsNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="List Shows" component={ListShows} />
      <Stack.Screen name="Show Detail" component={ShowDetail} />
      <Stack.Screen name="Episode Detail" component={EpisodeDetail} />
    </Stack.Navigator>
  );
}

export default ShowsNavigator;
