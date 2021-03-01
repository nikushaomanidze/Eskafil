import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './src/screens/Welcome'
import Menu from './src/screens/Menu'
import Shop from './src/screens/Shop'
import Contact from './src/screens/Contact'
import About from './src/screens/About'
import Result from './src/screens/Result'
import Home from './src/screens/Home'
import Cart from './src/screens/Cart'

const Stack = createStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
             <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name="menu" component={Menu} options={{ headerShown: false }} />
      <Stack.Screen name="Shop" component={Shop} options={{ headerShown: false }} />
      <Stack.Screen name="Contact" component={Contact} options={{ headerShown: false }} /> 
      <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
      <Stack.Screen name="Result" component={Result} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="cart" component={Cart} options={{ headerShown: false }} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}