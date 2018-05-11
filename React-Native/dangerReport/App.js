import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation' ;

import HomeScreen from './components/HomeScreen';
import ReportScreen from './components/ReportScreen';
import StatusScreen from './components/StatusScreen';

const MyApp = createStackNavigator({
  Home: { screen: HomeScreen },
  Report: { screen: ReportScreen },
  Status: { screen: StatusScreen },
});

export default class App extends React.Component {
  render() {
    return <MyApp/>;
  }
}


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    width: '100%',
    backgroundColor: '#F8F8FF',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  appTitle: {
    color: '#1E90FF',
    fontWeight: 'bold',
    fontSize: 20,
  },
  subTitle: {
    color: '#FF6347',
    fontWeight: 'bold',
    fontSize: 18,
  },
  welcomeTxt: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: 'center',
  },
});
