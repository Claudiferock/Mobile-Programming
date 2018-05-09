import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { StackNavigator } from 'react-navigation' ;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

//const MyApp = StackNavigator({
//  Home: {
//    screen: Home
//  },
//  ReportForm: {
//    screen: ReportForm
//  },
//  ReportStatus: {
//    screen: ReportStatus
//  }
//})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
