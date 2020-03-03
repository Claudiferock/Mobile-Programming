import React, { useState } from "react";
import { Text, TextInput, View, Button, StyleSheet } from "react-native";

export default function CalculatorScreen(props) {
    navigationOptions = {title: 'Calculator',};

    const [inputNum1, setInput1] = useState(0);
    const [inputNum2, setInput2] = useState(0);
    const [result, setResult] = useState(0);
    const [history, setHistory] = useState([]);

    const { navigate } = props.navigation;
  
    const buttonPressed = (operator) => {
      (operator == '+') ? ( setResult(parseInt(inputNum1) + parseInt(inputNum2)), calculation(operator) )
      : (operator == '-') ? ( setResult(parseInt(inputNum1) - parseInt(inputNum2)), calculation(operator) )
      : (operator == '*') ? ( setResult(parseInt(inputNum1) * parseInt(inputNum2)), calculation(operator) )
      : (setResult((parseInt(inputNum1) / parseInt(inputNum2)).toFixed(2)), calculation(operator));
      clearInput();
    }

    const calculation = (operator) => {
      setHistory([...history, {key: `${inputNum1} ${operator} ${inputNum2} = ${result}`}]);
    }

    const clearInput = () => {
      setInput1(0);
      setInput2(0);
    }

    return (
        <View style={styles.container}>
          <Text style={styles.result} >{ result }</Text>
          <View style={styles.action}>
            <View>
              <TextInput
                style={styles.inputText}
                keyboardType='numeric' 
                onChangeText={(inputNum1) => setInput1(inputNum1)}
                value={ inputNum1 }
                clearButtonMode='always'
              />
              <TextInput
                style={styles.inputText}
                keyboardType='numeric'
                onChangeText={(inputNum2) => setInput2(inputNum2)}
                value={ inputNum2 }
                clearButtonMode='always'
                />
            </View>
            <View style={styles.buttonContainer}>
              <Button color="black" title="+" accessibilityLabel="Addition button" onPress={() => buttonPressed('+')}/>
              <Button color="black" title="-" accessibilityLabel="Substraction button" onPress={() => buttonPressed('-')}/>
            </View>
            <View style={styles.buttonContainer}>
              <Button color="black" title="*" accessibilityLabel="Multiplication button" onPress={() => buttonPressed('*')}/>
              <Button color="black" title="/" accessibilityLabel="Division button" onPress={() => buttonPressed('/')}/>
            </View>
          </View>

          <View style={styles.sectionNavigation}>
            <Button color="black"
              accessibilityLabel="Navigate to Previous Operations"
              style={styles.buttonNavigation}
              onPress={ () => navigate('History', {history: history} ) }
              title="History"/>
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
    color: 'black',
    backgroundColor: 'magenta',
    },
    result: {
      color: 'white',
      flex: 1,
      textAlign: "center",
      textAlignVertical: "center",
      backgroundColor: 'rgba(255,255,0,.8)',
      fontSize: 98,
      textShadowColor: 'black',
      textShadowOffset: {width: -6, height: 1},
      textShadowRadius: 10,
      borderColor: 'yellow',
      borderWidth: 4,
      borderBottomWidth: 8,
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
      color: 'white',
      fontSize: 72,
      width: 120,
      marginHorizontal: 10,
      marginVertical: 8,
      paddingRight: 8,
      backgroundColor: 'rgba(0,0,0,.4)',
      borderColor: 'rgb(0,255,255)',
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
      backgroundColor: 'rgba(0, 0, 0, .05)',
    },
    buttonNavigation: {
      marginHorizontal: 20,
    }
  });