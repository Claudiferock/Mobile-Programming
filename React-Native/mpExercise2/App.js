import React from 'react';
import { StyleSheet, Text, TextInput, Alert, Button, View } from 'react-native';



export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      randomNum: 0,
      guessNum: 0,
      counter: 0,
    };
  }

  makeRandom = () => {
      let randomNumber = Math.floor(Math.random() * 100) + 1;
      this.setState(() => {
      return {randomNum: parseInt(randomNumber)}
      });
  }

  buttonGuess = () => {
    let guesssed = parseInt(this.state.guessNum);
    const numRandom = this.state.randomNum;
    let tryNum = this.state.counter;
    for (tryNum = 0; guesssed === numRandom; tryNum++) {
      if (guesssed < numRandom) {
        Alert.alert("Your guessNum " + guesssed + " is too low. Try again!");
      }
      else if (guesssed > numRandom) {
        Alert.alert("Your guessNum " + guesssed + " is too high. Try again!");
      }
      else if (guesssed < 1 && guesssed > 100) {
        Alert.alert("Your number is out of range. Try again!");
      }
      else {
        Alert.alert(guesssed + " is not a number. Try again!");
      }
      Alert.alert("You guesssed the number in " + tryNum + "tries");
    }
  }
// SHIT AIN'T WORKING YET


  ComponentDidMount() {
    Alert.alert("test")
    {this.makeRandom()}
    Alert.alert("worked")
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Gues a number between 1-100 ({this.state.randomNum})</Text>
          <TextInput
          style={styles.inputs}
          onChangeText={(guessNum) => this.setState({guessNum})}
          value={this.state.guessNum}
        />
        </View>
        <View style= {styles.buttonStyle} >
        <Button title="Make a guessNum" onPress={this.buttonGuess} />
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
