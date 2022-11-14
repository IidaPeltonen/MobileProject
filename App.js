import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import XMLParser from 'react-xml-parser';

const APIKEY = '4d24ca50-7859-4d0d-97c2-de16d61007af';
const documentType = '&documentType=A44&' //mitä tietoaineistoa luetaan
const in_Domain = 'in_Domain=10YFI-1--------U&' // maakoodi
const out_Domain = 'out_Domain=10YFI-1--------U&'
const year = new Date().getFullYear()
const month = new Date().getMonth() + 1
const day = new Date().getDate()
const StartTime = '0000'
const EndTime = '0000'
const start = 'periodStart=' + year + month + day + StartTime + '&'
const end = 'periodEnd=' + year + month + (day+1) + EndTime 

const URL = 'https://web-api.tp.entsoe.eu/api?securityToken=' + APIKEY + documentType + in_Domain + out_Domain
  + start + end
const time = new Date().getHours() // current time, tunti, täatä pitää vähentää 1, jota saadaan
    //oikea indeksi taulukosta
const index = time -1 // hakee indexin,josta tämän hetken hinta haetaan

export default function App() {
  const [data, setData] = useState([])
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch(URL , {
      headers: {
        'method': 'GET',
        'Content-Type': 'application/xml',
      },
    })
      .then(res => res.text())
      .then(data => {
        let json = new XMLParser().parseFromString(data);
        //console.log(json.getElementsByTagName('price'));
        setPrices(json.getElementsByTagName('price'))
        console.log('hinta nyt: ' + prices[11].value); //megawattituntihinta, pitää muutta kilowattitunneiksi ja lisätä alv
        console.log('indeksi, josta hinta haetaan: ' + index)  
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <View style={styles.container}>
      {
        data && data.length > 0 && data.map((item) => <Text>{item.value}</Text>)
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

