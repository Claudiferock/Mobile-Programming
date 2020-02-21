import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';

export default function App() {

  const [inputItem, setInputItem] = useState('');
  const [data, setData] = useState([]);

  const buttonPressed = (params) => {
    (params == 'Add') ? (
      setData([...data, {key: inputItem}]),
      setInputItem(''))
    : setData('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title} >Shopping List</Text>

      <View style={styles.action}>
        <View>
          <TextInput 
            style={styles.inputText}
            placeholder="Add items here..."
            onChangeText={(inputItem) => setInputItem(inputItem)}
            value={ inputItem }
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button color='rgba(47, 202, 74, .8)' title="Add" blurOnSubmit='true' accessibilityLabel="Addition button" onPress={() => buttonPressed('Add')}/>
          <Button color="rgba(247, 29, 12, .9)" title="Reset" accessibilityLabel="Substraction button" onPress={() => buttonPressed('Reset')}/>
        </View>
      </View>

      <View style={styles.data}>
        <FlatList
          data={ data }
          renderItem={ ({ item }) => 
            <Text style={styles.dataText}>{ item.key }</Text>}
        />        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'rgb(58, 89, 181)',
  },
  title: {
    backgroundColor: 'rgba(255, 255, 255, .05)',
    color: 'rgba(255, 255, 255, 1)',
    flex: .8,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 64,
    textShadowColor: 'tomato',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    borderBottomColor: 'tomato',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderWidth: 3,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  action: {
    flex: 1.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    color: 'rgb(255, 225, 255)',
    fontSize: 32,
    height: 60,
    width: 260,
    marginHorizontal: 10,
    marginVertical: 8,
    paddingLeft: 8,
    backgroundColor: 'rgba(0, 0, 0, .4)',
    borderColor: 'coral',
    borderRadius: 5,
    borderWidth: 1,
    textAlign: "left",
    textDecorationLine: 'none',
    textDecorationColor: 'transparent',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 110,
    height: 40,
  },
  data: {
    flex: 3,
    /* flexDirection: 'column', */
/*     justifyContent: 'center', */
   /*  backgroundColor: 'rgba(242,240,240,.7)', */
    alignItems: 'center',
  },
  dataText: {
    textAlign: "left",
    color:'white',
    /* backgroundColor: 'rgba(0,0,0,.4)', */
    fontSize: 24,
    paddingVertical: 1,
  }
});
