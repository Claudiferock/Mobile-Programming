import React, { useState }from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import MapView, { Marker } from "react-native-maps";

export default function App() {
  
  const [location, setLocation] = useState('Helsinki');
  const [targerLatitude, setTargerLatitude] = useState(60.200692);
  const [targetLongitude, setTargetLongitude] = useState(24.934302);
  const [targerLatitudeDelta, setTargerLatitudeDelta] = useState(0.0322);
  const [targetLongitudeDelta, setTargetLongitudeDelta] = useState(0.0221);
  
/*   const fetchData = () {
    const url = `https://www.mapquestapi.com/geocoding/v1/address?key=v8sTEMrF49GGjyOhsK9riJyJIvhZnPqI&inFormat=kvp&outFormat=json&location=${location}&thumbMaps=false`;
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      setTargerLatitude(responseJson.results[0].locations[0].latLng.lat);
    })
    .catch((error) => {
      console.error('Failed to fetch', error);
    });
  } */
  
  return (
    <View style={{ flex:1}}>
      <MapView
        style={{ flex:1 }}
        initialRegion={{
        latitude:targerLatitude,
        longitude:targetLongitude,
        latitudeDelta:targerLatitudeDelta,
        longitudeDelta:targetLongitudeDelta,}}
      >
        <Marker
        coordinate={{
          latitude:targerLatitude,
          longitude:targetLongitude}}
        title='Haaga-Helia'/>
      </MapView>
      <View style={styles.actionContainer}>
        <TextInput
          style={styles.inputText}
          value={'Helsinki'}
        />
        <Button color='rgb(0,190,90)' title="Search" />
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
  actionContainer: {
    backgroundColor: 'rgba(0,200,200,.6)',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  inputContainer: {
    flexDirection: 'row',
    fontSize: 84,
  },
  inputText: {
    fontSize: 24,
    width: 260,
    marginHorizontal: 10,
    paddingRight: 8,
    backgroundColor: 'rgba(0,0,0,.4)',
    color:'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: "center",
  },
});

