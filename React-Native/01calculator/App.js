import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default function App() {

  const [inputNum1, setInput1] = useState('');
  const [inputNum2, setInput2] = useState('');
  const [result, setResult] = useState(0);

  const buttonPressed = (operator) => {
    (operator == '+')
      ? setResult(parseInt(inputNum1) + parseInt(inputNum2))
      : setResult(parseInt(inputNum1) - parseInt(inputNum2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title} >{"\n"}{"\n"}+ - Calculator</Text>
      <View style={styles.action}>
        <View>
          <TextInput
            style={styles.inputText}
            keyboardType='number-pad' 
            onChangeText={(inputNum1) => setInput1(inputNum1)}
            value={inputNum1}
          />
          <TextInput
            style={styles.inputText}
            keyboardType='number-pad'
            onChangeText={(inputNum2) => setInput2(inputNum2)}
            value={inputNum2}
            />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="+" onPress={() => buttonPressed('+')}/>
          <Button title="-" onPress={() => buttonPressed('-')}/>
        </View>
      </View>
      <Text style={styles.result} >{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    fontSize: 36,
  },
  action: {
    backgroundColor: 'transparent',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    fontSize: 84,
  },
  inputText: {
    fontSize: 84,
    width: 140,
    marginHorizontal: 10,
    marginVertical: 2,
    paddingRight: 8,
    backgroundColor: 'rgba(36, 41, 46, 0.1)',
    borderColor: 'gray',
    borderRadius: 2,
    borderWidth: 1,
    textAlign: "right",
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: 40,
    height: 100,
    backgroundColor: 'white',
  },
  result: {
    flex: 2,
    fontSize: 84,
    textDecorationLine: "underline",
  },

});
