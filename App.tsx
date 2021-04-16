import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./src/navigators";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
      <StatusBar />
    </NavigationContainer>
  );
}
