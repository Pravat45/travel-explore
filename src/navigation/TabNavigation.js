import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Location from '../screens/Location';
import Saved from '../screens/Saved';
import Profile from '../screens/Profile';
import {Icon} from 'native-base';
import Details from '../screens/Details';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator headerMode={false}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={Details} />
    </HomeStack.Navigator>
  );
}
export default function TabNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#fff',
          borderRadius: 40,
          height: 80,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                width: 50,
                borderRadius: 25,
                backgroundColor: focused ? '#0359c9' : 'transparent',
                top: 15,
              }}>
              <Icon
                name="grid-outline"
                style={{color: focused ? '#fff' : '#ccc'}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                width: 50,
                borderRadius: 25,
                backgroundColor: focused ? '#0359c9' : 'transparent',
                top: 15,
              }}>
              <Icon
                name="location-outline"
                style={{color: focused ? '#fff' : '#ccc'}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                width: 50,
                borderRadius: 25,
                backgroundColor: focused ? '#0359c9' : 'transparent',
                top: 15,
              }}>
              <Icon
                name="heart-outline"
                style={{color: focused ? '#fff' : '#ccc'}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                width: 50,
                borderRadius: 25,
                backgroundColor: focused ? '#0359c9' : 'transparent',
                top: 15,
              }}>
              <Icon
                name="person-outline"
                style={{color: focused ? '#fff' : '#ccc'}}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
