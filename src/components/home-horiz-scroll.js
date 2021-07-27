import * as React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import {subHeaderTextColor} from '../stylesheets/color-sheme';

class HomeHorizScroll extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.sectionTitle}>{this.props.sectionName}</Text>
        <FlatList
          horizontal={true}
          style={styles.horizScroll}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 5,
          }}
          data={data}
          ItemSeparatorComponent={
            () => <View style={{width: 16}}/>
          }
          renderItem={({item, index, separators}) => (
            <TouchableOpacity style={styles.scrollItem} onPress={()=> this.props.navigation.navigate('Details')}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

export default withNavigation(HomeHorizScroll);

const data = [
  {name: 'Recipe 1', url: ''},
  {name: 'Recipe 2', url: ''},
  {name: 'Recipe 3', url: ''},
  {name: 'Recipe 4', url: ''},

];

const styles = StyleSheet.create({
  sectionTitle: {
    paddingLeft: 15,
    paddingBottom: 10,
    paddingTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: subHeaderTextColor
  },
  horizScroll: {
    height: 160,
    width: '95%',
    marginLeft: '2.5%',
  },
  scrollItem: {
    width: 150,
    height: 150,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
});
