import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';

const URL2 = 'https://web-api.tp.entsoe.eu/api?securityToken=';
const APIKEY2 = '4d24ca50-7859-4d0d-97c2-de16d61007af';
const documentType = '&documentType=A44&' //mitä tietoaineistoa luetaan
const in_Domain = 'in_Domain=10YFI-1--------U&' // maakoodi
const out_Domain = 'out_Domain=10YFI-1--------U&'
const start = 'periodStart=202211082300&'
const end = 'periodEnd=202211092300'
//const loppu = '&documentType=A44&in_Domain=10YFI-1--------U&out_Domain=10YFI-1--------U&periodStart=202211082300&periodEnd=202211092300'

export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch (URL2 + APIKEY2 + documentType + in_Domain + out_Domain + start + end ,{
      headers: {
        'method': 'GET',
        'Content-Type': 'application/xml',
      },
    })

    .then(response => response.text())
    .then((textResponse) =>  console.log('response is ', textResponse)) 
    .catch((error) => {
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

