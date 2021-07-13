/**
 * Main page for Dinner for One App
 *
 * @author Drew Williamson
 */

import * as React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import createBottomTabNavigator from '@react-navigation/bottom-tabs/src/navigators/createBottomTabNavigator';
import HomeTab from './src/scenes/home-tab';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GroceryListTab from './src/scenes/grocery-list-tab';
import SettingsTab from './src/scenes/settings-tab';
import PlanTab from './src/scenes/plan-tab';
import {
  headerColor,
  subHeaderTextColor,
  tintColor,
  screenBackgroundColor,
  otherColor,
} from './src/stylesheets/color-sheme';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => ({
                       tabBarIcon: ({focused, color, size}) => {
                         let iconName;

                         if (route.name === 'Home') {
                           iconName = 'home-outline';
                         } else if (route.name === 'Plan') {
                           iconName = 'list-outline';
                         } else if (route.name === 'Grocery List') {
                           iconName = 'pricetag-outline';
                         }

                         // You can return any component that you like here!
                         return <Ionicons name={iconName} size={size} color={color}/>;
                       },
                     })}
                     tabBarOptions={{
                       activeTintColor: otherColor,
                       inactiveTintColor: tintColor,
                       style: {
                         backgroundColor: screenBackgroundColor
                       }
                     }}>
        <Tab.Screen name="Home" component={HomeTab}/>
        <Tab.Screen name='Plan' component={PlanTab} />
        {/*<Tab.Screen name="Settings" component={SettingsScreen}/>*/}
        <Tab.Screen name="Grocery List" component={GroceryListTab}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
