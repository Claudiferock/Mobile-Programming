import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';
import { createStackNavigator  } from 'react-navigation';
import { styles } from '../App'

export default class HistoryScreen extends React.Component {
  static navigationOptions = {title: 'History'}
    
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.listTitle} >History</Text>
        </View>
        <View style={styles.list}>
          <FlatList
            data={params.history}
            renderItem={({item}) =>
              <Text>{item.key}</Text>}
          />
        </View>
      </View>
    );
  }
}