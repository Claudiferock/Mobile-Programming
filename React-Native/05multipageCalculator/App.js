import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CalculatorScreen from "./screens/CalculatorScreen";
import HistoryScreen from "./screens/HistoryScreen";

//  TAB NAVIGATION
/* import { createBottomTabNavigator } from 'react-navigation-tabs'; */

/* const AppNavigator = createBottomTabNavigator({
  Calculator: { screen: CalculatorScreen },
  History: { screen: HistoryScreen }
}) 
const AppContainer = createAppContainer(AppNavigator);
*/

const MyApp = createStackNavigator({
  Calculator: { screen: CalculatorScreen },
  History: { screen: HistoryScreen },
});

const AppContainer = createAppContainer(MyApp);

export default function App() {
  
  return (
    <AppContainer />
  );
}
