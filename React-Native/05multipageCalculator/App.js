import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import CalculatorScreen from "./screens/CalculatorScreen";
import HistoryScreen from "./screens/HistoryScreen";

//  TAB NAVIGATION
/* const AppNavigator = createBottomTabNavigator({
  Calculator: { screen: CalculatorScreen },
  History: { screen: HistoryScreen }
}) 
const AppContainer = createAppContainer(AppNavigator);
*/

const MyApp = createStackNavigator({
  Calculator: { screen: CalculatorScreen },
  History: { screen: HistoryScreen }
});

const AppContainer = createAppContainer(MyApp);

export default function App() {
  
  return (
    <AppContainer />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
