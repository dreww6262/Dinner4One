import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as React from 'react';
import {screenBackgroundColor} from '../stylesheets/color-sheme';


function RecipeQuad({navigation}) {
  return (
    <View style={planStyles.tileContainer}>
      <View style={planStyles.rowContainer}>
        <TouchableOpacity style={planStyles.recipeTile} onPress={() => navigation.navigate('Recipe')}>
          <Text>Recipe 1</Text>
        </TouchableOpacity>

        <View style={planStyles.spacer} />

        <TouchableOpacity style={planStyles.recipeTile} onPress={() => navigation.navigate('Recipe')}>
          <Text>Recipe 2</Text>
        </TouchableOpacity>
      </View>

      <View style={planStyles.spacer} />

      <View style={planStyles.rowContainer}>
        <TouchableOpacity style={planStyles.recipeTile} onPress={() => navigation.navigate('Recipe')}>
          <Text>Recipe 3</Text>
        </TouchableOpacity>

        <View style={planStyles.spacer} />

        <TouchableOpacity style={planStyles.recipeTile} onPress={() => navigation.navigate('Recipe')}>
          <Text>Recipe 4</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

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

export default RecipeQuad;
