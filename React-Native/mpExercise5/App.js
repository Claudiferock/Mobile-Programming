import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';
import { createStackNavigator  } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import HistoryScreen from './components/HistoryScreen';

const MyApp = createStackNavigator({
  Home: {screen: HomeScreen},
  History: {screen: HistoryScreen},
});

export default class App extends React.Component {
  render() {
    return <MyApp/>;
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '90%',
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputs: {    
    width: "40%",
    padding: 5,
    margin: 10,
    borderColor: 'lightgrey',
    borderWidth: 1.5,
    alignItems: 'center',
  },
  buttons: {
    flexDirection: "row",
    justifyContent: 'space-between',
    width: 150,
  },
  button: {
    padding: 5,
  },
  list: {
    height : '30%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listTitle: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
