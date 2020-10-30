import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/Login';
import Landing from './src/screens/Landing';
import Register from './src/screens/Register';
import Main from './src/screens/Main';

export default function App(props) {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown:false}}>
          <Stack.Screen name="landing" component={Landing}/>
          <Stack.Screen name="login" component={Login}/> 
          <Stack.Screen name="register" component={Register}/> 
          <Stack.Screen name="main" component={Main}/> 
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}

