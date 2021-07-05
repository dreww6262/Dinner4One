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
import {headerColor, subHeaderTextColor, tintColor, screenBackgroundColor} from './src/stylesheets/color-sheme';


function HomeScreen() {
  return (
    <HomeTab/>
  );
}

function SettingsScreen() {
  return (
    <SettingsTab />
  );
}

function GroceryListScreen() {
  return (
    <GroceryListTab />
  )
}

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  title: {
    height: 75,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => ({
                       tabBarIcon: ({focused, color, size}) => {
                         let iconName;

                         if (route.name === 'Home') {
                           iconName = 'home-outline';
                         } else if (route.name === 'Settings') {
                           iconName = 'settings-outline';
                         } else if (route.name === 'Grocery List') {
                           iconName = 'pricetag-outline';
                         }

                         // You can return any component that you like here!
                         return <Ionicons name={iconName} size={size} color={color}/>;
                       },
                     })}
                     tabBarOptions={{
                       activeTintColor: headerColor,
                       inactiveTintColor: tintColor,
                       style: {
                         backgroundColor: screenBackgroundColor
                       }
                     }}>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Settings" component={SettingsScreen}/>
        <Tab.Screen name="Grocery List" component={GroceryListScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */
//
// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';
//
// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
//
// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };
//
// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';
//
//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };
//
//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };
//
// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });
//
// export default App;
