import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { FavoriteShows } from "../../screens";
import ShowsNavigator from "../ShowsNavigator";
import PeopleNavigator from "../PeopleNavigator";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Shows"
      barStyle={{ backgroundColor: "#47948B" }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Shows",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="slideshow"
              size={24}
              color={focused ? "white" : "#D1D1D1"}
            />
          ),
        }}
        name="Shows"
        component={ShowsNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Favorite Shows",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name={focused ? "star" : "star-outline"}
              size={24}
              color={focused ? "white" : "#D1D1D1"}
            />
          ),
        }}
        name="Favorites"
        component={FavoriteShows}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "People",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name={focused ? "people-alt" : "people-outline"}
              size={24}
              color={focused ? "white" : "#D1D1D1"}
            />
          ),
        }}
        name="People"
        component={PeopleNavigator}
      />
    </Tab.Navigator>
  );
}
export default TabNavigator;
