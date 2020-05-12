import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('shop_list.db');

export default function App() {
  const [product, setProduct] = useState([]);
  const [amount, setAmount] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    createDB();
    updateList();    
  }, []);

  const createDB = () => {
    db.transaction(tx => {
      tx.executeSql('create table if not exists shopping_list (id integer primary key not null, amounts int, title text);');
    });
  }

  // Reset shopping list
  const resetDB = () => {
    db.transaction(tx => {
      try {
        tx.executeSql(`delete * from shopping_list;`, []);
        console.log('SUCCESS... Shopping list resetted');
      }
      catch {
        console.log('FAIL!');
      }
    });
    updateList(); 
  }

  // Save shopping_list
  const saveItem = () => {
    db.transaction(tx => {
        tx.executeSql('insert into shopping_list (amounts, title) values (?, ?);', [parseInt(amount), title]);    
      }, null, updateList
    );
    clearFields();
  }

  // Update shopping_listlist
  const updateList = () => {
    db.transaction(tx => {
      tx.executeSql('select * from shopping_list;', [], (_, { rows }) =>
        setProduct(rows._array)
      ); 
    });
  }

  // Delete shopping_list
  const deleteItem = (id) => {
    db.transaction(
      tx => {
        tx.executeSql(`delete from shopping_list where id = ?;`, [id]);
      }, null, updateList
    )    
  }

  const clearFields = () => {
    setTitle('');
    setAmount('');
  }

  const evaluateAddition = () => {
    if (title&&amount) {
      saveItem();
    }

  }

  const listSeparator = () => {
    return (
      <View
        style={{
          height: 5,
          width: '100%',
          borderTopWidth: 2,
          borderColor: 'rgba(81, 213, 185, .6)',
          marginVertical: 5,
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>        
        <Text style={styles.title}>Shopping List</Text>
        <View style={styles.inputsContainer}>
          <TextInput placeholder='Product...' style={styles.inputProduct}
            onChangeText={(title) => setTitle(title)}
            value={title}/>  
          <TextInput placeholder='qty' keyboardType="numeric" style={styles.inputAmount}
            onChangeText={(amount) => setAmount(amount)}
            value={amount}/>  
{/*           <View style={styles.reset}>
            <Button onPress={resetDB} title="Reset" color="rgba(225, 40, 10, .9)" /> 
          </View>    */} 
          <View style={styles.add}>
            <Button onPress={evaluateAddition} title="Add" color="rgb(80,225,80)" /> 
          </View>    
        </View>
      </View>
      <FlatList 
        style={styles.bottomView}
        keyExtractor={item => item.id.toString()} 
        renderItem={({item}) => 
          <View style={styles.listcontainer}>
            <Text style={styles.textProduct}>{item.title}</Text>
            <Text style={styles.textAmount}>{item.amounts}</Text>
            <Text style={styles.delete} onPress={() => deleteItem(item.id)}>x</Text>
          </View>} 
        data={product} 
        ItemSeparatorComponent={listSeparator} 
      />      
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
topView: {
  flex:.3,
  flexDirection:'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
},
title: {
  color: 'darkblue',
  fontSize: 42,
  marginTop: 20,
  width:'100%',
  textAlign:'center',
  textShadowColor: 'rgba(0,0,0,.6)',
  textShadowOffset: {width: -5, height: 2},
  textShadowRadius: 10,
  textTransform: 'uppercase',
},
inputsContainer: {
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
},
inputProduct: {
  paddingLeft: 5,
  marginLeft: 30,
  marginRight: 5,
  paddingVertical: 2,
  fontSize: 20,
  width: 180,
  color:'white',
  borderColor: 'darkblue',
  backgroundColor: 'rgba(0, 20, 145, .7)',
  borderWidth: 1,
  borderRadius: 2,
},
inputAmount: {
  paddingLeft: 5,
  paddingVertical: 2,
  fontSize:20,
  width: 40,
  color:'white',
  borderColor: 'darkblue',
  backgroundColor: 'rgba(0, 20, 145, .7)',
  borderWidth: 1,
  borderRadius: 2,
 },
 reset: {
  position: 'absolute',
  right: 80,
 },
 add: {
  position: 'absolute',
  right: 30,
 },
 bottomView: {
  flex:1,
  marginTop:20,
  width:'100%',
  paddingHorizontal:30,
 },
 listcontainer: {
  flexDirection: 'row',
  alignItems: 'center'
 },
 textProduct: {
  paddingLeft: 2,
  fontSize: 18,
  marginRight: 120,
  color:'rgba(0, 20, 145, .7)',
 },
 textAmount: {
  position: 'absolute',
  right: 25,
  fontSize: 8,
  color: 'darkblue',
  borderColor:'darkblue',
  borderWidth:1,
  width:20,
  height:20,
  padding:5,
  borderRadius:50,
  textAlign:'center',
 },
 delete: {
  position: 'absolute',
  right: 0,
  fontSize: 14,
  color: 'white',
  backgroundColor: 'rgba(255, 20, 20, 1)',
  borderRadius: 50,
  borderWidth: 1,
  borderColor: 'rgba(255, 0, 0, 1)',
  paddingHorizontal: 6,
  textAlign:'center',
 }
});