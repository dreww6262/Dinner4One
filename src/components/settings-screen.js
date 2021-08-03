import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {screenBackgroundColor} from '../stylesheets/color-sheme';
import * as React from 'react';

function SettingsScreen() {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: screenBackgroundColor, flex: 1}}>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>Account</Text>
      <Button title="Change Email" />
      <Button title="Change Password" />
      <Button title={'Sign Out'} color={'red'}/>
      <Button title={'Delete Account'} color={'red'}/>
      <View style={{backgroundColor: '#C5C5C5', width: '80%', height: 3, marginTop: 15, borderRadius: 1.5}}/>

      <Text style={{fontSize: 24, fontWeight: 'bold', marginTop: 20}}>App Settings</Text>
      <Button title="Allergies" />
      <Button title={'Notification Settings'} />
      <Button title={'Add Feedback'} />

      <View style={{backgroundColor: '#C5C5C5', width: '80%', height: 3, marginTop: 15, borderRadius: 1.5}}/>

      <Text style={{fontSize: 24, fontWeight: 'bold', marginTop: 20}}>Legal</Text>
      <Button title="About Us" />
      <Button title="Terms & Conditions" />
      <Button title="Privacy Policy" />

    </View>
  )
}

export default SettingsScreen
