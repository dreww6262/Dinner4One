import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {headerTextColor, screenBackgroundColor} from '../stylesheets/color-sheme';
import {createStackNavigator} from 'react-navigation-stack';
import {tabStylesheet} from '../stylesheets/tab-stylesheet';
import {createAppContainer} from 'react-navigation';
import {Ionicons} from '@expo/vector-icons';
import RecipeQuad from '../components/recipe-quad';
import RecipeScreen from '../components/recipe-screen';

const screens = {
  Plan: {
    screen: PlanScreen,
    navigationOptions: {
      title: 'Meal Plan Title',
      headerRight: () => (
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity style={{marginRight: 10}} onPress={() => alert('TODO: Share')}>
            <Ionicons name={'share-social-outline'} size={24} color={headerTextColor}/>
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: 10}} onPress={() => alert('TODO: Add Bookmark, add to shopping cart?')}>
            <Ionicons name='bookmark' size={24} color={headerTextColor}/>
          </TouchableOpacity>
        </View>
      )
    }
  },
  Recipe: {
    screen: RecipeScreen,
    navigationOptions: {
      headerTintColor: headerTextColor,
      headerBackTitle: 'Back',
      headerRight: () => (
        <TouchableOpacity style={{marginRight: 10}} onPress={() => alert('TODO: Share')}>
          <Ionicons name={'share-social-outline'} size={24} color={headerTextColor}/>
        </TouchableOpacity>
      )
    }
  }
}

function PlanScreen({navigation}) {
  return (
    <View style={planStyles.planContainer}>
      <View style={{padding: 20, height: '30%', display: 'flex', justifyContent: 'center'}}>
        <Text style={{textAlign: 'center', fontStyle: 'italic', fontSize: 16}}>
          This is the description for the meal plan itself.  It can include anything from the inspiration to the explanation
          of the meals itself.  This will be a placeholder so I can see what this position looks like in the app.
        </Text>
      </View>
      <RecipeQuad navigation={navigation} />
    </View>
  )
}


const PlanNavigation = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: tabStylesheet.header,
    headerTitleStyle: tabStylesheet.headerTitle
  }
})

const PlanContainer = createAppContainer(PlanNavigation)

const planStyles = StyleSheet.create({
  planContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: screenBackgroundColor
  },
  tileContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  recipeTile: {
    borderRadius: 10,
    height: 150,
    width: 150,
    textAlign: 'center',
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacer: {
    height: 10,
    width: 10
  }
});


export default class PlanTab extends React.Component {

  render() {
    return (
      <PlanContainer />
    );
  }
}
