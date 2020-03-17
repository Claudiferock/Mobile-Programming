import React, { useState }  from "react";
import { View, StyleSheet, Text, FlatList, Button } from "react-native";

export default function HistoryScreen(props) {
   /*  navigationOptions = {title: 'History',}; */

    const { params } = props.navigation.state;

    /* const { navigate } = props.navigation; */

    return (
        <View style={styles.container}>
          <View style={styles.history}>
            <Text style={styles.historyTitle}>Calculations History</Text>
            <FlatList
              style={styles.historyList}
              data={ params.history }
              renderItem={ ({item}) => 
                <Text style={styles.historyText}>{ item.key }</Text>}
            />        
          </View>
        </View>
      );
}

HistoryScreen.navigationOptions = ({ navigate }) => ({ title: 'History'});

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: 'center',
      backgroundColor: 'black',
      color: 'white',
    },
    history: {
      flex: 1,
      alignContent: 'flex-end',
      alignItems: 'center',
    },
    historyTitle: {
      flex:1,
      color:'#47e3ff',
      fontSize: 48,
      alignSelf: 'center',
      textTransform: 'uppercase',
      transform: [ {rotate: '270deg' }],
      position: 'absolute',
      top: 90,
      left: -140,
    },
    historyList: {
      marginTop: 20,
    },
    historyText: {
      textAlign: "left",
      marginStart: 100,
      color:'white',
      fontSize: 34,
    }
  });