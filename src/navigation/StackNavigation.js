import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();
export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false} initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
