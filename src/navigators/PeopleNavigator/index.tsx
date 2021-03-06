import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ListPeople, PeopleDetail } from "../../screens";
import { screenOptions } from "./styles";

const Stack = createStackNavigator();

function PepleNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="List People" component={ListPeople} />
      <Stack.Screen name="People Detail" component={PeopleDetail} />
    </Stack.Navigator>
  );
}

export default PepleNavigator;
