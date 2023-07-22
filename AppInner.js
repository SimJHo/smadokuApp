import React from 'react';
import Home from './src/pages/Home';
import TestPage from './src/pages/TestPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppInner = (props) => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='TestPage' component={TestPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppInner;
