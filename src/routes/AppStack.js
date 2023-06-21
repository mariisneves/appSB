import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Terms from "../pages/Terms";
import Home from "../pages/Home";

const { Navigator, Screen } = createStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />
        <Screen name="Home" component={Home} />
        <Screen name="Terms" component={Terms} />
      </Navigator>
    </NavigationContainer>
  );
}
