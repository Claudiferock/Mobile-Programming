import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
//import { StackNavigator } from 'react-navigation' ;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
            style={{width: 300}}
            placeholder="First name"
        />
        <TextInput
            style={{width: 300}}
            placeholder="Last name"
        />
        <TextInput
            style={{width: 300}}
            placeholder="Extra information"
        />
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
    padding: 30,
    justifyContent: 'flexStart',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
