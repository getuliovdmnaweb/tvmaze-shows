import React from "react";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./src/navigators";
import store from "./src/redux";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
        <StatusBar />
      </NavigationContainer>
    </Provider>
  );
}
