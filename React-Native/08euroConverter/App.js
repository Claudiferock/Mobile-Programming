import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, Picker, ImageBackground, View } from 'react-native';

export default function App() {

  const [query, setQuery] = useState('');
  const [amount, setAmount] = useState('');
  const [output, setOutput] = useState('');
  const [data, setData] = useState([]);

  const getData = () => {
    const url = 'http://data.fixer.io/api/latest?access_key=82bcb840a0c2c8b548ef2806a3e2d12e&from='+ query +'&to=EUR&amount=' +amount;
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => { 
      setData(responseJson.results);
      console.log('json res: ', responseJson);
    })
    .catch((error) => { 
      console.log('Error', error); 
    }); 
    console.log('url is: ',url)
  }

  return (
    <ImageBackground
    style={{flex: 1, width: '100%', height: '100%'}}
    source={require('./assets/TheBlueLagoon.jpg')}
    resizeMode='cover'>
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.title}>Currency converter</Text>
          <Text>there will be something here {output} </Text>
        </View>
        <View style={styles.action}>
          <TextInput 
            style={styles.inputText}
            value={amount} 
            placeholder="Set amount.."
            onChangeText={(amount) => setAmount(amount)}>
          </TextInput>
          <Picker
            >
          </Picker>
          <Button color='black' title="Find"  />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  action: {
    flex: 2,
    backgroundColor: 'rgba(255,0,255, .4)',
    
  },
  result: {
    flex: 1,
    backgroundColor: 'rgba(255,255,0,.4)',

  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    marginTop:40,
    width: '100%',
    textShadowColor: 'rgba(0,0,0,.6)',
    textShadowOffset: {width: -3, height: 2},
    textShadowRadius: 10,
    color: 'rgba(2, 27, 121, 1)',
    textTransform: 'uppercase',
  },
  inputText: {
    fontSize: 18,
    width: 160,
    height: 40,
    paddingLeft: 8,
    marginVertical: 10,
    backgroundColor: 'rgba(81, 213, 185, .7)',
    color:'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
});
