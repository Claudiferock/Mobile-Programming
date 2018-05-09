import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      outputText: '',
      shoppingList: [],
    };
  }

  buttonAdd = () => {
    const currentItem = this.state.userInput;
    this.setState({
      shoppingList: [... this.state.shoppingList, {key: currentItem}, currentItem]
    });
  }
  buttonClear = () => {
    this.setState({
      shoppingList: ''
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View  style={styles.inputContainer}>
        <TextInput
            style={styles.inputs}
            placeholder="Write an item you want to add"
            onChangeText={(userInput) => this.setState({userInput})}
            value={this.state.userInput}
          />
        </View>
        <View  style={styles.buttons}>
          <Button style={styles.button} title="Add" onPress={this.buttonAdd} />
          <Button style={styles.button} title="Clear" onPress={this.buttonClear}/>
        </View>
        <Text style={styles.basketTitle}>Shopping List</Text>
        <View style={styles.list}>
          <FlatList
            data={this.state.shoppingList}
            renderItem={({item}) =>
              <Text>{item.key}</Text>}
          />
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
  inputContainer: {
    width: '100%',
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputs: {
    width: '70%',    
    padding: 5,
    margin: 10,
    borderColor: 'lightgrey',
    borderWidth: 1.5,
    alignItems: 'center',
  },
  buttons: {
    flexDirection: "row",
    justifyContent: 'space-between',
    width: 120,
  },
  button: {
    padding: 5,
  },
  basketTitle: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },
  list: {
    height : '30%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',  
  }
});
