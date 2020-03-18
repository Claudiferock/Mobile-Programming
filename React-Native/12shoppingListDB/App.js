import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('coursedb.db');

export default function App() {
  const [product, setProduct] = useState([]);
  const [amount, setAmount] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('create table if not exists course (id integer primary key not null, amounts int, title text);');
    });
    updateList();    
  }, []);

  // Save course
  const saveItem = () => {
    db.transaction(tx => {
        tx.executeSql('insert into course (amounts, title) values (?, ?);', [parseInt(amount), title]);    
      }, null, updateList
    )
  }

  // Update courselist
  const updateList = () => {
    db.transaction(tx => {
      tx.executeSql('select * from course;', [], (_, { rows }) =>
        setProduct(rows._array)
      ); 
    });
  }

  // Delete course
  const deleteItem = (id) => {
    db.transaction(
      tx => {
        tx.executeSql(`delete from course where id = ?;`, [id]);
      }, null, updateList
    )    
  }

  const listSeparator = () => {
    return (
      <View
        style={{
          height: 5,
          width: "80%",
          backgroundColor: "#fff",
          marginLeft: "10%"
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>        
        <Text style={styles.title}>Shopping List</Text>
        <View style={styles.inputsContainer}>
          <TextInput placeholder='Product...' style={{paddingLeft: 5, fontSize: 18, width: 200, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(title) => setTitle(title)}
            value={title}/>  
          <TextInput placeholder='Amount...' keyboardType="numeric" style={{paddingLeft: 5, fontSize:18, width: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(amount) => setAmount(amount)}
            value={amount}/>      
          <Button onPress={saveItem} title="Add" /> 
        </View>
      </View>
      <FlatList 
        style={styles.bottomView}
        keyExtractor={item => item.id.toString()} 
        renderItem={({item}) => <View style={styles.listcontainer}><Text style={{fontSize: 18}}>{item.title}, {item.amounts}</Text>
        <Text style={{fontSize: 18, color: 'red'}} onPress={() => deleteItem(item.id)}> Bought  </Text></View>} 
        data={product} 
        ItemSeparatorComponent={listSeparator} 
      />      
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
 },
 topView: {
  flex:.5,
 },
 title: {
  color: 'cyan',
  fontSize: 36,
  textShadowColor: 'rgba(0,0,0,.6)',
  textShadowOffset: {width: -5, height: 2},
  textShadowRadius: 10,
  textTransform: 'uppercase',
},
 inputsContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'space-between',
  marginTop: 20,
 },
 bottomView: {
  flex:1,
  marginLeft : "5%",
 },
 listcontainer: {
  flexDirection: 'row',
  backgroundColor: '#fff',
  alignItems: 'center'
 },
});