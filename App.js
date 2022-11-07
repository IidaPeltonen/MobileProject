import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';

//testi, hakee tuntihinnastosta hinnan 1.11 10-11
const URL = 'https://api.fingrid.fi/v1/variable/%09317/events/json?start_time=2022-11-01T10%3A07%3A21-07%3A00&end_time=2022-11-02T11%3A07%3A21-07%3A00';
const APIKEY = 'BRMbElnXrT3oySHJz4Eas16LjweZiaPt9dfcRQAS';

//https://api.fingrid.fi/v1/variable/ tämä alku on aina sama
//%09317/events/json? tämä pätkä muuttuu, tässä tapauksessa meidän käyttämä "taulukko" on 317, eli variableId on 318
//start_time=2022-11-01T10%3A00%3A00Z&end_time=2022-11-01T11%3A00%3A00Z'; tässä on sitten se aikaväli, miltä hinta haetaan


//jos haluaa ajan NYT, tai tietyllä hetkellä, sekä alku, että loppuaika pitää olla samat, muoto on 
//siis 2022-11-07T13:00:00Z

export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch (URL, {
      headers: {
        'method': 'GET',
        'x-api-key': APIKEY
      }
    })

    .then(response => response.json())
    .then((json) => {
      console.log(json)
    
      setData(json)
    }, (error) => {
      console.log(error)
    })
  }, []);
     
  return (
    <View style={styles.container}> 
    {
      data && data.length>0 && data.map((item)=><Text>{item.value}</Text>)
    }
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
});

