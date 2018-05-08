import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native';



export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      randomNum: 0,
      guessNum: 0,
      counter: 1,
      outputText: 'Gues a number between 1-100',
    };
  }
  
  componentDidMount() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    this.setState({
       randomNum: randomNumber,
    })
  }

  buttonGuess = () => {
    const currentGuess = parseInt(this.state.guessNum);
    const targetNumber = parseInt(this.state.randomNum);
     if (currentGuess < targetNumber) {
       this.setState({
        counter: this.state.counter + 1,
        outputText: 'Your guess ' + currentGuess + ' is too low. Please try again!',
       })
     }
     else if (currentGuess > targetNumber) {
      this.setState({
        counter: this.state.counter + 1,
        outputText: 'Your guess ' + currentGuess + ' is too high. Please try again!',
       })
     }
     else {
      this.setState({
        counter: this.state.counter + 1,
        outputText: 'You are correct!!!',
       })
       Alert.alert("You guesssed the number " + this.state.randomNum + " in " + this.state.counter + " tries");
     }
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
            onChangeText={(guessNum) => this.setState({guessNum})}
            keyboardType = 'numeric'
            value={this.state.guessNum}
          />
          <Button 
            title="Make a guess" 
            onPress={this.buttonGuess}
            style= {styles.buttonStyle}
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonStyle: {
    width: '50%',
  },
  inputs: {
    width: '50%',
    borderColor: 'lightgrey',
    borderWidth: 1.5,
    alignItems: 'center',
  }
});
