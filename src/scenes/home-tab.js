import React from 'react';
import {Alert, Button, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {tabStylesheet} from '../stylesheets/tab-stylesheet';
import HomeHorizScroll from '../components/home-horiz-scroll';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {headerTextColor, screenBackgroundColor} from '../stylesheets/color-sheme';
import SettingsTab from './settings-tab';

const screens = {
  Home: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      headerRight: () => (
        <TouchableOpacity style={{marginRight: 10}} onPress={() => alert('TODO: search (by title?)')}>
          <Ionicons name={'search-outline'} size={24} color={headerTextColor}/>
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity style={{marginLeft: 10}} onPress={() => navigation.navigate('Settings')}>
          <Ionicons name={'settings-outline'} size={24} color={headerTextColor}/>
        </TouchableOpacity>
      )
    })
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTintColor: headerTextColor,
      headerRight: () => (
        <TouchableOpacity style={{marginRight: 10}} onPress={() => alert('TODO: Share')}>
          <Ionicons name={'share-social-outline'} size={24} color={headerTextColor}/>
        </TouchableOpacity>
      )
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      headerTintColor: headerTextColor
    }
  }
};

// Duplicated Code from SettingsTab
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


const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: tabStylesheet.header,
    headerTitleStyle: tabStylesheet.headerTitle
  }
});
const HomeStackContainer = createAppContainer(HomeStack);

function HomeScreen() {
  return (
    <View style={tabStylesheet.screenBackground}>
      <ScrollView>
        <HomeHorizScroll sectionName="Favorites"/>
        <HomeHorizScroll sectionName="Recents"/>
        <HomeHorizScroll sectionName="Popular"/>
        <HomeHorizScroll sectionName="New"/>
        <HomeHorizScroll sectionName="Low Calorie"/>
        <HomeHorizScroll sectionName="Cheat Week"/>
      </ScrollView>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{flex: 1, padding: 15, flexDirection: 'row-reverse', backgroundColor: screenBackgroundColor}}>

      <FlatList data={fakeIngredients}
                ListHeaderComponent={(
                  <View>
                    <View style={detailStyles.image}>
                      <Text style={{color: 'white'}}>
                        Insert Image Here
                      </Text>
                    </View>

                    <Text style={detailStyles.title}>
                      Example Title for Meal Plan
                    </Text>
                    <Text style={detailStyles.description}>
                      This is the description. This will describe what the meal is and the inspiration behind it.
                    </Text>

                    <View style={{backgroundColor: '#C5C5C5', width: '100%', height: 3, marginTop: 15, borderRadius: 1.5}}/>

                    {/* Possibly make ingredients list a flat list */}
                    <Text style={detailStyles.ingredients}>
                      Ingredients: (maybe flat list)
                    </Text>
                  </View>
                )}

                renderItem={({item}) => (
                  <View style={{flexDirection: 'row'}}>
                    <View style={{width: '50%'}}>
                      <Text>{item.name}</Text>
                    </View>
                    <View style={{width: '50%'}}>

                    </View>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}

                ListFooterComponent={(
                  <View>
                    <View style={{backgroundColor: '#C5C5C5', width: '100%', height: 1, marginTop: 15, borderRadius: .5}}/>

                    <RecipeItem/>
                    <View style={{backgroundColor: '#C5C5C5', width: '100%', height: 1, marginTop: 15, borderRadius: .5}}/>

                    <RecipeItem/>
                    <View style={{backgroundColor: '#C5C5C5', width: '100%', height: 1, marginTop: 15, borderRadius: .5}}/>

                    <RecipeItem/>
                    <View style={{backgroundColor: '#C5C5C5', width: '100%', height: 1, marginTop: 15, borderRadius: .5}}/>

                    <RecipeItem/>

                    <View style={{height: 25}}/>
                  </View>
                )}
      />

      <View style={detailStyles.addButton}>
        <Button title={"Add To Shopping List"} onPress={handleAddMethod} />
      </View>

    </View>
  );
}

function RecipeItem() {
  return (
    <View style={detailStyles.recipes}>
      <Text style={detailStyles.recipeTitle}>Recipe Title</Text>
      <Text style={detailStyles.recipeSubheading}>Ingredients:</Text>
    </View>
  )
}

function handleAddMethod() {
  return(
    Alert.alert(
      "Add To Shopping List Pressed",
      "Not Implemented"
    )
  )
}

const fakeIngredients = [
  {name: 'Egg', quantity: '3'},
  {name: 'Sugar', quantity: '1/2 cup'}
]

const detailStyles = StyleSheet.create({
  image: {
    borderRadius: 25,
    width: '100%',
    height: 250,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 15,
  },
  description: {
    fontSize: 18,
    marginTop: 10,
  },
  ingredients: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  recipes: {
    marginTop: 10,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  recipeSubheading: {
    fontSize: 16,
    marginTop: 10
  },
  addButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
  }
});

export default class HomeTab extends React.Component {
  render() {
    return (
      <HomeStackContainer/>
    );
  }
}
