import * as React from 'react';
import {Alert, Button, FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {screenBackgroundColor} from '../stylesheets/color-sheme';
import {createStackNavigator} from 'react-navigation-stack';
import {tabStylesheet} from '../stylesheets/tab-stylesheet';
import {createAppContainer} from 'react-navigation';

const screens = {
  Plan: {
    title: 'Meal Plan Title',
    screen: PlanScreen
  },
  Recipe: {
    screen: RecipeScreen
  }
}

function PlanScreen() {
  return (
    <View>

    </View>
  )
}

function RecipeScreen() {
  return (
    <View></View>
  )
}

const PlanNavigation = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: tabStylesheet.header,
    headerTitleStyle: tabStylesheet.headerTitle
  }
})

const PlanContainer = createAppContainer(PlanNavigation)



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
    fontWeight: 'bold',
  },
  recipeSubheading: {
    fontSize: 16,
    marginTop: 10,
  },
  addButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
});

const fakeIngredients = [
  {name: 'Egg', quantity: '3'},
  {name: 'Sugar', quantity: '1/2 cup'},
];

function RecipeItem() {
  return (
    <View style={detailStyles.recipes}>
      <Text style={detailStyles.recipeTitle}>Recipe Title</Text>
      <Text style={detailStyles.recipeSubheading}>Ingredients:</Text>
    </View>
  );
}

function handleAddMethod() {
  return (
    Alert.alert(
      'Add To Shopping List Pressed',
      'Not Implemented',
    )
  );
}


export default class PlanTab extends React.Component {

  render() {
    return (
      <PlanContainer />
    );
  }
}

//<View style={{flex: 1, padding: 15, flexDirection: 'row-reverse'}}>
//
//           <FlatList data={fakeIngredients}
//                     ListHeaderComponent={(
//                       <View>
//                         <View style={detailStyles.image}>
//                           <Text style={{color: 'white'}}>
//                             Insert Image Here
//                           </Text>
//                         </View>
//
//                         <Text style={detailStyles.title}>
//                           Example Title for Meal Plan
//                         </Text>
//                         <Text style={detailStyles.description}>
//                           This is the description. This will describe what the meal is and the inspiration behind it.
//                         </Text>
//
//                         <View style={{
//                           backgroundColor: '#C5C5C5',
//                           width: '100%',
//                           height: 3,
//                           marginTop: 15,
//                           borderRadius: 1.5,
//                         }}/>
//
//                         {/* Possibly make ingredients list a flat list */}
//                         <Text style={detailStyles.ingredients}>
//                           Ingredients: (maybe flat list)
//                         </Text>
//                       </View>
//                     )}
//
//                     renderItem={({item}) => (
//                       <View style={{flexDirection: 'row'}}>
//                         <View style={{width: '50%'}}>
//                           <Text>{item.name}</Text>
//                         </View>
//                         <View style={{width: '50%'}}>
//
//                         </View>
//                       </View>
//                     )}
//                     keyExtractor={(item, index) => index.toString()}
//
//                     ListFooterComponent={(
//                       <View>
//                         <View style={{
//                           backgroundColor: '#C5C5C5',
//                           width: '100%',
//                           height: 1,
//                           marginTop: 15,
//                           borderRadius: .5,
//                         }}/>
//
//                         <RecipeItem/>
//                         <View style={{
//                           backgroundColor: '#C5C5C5',
//                           width: '100%',
//                           height: 1,
//                           marginTop: 15,
//                           borderRadius: .5,
//                         }}/>
//
//                         <RecipeItem/>
//                         <View style={{
//                           backgroundColor: '#C5C5C5',
//                           width: '100%',
//                           height: 1,
//                           marginTop: 15,
//                           borderRadius: .5,
//                         }}/>
//
//                         <RecipeItem/>
//                         <View style={{
//                           backgroundColor: '#C5C5C5',
//                           width: '100%',
//                           height: 1,
//                           marginTop: 15,
//                           borderRadius: .5,
//                         }}/>
//
//                         <RecipeItem/>
//
//                         <View style={{height: 25}}/>
//                       </View>
//                     )}
//           />
//
//         </View>
