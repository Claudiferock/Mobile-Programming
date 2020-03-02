import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ImageBackground, AsyncStorage } from 'react-native';


export default function App() {

  const [inputNum, setInputNum] = useState('');
  const [message, setMessage] = useState('Try a number between 1-100');
  const [randomNum, setRandomNum] = useState((Math.floor(Math.random() * 100) + 1));
  const [count, setCount] = useState(0);
  const [highScore, setHighscore] = useState(null);

  const buttonPressed = (urGuess) => {
    (parseInt(urGuess) < randomNum) ? (
      setCount(count+1),
      setMessage(`Your guess ${inputNum} is too low. Please try again!`))
    : (parseInt(urGuess) > randomNum) ? (
      setCount(count+1),
      setMessage(`Your guess ${inputNum} is too high. Please try again!`))
    : (parseInt(urGuess) == randomNum) ? numbreGuessed()
    : setMessage(
      setCount(count+1),
      (`${inputNum} is not a number, try again!`))
  }

  readData = async () => {
    try {
      let value = await AsyncStorage.getItem('key');
    } catch (error) {
      console.error('Error while reading data...', error);
    }
  }

  numbreGuessed = ()=> {
    setMessage(`You guesssed the number "${inputNum}" in ${count} tries!`);
    // if there is no prev highscore make current count the highscore
    // but if there is then check if highscore has lower count
    (highScore == null) ? setHighscore(count) 
      : ( (highScore < count) ? setHighscore(count) : count );   
    console.log('highscore: ', highScore);
    setCount(0);
    setRandomNum(Math.floor(Math.random() * 100) + 1);
  }

  return (
    <ImageBackground 
    style={{flex: 1, width: '100%', height: '100%'}}
    source={require('./assets/gradient.jpg')}
    resizeMode='cover'>
      <View style={styles.container}>
        <Text style={styles.title} >{"\n"}{"\n"}Guess a number</Text>
        <Text style={styles.result} >{message}</Text>
        <View style={styles.action}>
          <View>
            <TextInput
              style={styles.inputText}
              keyboardType='number-pad' 
              onChangeText={(inputNum) => setInputNum(inputNum)}
              value={inputNum}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button color='black' title="Make guess" onPress={() => buttonPressed(inputNum)}/>
          </View>
        </View>
        <View style={styles.highScore} >
          <Text style={styles.highScoreText} >High scores</Text>
          <Text style={styles.highScoreText} >{highScore} tries</Text>
        </View> 
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    flex: 1,
    fontSize: 36,
    textShadowColor: 'rgba(0,0,0,.6)',
    textShadowOffset: {width: -5, height: 2},
    textShadowRadius: 10,
    textTransform: 'uppercase',
  },
  result: {
    color: 'white',
    flex: .5,
    flexWrap: "wrap",
    paddingHorizontal: 20,
    fontSize: 28,
  },
  action: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    fontSize: 84,
  },
  inputText: {
    fontSize: 84,
    width: 200,
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 30,
    paddingRight: 8,
    backgroundColor: 'rgba(0,0,0, .6)',
    color:'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: 100,
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
  },
  highScore: {
    flex: 2,
    flexWrap: "wrap",
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  highScoreText: {
    textTransform: 'uppercase',
    color: 'white',
    fontSize: 24,
  },

});
