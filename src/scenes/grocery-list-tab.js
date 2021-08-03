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
import {createStackNavigator} from 'react-navigation-stack';
import {tabStylesheet} from '../stylesheets/tab-stylesheet';
import {createAppContainer} from 'react-navigation';
import SettingsScreen from '../components/settings-screen';
import {Button} from 'react-native-elements';

// <TouchableOpacity style={{marginRight: 10}} onPress={() => alert('TODO: delete list')}>
//   <Ionicons name={'trash-outline'} size={24} color={headerTextColor}/>
// </TouchableOpacity>

const fakeIngredients = [
  {name: 'Beef', quantity: '26oz'},
  {name: 'Bell Peppers', quantity: '4'}
];

const screens = {
  GroceryList: {
    screen: GroceryListScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Grocery List',
      headerRight: () => (
        <TouchableOpacity style={{marginRight: 10, alignItems: 'center', display: 'flex', flexDirection: 'row'}} onPress={() => alert('TODO: delete list')}>
          <Ionicons name={'trash-outline'} size={24} color={headerTextColor}/>
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity style={{marginLeft: 10}} onPress={() => navigation.navigate('Settings')}>
          <Ionicons name={'settings-outline'} size={24} color={headerTextColor}/>
        </TouchableOpacity>
      )
    })
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      headerTintColor: headerTextColor
    }
  }
}

const GroceryStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: tabStylesheet.header,
    headerTitleStyle: tabStylesheet.headerTitle
  }
})

const GroceryContainer = createAppContainer(GroceryStack)

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
    <View style={{alignItems: 'center', width: '100%', flex: 1, backgroundColor: screenBackgroundColor}}>
      <SectionList sections={[{title: 'Plan Title', data: fakeIngredients}, {
        title: 'Pantry',
        data: fakeIngredients
      }, {title: 'Other Items', data: fakeIngredients}]}
                   style={{width: '100%'}}
                   renderSectionHeader={({section: {title}}) => (
                     <View style={{alignItems: 'center', backgroundColor: screenBackgroundColor}}>
                       <Text style={groceryStyles.headerLabel}>{title}</Text>
                       <View style={{
                         backgroundColor: '#C5C5C5',
                         width: '80%',
                         height: 3,
                         marginBottom: 15,
                         borderRadius: 1.5
                       }}/>
                     </View>
                   )}
                   renderItem={({item}) => (
                     <IngredientItem name={item.name} quantity={item.quantity}/>
                   )}
                   renderSectionFooter={({section: {title}}) => {
                     if (title !== 'Other Items') {
                       return;
                     }
                     return (
                       <View style={{display: 'flex', flexDirection: 'row', marginLeft: 30}}>
                         <Button
                           icon={<Ionicons name='add' size={24} />}
                           title='Add Item'
                           type='clear'
                           onPress={() => alert('TODO: add new grocery item')}/>
                       </View>
                     )
                   }}
                   keyExtractor={(item, index) => index.toString()}
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
    marginBottom: 5
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
      <GroceryContainer/>
    )
  }
}
