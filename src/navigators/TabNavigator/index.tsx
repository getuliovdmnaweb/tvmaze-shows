import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FavoriteShows } from "../../screens";
import ShowsNavigator from "../ShowsNavigator";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Shows" component={ShowsNavigator} />
      <Tab.Screen name="Favorites" component={FavoriteShows} />
    </Tab.Navigator>
  );
}
export default TabNavigator;
