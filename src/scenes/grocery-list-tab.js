import React, {useState} from 'react';
import {Alert, Button, FlatList, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {tabStylesheet} from '../stylesheets/tab-stylesheet';
import {screenBackgroundColor, tintColor, headerTextColor} from '../stylesheets/color-sheme';

const screens = {
  GroceryList: {
    screen: GroceryListScreen,
    navigationOptions: {
      title: 'Plan Title',
      headerRight: () => (
        <TouchableOpacity style={{marginRight: 10}} onPress={() => alert('TODO: delete list')}>
          <Ionicons name={'trash-outline'} size={24} color={headerTextColor}/>
        </TouchableOpacity>
      )
    }
  },
  Details: {
    screen: OtherScreen,
  },
};

const fakeIngredients = [
  {name: 'Beef', quantity: '26oz'},
  {name: 'Bell Peppers', quantity: '4'}
];

const GroceryStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: tabStylesheet.header,
    headerTitleStyle: tabStylesheet.headerTitle
  }
});
const GroceryStackContainer = createAppContainer(GroceryStack);

function MyCheckbox() {
  const [checked, onChange] = useState(false);

  function onCheckmarkPress() {
    onChange(!checked);
  }

  return (
    <Pressable
      style={[groceryStyles.checkboxBase, checked && groceryStyles.checkboxChecked]}
      onPress={onCheckmarkPress}>
      {checked && <Ionicons name="checkmark" size={24} color="white" />}
    </Pressable>
  );
}

function IngredientItem(props) {
  return (
    <View style={groceryStyles.ingredient}>
      <MyCheckbox />
      <Text style={{marginLeft: 10, fontSize: 16}}>{props.name}</Text>
      <View style={{flex: 1}} />
      <Text style={{marginLeft: 10}}>{props.quantity}</Text>
    </View>
  )
}

function clearList() {

}

function GroceryListScreen() {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={{alignItems: 'center', width: '100%', flex: 1, backgroundColor: screenBackgroundColor}}>

        <Text style={groceryStyles.headerLabel}>What You Need</Text>
        <View style={{backgroundColor: '#C5C5C5', width: '80%', height: 3, marginBottom: 15, borderRadius: 1.5}}/>
        <View style={{width: '100%'}}>
          <FlatList nestedScrollEnabled style={{width: '100%'}} data={fakeIngredients} renderItem={({item}) => (
            <IngredientItem name={item.name} quantity={item.quantity}/>
          )}/>
        </View>

        <Text style={groceryStyles.headerLabel}>What You Should Have</Text>
        <View style={{backgroundColor: '#C5C5C5', width: '80%', height: 3, marginBottom: 15, borderRadius: 1.5}}/>
        <View style={{width: '100%'}}>
          <FlatList nestedScrollEnabled style={{width: '100%'}} data={fakeIngredients} renderItem={({item}) => (
            <IngredientItem name={item.name} quantity={item.quantity}/>
          )}/>
        </View>

        <Text style={groceryStyles.headerLabel}>Other Stuff You Want</Text>
        <View style={{backgroundColor: '#C5C5C5', width: '80%', height: 3, marginBottom: 15, borderRadius: 1.5}}/>
        <View style={{width: '100%'}}>
          <FlatList nestedScrollEnabled style={{width: '100%'}} data={fakeIngredients} renderItem={({item}) => (
            <IngredientItem name={item.name} quantity={item.quantity}/>
          )}/>
        </View>
      </View>
    </ScrollView>
  )
}

function  OtherScreen() {
  return (
    <View />
  )
}

const groceryStyles = StyleSheet.create({
  planTitle: {
    fontSize: 36,
    padding: 10
  },
  headerLabel: {
    fontSize: 24,
    padding: 10,
    marginTop: 25
  },
  ingredientList: {
    width: '100%',
  },
  ingredient: {
    height: 30,
    width: '80%',
    marginLeft: '10%',
    display: 'flex',
    flexDirection: 'row',
  },
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: tintColor,
    backgroundColor: 'transparent',
  },

  checkboxChecked: {
    backgroundColor: tintColor,
  }
})

export default class GroceryListTab extends React.Component {
  render() {
    return (
      <GroceryStackContainer/>
    )
  }
}
