import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const getRecipes = () => {
    const url = 'http://www.recipepuppy.com/api/?q='+ query;
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => { 
       setRecipes(responseJson);
    })
    .catch((error) => { 
      console.log('Error', error); 
    }); 
    console.log('url is: ',url)
  }
  
  const listSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.action}>
        <TextInput 
          style={{fontSize: 18, width: 200}} 
          value={query} 
          placeholder="Search a recipe..."
          onChangeText={(query) => setQuery(query)} 
        />
        <Button title="Find" onPress={getRecipes} />
      </View>
      <View style={styles.result}>
        <FlatList 
          style={{marginHorizontal : "5%"}}
          keyExtractor={item => item.key} 
          renderItem={({ item }) => <Text>{item.results.title}, {item.results.thumbnail}</Text>} 
          ItemSeparatorComponent={listSeparator}
          data={recipes} 
        />  
      </View>
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
 action: {
   flex:.4,
   justifyContent: 'flex-end',
   marginBottom: 5,
 },
 result: {
   flex:2,
 }
});