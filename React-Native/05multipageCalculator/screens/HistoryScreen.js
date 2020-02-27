import React, { useState }  from "react";
import { View, StyleSheet, Text, FlatList, Button } from "react-native";

export default function HistoryScreen(props) {
   /*  navigationOptions = {title: 'History',}; */

    const { params } = props.navigation.state;

    /* const { navigate } = props.navigation; */

    return (
        <View style={styles.container}>
          <View style={styles.history}>
            <Text style={styles.historyText}>Calculations History</Text>
            <FlatList
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
      flex: 1.2,
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: '#24292e',
      color: 'white',
    },
    history: {
      flex: 1.4,
      alignItems: 'center',
    },
    historyText: {
      textAlign: "left",
      color:'gainsboro',
      fontSize: 24,
    }
  });