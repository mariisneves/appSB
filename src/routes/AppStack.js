import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Welcome from '../pages/Welcome';
import Terms from '../pages/Terms';
import ProductList from '../pages/ProductsList';

const { Navigator, Screen } = createStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="ProductList" component={ProductList} />
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />
        <Screen name="Welcome" component={Welcome} />
        <Screen name="Terms" component={Terms} />
      </Navigator>
    </NavigationContainer>
  );
}
