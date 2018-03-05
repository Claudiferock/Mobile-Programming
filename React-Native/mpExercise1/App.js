import React from 'react';
import { StyleSheet, Text, TextInput, Alert, Button, View } from 'react-native';



export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {num1: '', num2: '', result: ''}
  }

  buttonPlus = () => {
    let sum = parseInt(this.state.num1) + parseInt(this.state.num2);
    this.setState(() => {
      return {result: sum}
    });
  }
  buttonMinus = () => {
    let substraction = parseInt(this.state.num1) - parseInt(this.state.num2);
    this.setState(() => {
      return {result: substraction}
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Result: {this.state.result}</Text>
          <TextInput
          style={styles.inputs}
          onChangeText={(num1) => this.setState({num1})}
          value={this.state.num1}
        />
        <TextInput 
          style={styles.inputs}
          onChangeText={(num2) => this.setState({num2})}
          value={this.state.num2}
        />
        </View>
        <View style= {styles.buttonStyle} >
        <Button title=" + " onPress={this.buttonPlus} />
        <Button title=" - " onPress={this.buttonMinus} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    width: 70,
  },
  inputs: {
    margin: 5,
    width: 200,
    borderColor: 'coral',
    borderWidth: 1,
  }
});
