import React, { useState } from "react";
import { Text, TextInput, View, Button, StyleSheet } from "react-native";

export default function CalculatorScreen(props) {
    navigationOptions = {title: 'Calculator',};

    const [inputNum1, setInput1] = useState('');
    const [inputNum2, setInput2] = useState('');
    // maybe saving the input into a list is better
    /* const [inputNum2, setInput2] = useState([]); */
    const [currentInput, setCurrentInput] = useState();
    const [currentOperator, setCurrentOperator] = '';
    const [calculation, setCalculation] = useState(0);
    const [result, setResult] = useState(0);
    const [history, setHistory] = useState([]);

    const { navigate } = props.navigation;
  
    const buttonPressed = (operator) => {
      let operation = '';
      (operator == '+') ? setCalculation(calculation + parseInt(inputNum2))
      : (operator == '-') ? setCalculation(calculation - parseInt(inputNum2))
      : (operator == '*') ? 
        ((calculation == 0) ? setCalculation(parseInt(inputNum2))
        : setCalculation(calculation * parseInt(inputNum2)))
      : (operator == '/') ? 
        ((calculation == 0) ? setCalculation(parseInt(inputNum2)) 
        : (setCalculation / parseInt(inputNum2)))
      : (setResult(calculation));
  
      (operator !== '=') ? operation = `${calculation} ${operator} ${inputNum2} = ${result}` : null;
      setHistory([...history, {key: operation}]);
      setResult(calculation);
      // shoud also set the value of current input to zero
      setCurrentInput(0);
      console.log(`operation carried out. current input is ${currentInput} and saved input ${inputNum2}`);
    }

    // 
    const handleInput = (num) => {
      setCurrentInput(0 + parseInt(num));
      console.log('01 current input: ', currentInput);
      console.log('01 current input type: ', typeof(currentInput));
      /* setInput2([...inputNum2, {key: parseInt(currentInput)}]); */ //in case I save it to a list
      setInput2(currentInput);
      console.log('02 saved input: ', inputNum2);
      console.log('02 saved input type: ', typeof(inputNum2));
    }

    return (
        <View style={styles.container}>
          <Text style={styles.result} >{ result }</Text>
          <View style={styles.action}>
            <View style={styles.inputContainer}>
{/*               <TextInput
                style={styles.inputText}
                keyboardType='number-pad' 
                onChangeText={(inputNum1) => setInput1(inputNum1)}
                value={ inputNum1 }
              /> */}
              <TextInput
                style={styles.inputText}
                keyboardType='number-pad'
                onChangeText={(currentInput) => handleInput(parseInt(currentInput))}
                value={ currentInput }
                />
            </View>

            <View style={styles.buttonContainer}>
              <Button color="tomato" style={styles.buttons} title="+" accessibilityLabel="Addition button" onPress={() => buttonPressed('+')}/>
              <Button color="tomato" style={styles.buttons} title="-" accessibilityLabel="Substraction button" onPress={() => buttonPressed('-')}/>
              <Button color="tomato" style={styles.buttons} title="*" accessibilityLabel="Multiplication button" onPress={() => buttonPressed('*')}/>
              <Button color="tomato" style={styles.buttons} title="/" accessibilityLabel="Division button" onPress={() => buttonPressed('/')}/>
              <Button color="tomato" style={styles.buttons} title="=" accessibilityLabel="Division button" onPress={() => buttonPressed('=')}/>
              <Button color="coral"
                accessibilityLabel="Navigate to Previous Operations"
                style={styles.buttonNavigation}
                onPress={ () => navigate('History', {history: history} ) }
                title="History"
              />
            </View>
          </View>

          <View style={styles.sectionNavigation}>
          </View>

        </View>
      );
}

CalculatorScreen.navigationOptions = ({ navigate }) => ({ title: 'Calculator' });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'stretch',
    color: 'white',
    backgroundColor: '#24292e',
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
      flex: 3,
      backgroundColor: 'rgba(0, 0, 255, 1)',

      alignItems: 'stretch',
      alignContent: 'flex-start',
      flexWrap: 'wrap',
    },
    inputContainer: {
      flex: 1,
      backgroundColor: 'rgba(255,0,255,.6)',
    },
    inputText: {
      color: 'gainsboro',
      fontSize: 72,
      width: 380,
      marginHorizontal: 10,
      marginVertical: 8,
      backgroundColor: '#202325',
      borderColor: 'coral',
      borderRadius: 5,
      borderWidth: 1,
      textAlign: "center",
    },
    buttonContainer: {
      backgroundColor: 'rgba(255,255,0, 0.6)',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    buttons: {
      width: 60,
      height: 30,
    },
    sectionNavigation: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 20,
      backgroundColor: 'rgba(255, 127, 80, .5)',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    buttonNavigation: {
      marginHorizontal: 20,
    }
  });