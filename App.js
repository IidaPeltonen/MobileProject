import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';

//testi, hakee tuntihinnastosta hinnan 1.11 10-11
const URL = 'https://api.fingrid.fi/v1/variable/%09317/events/json?start_time=2022-11-01T10%3A00%3A00Z&end_time=2022-11-01T11%3A00%3A00Z';
const APIKEY = 'D1fcMx4D0O6ua4wwnEGHZ9re1lFBsREE5G2tNZ8D';

//https://api.fingrid.fi/v1/variable/ tämä alku on aina sama
//%09317/events/json? tämä pätkä muuttuu, tässä tapauksessa meidän käyttämä "taulukko" on 317, eli variableId on 318
//start_time=2022-11-01T10%3A00%3A00Z&end_time=2022-11-01T11%3A00%3A00Z'; tässä on sitten se aikaväli, miltä hinta haetaan


//jos haluaa ajan NYT, tai tietyllä hetkellä, sekä alku, että loppuaika pitää olla samat, muoto on 
//siis 2022-11-07T13:00:00Z

export default function App() {
  const [data, setData] = useState('')

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
  })
     
  return (

      <Text>jjiksrjnjt</Text>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

