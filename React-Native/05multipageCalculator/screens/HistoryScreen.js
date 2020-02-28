import React, { useState }  from "react";
import { View, StyleSheet, Text, FlatList, Button } from "react-native";

export default function HistoryScreen(props) {
   /*  navigationOptions = {title: 'History',}; */

    const { params } = props.navigation.state;

    /* const { navigate } = props.navigation; */

    return (
        <View style={styles.container}>
          <Text style={styles.historyText}>Calculations History</Text>
          <FlatList
            data={ params.history }
            renderItem={ ({item}) => 
              <Text style={styles.historyList}>{ item.key }</Text>}
          />        
        </View>
      );
}

HistoryScreen.navigationOptions = ({ navigate }) => ({ title: 'History'});

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'coral',
    },
    historyText: {
      flex: .2,
      color:'cyan',
      fontSize: 32,
    },
    historyList: {
      color: 'white',
      fontSize: 24,
    },
  });