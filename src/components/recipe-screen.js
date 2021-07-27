import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {screenBackgroundColor} from '../stylesheets/color-sheme';
import * as React from 'react';

function RecipeScreen() {
  return (
    <ScrollView style={{backgroundColor: screenBackgroundColor}}>
      <View style={detailStyles.container}>
        <View style={detailStyles.mediaContainer}>
          <Text>Video</Text>
        </View>

        <Text style={detailStyles.subheader}>Ingredients</Text>

        <View style={detailStyles.ingredientsContainer}>
          {fakeIngredients.map(i => (
            <View style={{padding: 10}}>
              <Text>{i.quantity} of {i.name}</Text>
            </View>
          ))}
        </View>

        <View style={detailStyles.stepsContainer}>
          {fakeSteps.map(i => (
            <View style={{marginBottom: 20, width: '100%'}}>
              <Text style={detailStyles.subheader}>{i.name}</Text>
              <Text style={detailStyles.description}>{i.description}</Text>
            </View>
          ))}

          <Text style={detailStyles.subheader}>Afterwards</Text>
          <Text style={detailStyles.description}>{fakeAfterwards}</Text>

        </View>

      </View>
    </ScrollView>
  )
}

const detailStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: screenBackgroundColor
  },
  mediaContainer: {
    borderRadius: 25,
    width: '90%',
    height: 250,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ingredientsContainer: {
    width: '90%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#dbd3cc80',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20
  },
  description: {
    fontSize: 14,
    width: '100%'
  },
  subheader: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
  stepsContainer: {
    width: '100%',
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 10
  }

});

const fakeIngredients = [
  {name: 'Egg', quantity: '3'},
  {name: 'Sugar', quantity: '1/2 cup'},
];

const fakeSteps = [
  {name: 'Step 1', description: 'Take the eggs and break them into a bowl.  Once this is complete take the eggs' +
      'out of the bowl and pour them into a pan.'},
  {name: 'Step 2', description: 'Scramble them eggs till they are nice and fluffy.  Salt and pepper to taste.'},

];

const fakeAfterwards = 'Congratulations!  You have completed this recipe.  Make sure to top with cheese for the ' +
  'optimal experience';

export default RecipeScreen;
