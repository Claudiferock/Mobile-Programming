import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';

export default function App() {

  const [inputNum1, setInput1] = useState('');
  const [inputNum2, setInput2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  const buttonPressed = (operatorInput) => {
    (operatorInput == '+') ? setResult(parseInt(inputNum1) + parseInt(inputNum2))
    : (operatorInput == '-') ? setResult(parseInt(inputNum1) - parseInt(inputNum2))
    : (operatorInput == '*') ? setResult(parseInt(inputNum1) * parseInt(inputNum2))
    : setResult(
      Number.isInteger(parseInt(inputNum1) / parseInt(inputNum2)) 
      ? parseInt(inputNum1) / parseInt(inputNum2)
      : (parseInt(inputNum1) / parseInt(inputNum2)).toFixed(2)
    );

    setOperator(operatorInput);
  }

  useEffect(() => {
    if (result) {
      setHistory([...history, {key: `${inputNum1} ${operator} ${inputNum2} = ${result}`}]);
    }
  }, [result]);

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
        <Text style={styles.historyTitle}>Calculations</Text>
        <FlatList
          style={styles.historyList}
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
    backgroundColor: 'rgb(0,0,0)',
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
    color: 'tomato',
    fontSize: 72,
    width: 120,
    marginHorizontal: 10,
    marginVertical: 8,
    paddingRight: 8,
    backgroundColor: 'rgba(71,227,255,.1)',
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
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
  },
  historyTitle: {
    flex:.6,
    color:'#47e3ff',
    fontSize: 20,
    textTransform: 'uppercase',
    transform: [ {rotate: '270deg' }],
  },
  historyList: {
    flex:1,
    backgroundColor:'rgba(71,227,255,.2)',
    paddingStart: 5,
    borderColor: 'white',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 5,
  },
  historyText: {
    color:'gainsboro',
    fontSize: 34,
  }
});
