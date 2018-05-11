import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Alert, Image, ScrollView, StatusBar } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      ingridient: '',
    };
  }

  getRecipe = () => {
    const url = `http://www.recipepuppy.com/api/?i=${this.state.ingridient}`;
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => { 
        this.setState({recipes: responseJson.results});
      })
      .catch((error) => { 
        Alert.alert(error); 
      });    
  }

  listSeparator = () => {
    return (
      <View
        style={{
          height: 1.5,
          width: "100%",
          backgroundColor: "coral",
          margin: 5,
        }}
      />
    );
  };
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.titleContainer}>
          <Text style={styles.appTitle}>Recipe App</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.inputs} 
            placeholder='Type an ingridient' 
            onChangeText={(ingridient) => this.setState({ingridient})} />
        </View>
        <View style={styles.buttonContainer}>
          <Button 
            style={styles.button}
            title="Find recipes" onPress={this.getRecipe} />
        </View>
        <View style={styles.listContainer}>
          <FlatList
            keyExtractor={item => item.id} 
            renderItem={({item}) => 
              <ScrollView  style={{flexDirection: "row"}}>
                <Text style={styles.listText}>{item.title}</Text>
                <Image style={styles.image} source= {{uri:item.thumbnail}}/>
              </ScrollView >
            } 
            data={this.state.recipes} 
            ItemSeparatorComponent={this.listSeparator} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    fontSize: 18,
    width: 200,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: 'center',
  },
  button: {
    padding: 5,
  },
  listContainer: {
    height : '60%',
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    padding: 1,
    width:60,
    height: 60,
  },
  listText: {
    fontSize: 16,
    padding: 1,
  },
  titleContainer: {
    width: '100%',
    backgroundColor: '#F8F8FF',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  appTitle: {
    color: '#1E90FF',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
