import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import Cart from './screens/Cart';
import ProductScreen from './screens/ProductScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerHome = () => (
  <Drawer.Navigator screenOptions={{ headerShown: false, drawerStyle: {backgroundColor: 'black'}, drawerItemStyle: {backgroundColor: 'white'},
  drawerLabelStyle: {color: 'black'} }} >
    <Drawer.Screen name="Home" component={Home} />
  </Drawer.Navigator>
);

export default function App(){

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DrawerHome" component={DrawerHome} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};