import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, AsyncStorage, Alert } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      randomNum: 0,
      guessNum: 0,
      triesCounter: 1,
      highscore: 0,
      outputText: 'Gues a number between 1-100',
      highscoreTxt: '',
    };
  }

  componentDidMount() {
    AsyncStorage.clear();
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    this.setState({
       randomNum: randomNumber,
       triesCounter: 1,
    });
    this.dataRead();
  }

  buttonGuess = () => {
    const currentGuess = parseInt(this.state.guessNum);
    const targetNumber = parseInt(this.state.randomNum);
    const curentHighscore = parseInt(this.state.highscore)
     if (currentGuess < targetNumber) {
       this.setState({
        triesCounter: this.state.triesCounter + 1,
        outputText: 'Your guess ' + currentGuess + ' is too low. Please try again!',
       })
     }
     else if (currentGuess > targetNumber) {
      this.setState({
        triesCounter: this.state.triesCounter + 1,
        outputText: 'Your guess ' + currentGuess + ' is too high. Please try again!',
       })
     }
     else {
      this.setState({
        triesCounter: this.state.triesCounter + 1,
        outputText: 'You are correct!!!',
        highscore: this.state.triesCounter,
        highscoreTxt: 'Highscore: ' + this.state.triesCounter + ' tries',
       })
       this.dataSave();
       this.dataRead();
       Alert.alert("You guesssed the number " + this.state.randomNum + " in " + this.state.triesCounter + " tries");
       this.componentDidMount();
     }
  }

  dataRead = async () => {
    try {
      let currentValue = await AsyncStorage.getItem('key001')
      if (currentValue != null) {
        this.setState({
          highscore: currentValue
        })
      }
    } catch (error) {
      Alert.alert('Error reading data: ' + error);
    }
  }

  dataSave = async () => {
    try {
      let tries = this.state.triesCounter;
      await AsyncStorage.setItem('key001', tries.toString())
    } catch (error) {
      Alert.alert('Error saving the data');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={{fontWeight: 'bold'}}>{this.state.outputText}</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Number (1-100)"
            keyboardType = 'numeric'
            onChangeText={(guessNum) => this.setState({guessNum})}
            value={this.state.guessNum}
          />         
        </View>
        <View style={styles.buttons}> 
          <Button 
            style={styles.button}
            title="MAKE YOUR GUESS"
            onPress={this.buttonGuess} />
        </View>
        <View style={styles.list}>
          <Text>{this.state.highscoreTxt}</Text>
        </View>
      </View>
    );
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
    width: '100%',
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  inputs: {    
    width: "50%",
    borderColor: 'lightgrey',
    borderWidth: 1.5,
    alignItems: 'center',
    padding: 5,
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
