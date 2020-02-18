import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';

export default function App() {

  const [inputNum1, setInput1] = useState('');
  const [inputNum2, setInput2] = useState('');
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);

  const buttonPressed = (operator) => {
    let operation = '';
    (operator == '+') ? (setResult(parseInt(inputNum1) + parseInt(inputNum2)))
    : (operator == '-') ? setResult(parseInt(inputNum1) - parseInt(inputNum2))
    : (operator == '*') ? setResult(parseInt(inputNum1) * parseInt(inputNum2))
    : setResult(parseInt(inputNum1) / parseInt(inputNum2));

    operation = `${inputNum1} ${operator} ${inputNum2} = ${result}`;
    setHistory([...history, {key: operation}]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.result} >{ result }</Text>
      <View style={styles.action}>
        <View>
          <TextInput
            style={styles.inputText}
            keyboardType='number-pad' 
            onChangeText={(inputNum1) => setInput1(inputNum1)}
            value={ inputNum1 }
          />
          <TextInput
            style={styles.inputText}
            keyboardType='number-pad'
            onChangeText={(inputNum2) => setInput2(inputNum2)}
            value={ inputNum2 }
            />
        </View>
        <View style={styles.buttonContainer}>
          <Button color="tomato" title="+" accessibilityLabel="Addition button" onPress={() => buttonPressed('+')}/>
          <Button color="tomato" title="-" accessibilityLabel="Substraction button" onPress={() => buttonPressed('-')}/>
        </View>
        <View style={styles.buttonContainer}>
          <Button color="tomato" title="*" accessibilityLabel="Multiplication button" onPress={() => buttonPressed('*')}/>
          <Button color="tomato" title="/" accessibilityLabel="Division button" onPress={() => buttonPressed('/')}/>
        </View>
      </View>

      <View style={styles.history}>
        <Text style={styles.historyText}> Calculations History</Text>
        <FlatList
          data={ history }
          renderItem={ ({item}) => 
            <Text style={styles.historyText}>{ item.key }</Text>}
        />        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#24292e',
    color: 'white',
  },
  result: {
    color: 'white',
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: 'white',
    fontSize: 98,
    textShadowColor: 'tomato',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    borderColor: 'tomato',
    borderWidth: 1,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  action: {
    backgroundColor: 'transparent',
    flex: 2.4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    fontSize: 84,
  },
  inputText: {
    color: 'gainsboro',
    fontSize: 72,
    width: 120,
    marginHorizontal: 10,
    marginVertical: 8,
    paddingRight: 8,
    backgroundColor: '#202325',
    borderColor: 'coral',
    borderRadius: 5,
    borderWidth: 1,
    textAlign: "right",
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginHorizontal: 8,
    width: 40,
    height: 100,
  },
  history: {
    flex: 1.4,
  },
  historyText: {
    textAlign: "center",
    color:'gainsboro',
    fontSize: 24,
  }
});
