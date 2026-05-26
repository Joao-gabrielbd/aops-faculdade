import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/home';
import CartScreen from '../screens/cart';
import ProfileScreen from '../screens/profile';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Galeria de Arte' }} />
      <Drawer.Screen name="Cart" component={CartScreen} options={{ title: 'Meu Carrinho' }} />
      <Drawer.Screen name="Profile" component={ProfileScreen} options={{ title: 'Meu Perfil' }} />
    </Drawer.Navigator>
  );
}
