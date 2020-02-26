import React, { useState } from "react";
import { Text, TextInput, View, Button, StyleSheet } from "react-native";

export default function CalculatorScreen(props) {
    navigationOptions = {title: 'Calculator',};

    const [inputNum1, setInput1] = useState('');
    const [inputNum2, setInput2] = useState('');
    const [result, setResult] = useState(0);
    const [history, setHistory] = useState([]);

    const { navigate } = props.navigation;
  
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

          <View style={styles.sectionNavigation}>
            <Button color="coral" accessibilityLabel="Navigate to Previous Operations" style={styles.buttonNavigation} onPress={() => navigate('History')} title="Previous Operations"/>
          </View>

        </View>
      );
}

CalculatorScreen.navigationOptions = ({ navigate }) => ({ title: 'Calculator'});

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