import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstNumber: 0,
      secondNumber: 0,
      result: 0,
      outputText: 'Try an addition or a substraction!',
      history: [],
    };
  }

  componentDidMount() {
    const historyTitle = 'History';
    this.setState({
      history: [... this.state.history, {key: historyTitle}, historyTitle]
    });
  }

  buttonPlus = () => {
    const sum = parseInt(this.state.firstNumber) + parseInt(this.state.secondNumber);
    const currentOutput = this.state.firstNumber + ' + ' + this.state.secondNumber + ' = ' + sum;
    this.setState({
      outputText: 'Result: ' + sum,
      history: [... this.state.history, {key: currentOutput}, currentOutput]
    });
  }

  buttonMinus = () => {
    const substraction = parseInt(this.state.firstNumber) - parseInt(this.state.secondNumber);
    const currentOutput = this.state.firstNumber + ' - ' + this.state.secondNumber + ' = ' + substraction;
    this.setState({
      outputText: 'Result: ' + substraction,
      history: [... this.state.history, {key: currentOutput}, currentOutput]
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>{this.state.outputText}</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="First number"
            onChangeText={(firstNumber) => this.setState({firstNumber})}
            value={this.state.firstNumber}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Second number"
            onChangeText={(secondNumber) => this.setState({secondNumber})}
            value={this.state.secondNumber}
          />         
        </View>
        <View style={styles.buttons}> 
          <Button style={styles.button} title="+" onPress={this.buttonPlus} />
          <Button style={styles.button} title="-" onPress={this.buttonMinus}/>  
        </View>
        <View style={styles.list}>
          <FlatList
            data={this.state.history}
            renderItem={({item}) =>
              <Text>{item.key}</Text>}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '100%',
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputs: {    
    width: "45%",
    padding: 5,
    margin: 10,
    borderColor: 'lightgrey',
    borderWidth: 1.5,
    alignItems: 'center',
  },
  buttons: {
    flexDirection: "row",
    justifyContent: 'space-between',
    width: 50,
  },
  button: {
    padding: 5,
  },
  list: {
    height : '30%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',  
  }
});
