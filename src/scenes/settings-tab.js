import React, {useState} from 'react';
import {Alert, Button, FlatList, Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {headerColor, subHeaderTextColor, tintColor, screenBackgroundColor} from '../stylesheets/color-sheme';
import {tabStylesheet} from '../stylesheets/tab-stylesheet';


function SettingsScreen() {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: screenBackgroundColor, flex: 1}}>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>Account</Text>
      <Button title="Change Email" />
      <Button title="Change Password" />
      <Button title={'Notification Settings'} />
      <Button title={'Add Feedback'} />
      <Button title={'Sign Out'} color={'red'}/>
      <Button title={'Delete Account'} color={'red'}/>
      <View style={{backgroundColor: '#C5C5C5', width: '80%', height: 3, marginTop: 15, borderRadius: 1.5}}/>


      <Text style={{fontSize: 24, fontWeight: 'bold', marginTop: 20}}>Allergies -- Please Fill Out</Text>
      <Button title="Allergies" />
      <View style={{backgroundColor: '#C5C5C5', width: '80%', height: 3, marginTop: 15, borderRadius: 1.5}}/>


      <Text style={{fontSize: 24, fontWeight: 'bold', marginTop: 20}}>Legal</Text>
      <Button title="About Us" />
      <Button title="Terms & Conditions" />
      <Button title="Privacy Policy" />

    </View>
  )
}

const screens = {
  Settings: {
    screen: SettingsScreen,
  }
};

const SettingsStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: tabStylesheet.header,
    headerTitleStyle: tabStylesheet.headerTitle
  }
});
const SettingsStackContainer = createAppContainer(SettingsStack);


export default class SettingsTab extends React.Component {
  render() {
    return (
      <SettingsStackContainer />
    );
  }
}
