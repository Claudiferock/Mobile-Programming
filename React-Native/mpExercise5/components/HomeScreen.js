import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';
import { createStackNavigator  } from 'react-navigation';
import { styles } from '../App'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
      super(props);
      this.state = {
        firstNumber: 0,
        secondNumber: 0,
        result: 0,
        outputText: 'Try an addition or a substraction!',
        history: [],
      };
    }

  buttonPlus = () => {
    const sum = parseInt(this.state.firstNumber) + parseInt(this.state.secondNumber);
    const currentOutput = this.state.firstNumber + ' + ' + this.state.secondNumber + ' = ' + sum;
    this.setState({
      outputText: 'Result: ' + sum,
      history: [... this.state.history, {key: currentOutput}, currentOutput]
    });
  }
  
  buttonMinus = () => {
    const substraction = parseInt(this.state.firstNumber) - parseInt(this.state.secondNumber);
    const currentOutput = this.state.firstNumber + ' - ' + this.state.secondNumber + ' = ' + substraction;
    this.setState({
      outputText: 'Result: ' + substraction,
      history: [... this.state.history, {key: currentOutput}, currentOutput]
    });
  }
    
  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.container}>
        <View>
          <Text style={{fontWeight: 'bold'}}>{this.state.outputText}</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="First number"
            onChangeText={(firstNumber) => this.setState({firstNumber})}
            value={this.state.firstNumber}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Second number"
            onChangeText={(secondNumber) => this.setState({secondNumber})}
            value={this.state.secondNumber}
          />         
        </View>
        <View style={styles.buttons}> 
          <Button style={styles.button} title="+" onPress={this.buttonPlus} />
          <Button style={styles.button} title="-" onPress={this.buttonMinus} />
          <Button style={styles.button} title=" History " 
            onPress={ () => navigate('History', { history: this.state.history })} />
        </View>
        <View style={styles.list}>
          <FlatList
            data={this.state.history}
            renderItem={({item}) =>
              <Text>{item.key}</Text>}
          />
        </View>
      </View>
    );
  }
}