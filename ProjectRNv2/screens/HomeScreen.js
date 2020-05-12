import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Image, Linking } from 'react-native';

export default function HomeScreen(props) {
  navigationOptions = {title: 'Home',};



  const { navigate } = props.navigation;

  const listSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          borderStyle: 'dotted',
          borderTopWidth: 2,
          borderColor: 'rgb(81, 213, 185)',
          marginVertical: 6,
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Recipes</Text>
      <View style={styles.buttonContainer}>
          <Button color='black' title="Add new recipe" onPress={getRecipes} />
      </View>
      <View style={styles.result}>
        
        <FlatList
          keyExtractor={item => item.key} 
          renderItem={({ item }) =>
            <View style={styles.item}>
              <View style={styles.itemContent}>
                <Image style={styles.thumbnail} source={{uri: item.thumbnail ? `${item.thumbnail}` : 'https://www.freeiconspng.com/uploads/no-image-icon-4.png' }}/>
                <Text style={styles.text} >{item.title}</Text>
              </View>
              <Text style={styles.itemLink} onPress={() => Linking.openURL(item.href)} >Open</Text>
            </View>
          } 
          ItemSeparatorComponent={listSeparator}
          data={recipes} 
        />  
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = ({ navigate }) => ({ title: 'Home' });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: .3,
    textAlign: 'center',
    fontSize: 42,
    marginTop:20,
    width: '100%',
    textShadowColor: 'rgba(0,0,0,.6)',
    textShadowOffset: {width: -3, height: 2},
    textShadowRadius: 10,
    color: 'rgba(85,250,210, 1)',
    textTransform: 'uppercase',

  },
  action: {
    flex:.4,
    justifyContent: 'center',
    width: '100%',
    flexDirection: "row",
    alignItems: 'center',

  },
  result: {
    flex:4,
    marginHorizontal : "4%",
  },
  inputText: {
    fontSize: 18,
    width: 220,
    height: 40,
    paddingLeft: 8,
    backgroundColor: 'rgb(0, 0, 0)',
    color:'rgba(81, 213, 185, .7)',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: 60,
    marginLeft: 10,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 20,
    marginRight: 5,
  },
  text: {
    fontSize: 14,
    marginRight: 5,
    maxWidth: '68%',
  },
  itemLink: {
    fontSize: 14,
    textTransform: 'uppercase',
    backgroundColor: 'rgba(81, 213, 185, 1)',
    color: 'white',
    borderColor: 'rgba(81, 213, 185, .7)',
    padding: 6,
    borderWidth: 1,
    borderRadius: 2,
    textShadowColor: 'rgba(0,0,0,.6)',
    textShadowOffset: {width: -2, height: 1},
    textShadowRadius: 10,
  }
});