/**
 * Main page for Dinner for One App
 *
 * @author Drew Williamson
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import createBottomTabNavigator from '@react-navigation/bottom-tabs/src/navigators/createBottomTabNavigator';
import HomeTab from './src/scenes/home-tab';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GroceryListTab from './src/scenes/grocery-list-tab';
import PlanTab from './src/scenes/plan-tab';
import {
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
                         } else if (route.name === 'Bookmarked') {
                           iconName = 'bookmark-outline';
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
        <Tab.Screen name='Bookmarked' component={PlanTab} />
        {/*<Tab.Screen name="Settings" component={SettingsScreen}/>*/}
        <Tab.Screen name="Grocery List" component={GroceryListTab}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
