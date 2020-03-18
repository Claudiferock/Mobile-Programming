import React, { useState, useEffect, useCallback }from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import MapView, { Marker } from "react-native-maps";

export default function App() {
  
  const [location, setLocation] = useState('Helsinki');
  const [targetLatitude, setTargetLatitude] = useState(60.200692);
  const [targetLongitude, setTargetLongitude] = useState(24.934302);
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    const url = `https://www.mapquestapi.com/geocoding/v1/address?key=v8sTEMrF49GGjyOhsK9riJyJIvhZnPqI&inFormat=kvp&outFormat=json&location=${location}&thumbMaps=false`;
    const response = await fetch(url);
    const responseData = await response.json();
    (response.ok) 
      ? setData(responseData.results[0].locations[0])
      : console.error('Failed to fetch');
  })

  const onRegionChange = () => {
    return {
      region: {
        latitude: targetLatitude,
        longitude: targetLongitude,
      },
    };
  }

  useEffect( () => {
    fetchData();
  }, [location]);
  
  const findLocation = () => {
    setTargetLatitude(data.latLng.lat);
    setTargetLongitude(data.latLng.lng);
    onRegionChange();
  }
  
  return (
    <View style={{ flex:1}}>
      <View style={styles.actionContainer}>
        <TextInput
          style={styles.inputText}
          value={ location }
          onChangeText={(location) => setLocation(location)}
          clearButtonMode='always'
        />
        <Button color='rgb(0,200,0)' title="Search" onPress={() => findLocation()} />
      </View>

      <MapView
        style={{ flex:1 }}
        initialRegion={{
          latitude:60.200692,
          longitude:24.934302,
          latitudeDelta:0.0322,
          longitudeDelta:0.0221,}}
        region={{
          latitude: targetLatitude,
          longitude: targetLongitude,
          latitudeDelta:0.1,
          longitudeDelta:0.2,
        }}
      >
        <Marker
          coordinate={{
            latitude: targetLatitude,
            longitude: targetLongitude,
          }}
          title={ location }
        />
      </MapView>
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
    alignItems: 'flex-end',
    position: 'relative',
    paddingBottom: 20,
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

