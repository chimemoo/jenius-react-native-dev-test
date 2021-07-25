import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Create from '../../screens/Create';
import Home from '../../screens/Home';
import Update from '../../screens/Update';
import Detail from '../../screens/Detail';

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Create" component={Create} />
      <Stack.Screen name="Update" component={Update} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}

export default MainNavigation;
