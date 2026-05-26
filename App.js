import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CartProvider } from './context/cartContext';
import LoginScreen from './screens/login';
import RegisterScreen from './screens/register';
import DrawerNavigator from './navigation/DrawerNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#F5F7FA" />

        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={DrawerNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
