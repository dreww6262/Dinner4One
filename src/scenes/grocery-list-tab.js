import React, {useState} from 'react';
import {
  Pressable,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {screenBackgroundColor, tintColor, headerTextColor} from '../stylesheets/color-sheme';

// <TouchableOpacity style={{marginRight: 10}} onPress={() => alert('TODO: delete list')}>
//   <Ionicons name={'trash-outline'} size={24} color={headerTextColor}/>
// </TouchableOpacity>

const fakeIngredients = [
  {name: 'Beef', quantity: '26oz'},
  {name: 'Bell Peppers', quantity: '4'}
];

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
  // TODO: make clear list function
}

function GroceryListScreen() {
  return (
      <View style={{alignItems: 'center', width: '100%', flex: 1, backgroundColor: screenBackgroundColor, paddingTop: 70}}>
          <SectionList sections={[{title: 'Plan Title', data: fakeIngredients}, {title: 'Pantry', data: fakeIngredients}, {title: 'Extra', data: fakeIngredients}]}
                       style={{width: '100%'}}
                       ListHeaderComponent={(
                          <View style={{alignItems: 'center'}}>
                            <Text style={{fontSize: 32}}>Grocery List</Text>
                          </View>
                       )}
                       renderSectionHeader={({ section: { title } }) => (
                         <View style={{alignItems: 'center'}}>
                           <Text style={groceryStyles.headerLabel}>{title}</Text>
                           <View style={{backgroundColor: '#C5C5C5', width: '80%', height: 3, marginBottom: 15, borderRadius: 1.5}}/>
                         </View>
                       )}
                       renderItem={({item}) => (
                          <IngredientItem name={item.name} quantity={item.quantity}/>
                        )}
                       keyExtractor={(item, index) => index.toString()}
                       ListFooterComponent={(
                         <View style={{alignItems: 'center', display: 'flex', flexDirection: 'row', marginTop: 25}}>
                           <View style={{flex: 1}} />
                           <TouchableOpacity style={{marginRight: 10, alignItems: 'center', display: 'flex', flexDirection: 'row'}} onPress={() => alert('TODO: delete list')}>
                             <Ionicons name={'trash-outline'} size={20} color={'red'}/>
                             <Text style={{fontSize: 20, color: 'red', marginLeft: 5}}>Clear List</Text>
                           </TouchableOpacity>
                           <View style={{flex: 1}} />
                         </View>
                       )}
                       />
        </View>
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
    marginTop: 25,
    textAlign: 'right',
    width: '85%'
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
      <GroceryListScreen/>
    )
  }
}
