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
const end = 'periodEnd=' + year + month + (day + 1) + EndTime

const URL = 'https://web-api.tp.entsoe.eu/api?securityToken=' + APIKEY + documentType + in_Domain + out_Domain
  + start + end
const time = new Date().getHours() // current time, tunti
const index = time -1 // tästä tauluko nindeksistä hartaan hinta

export default function App() {
  const [data, setData] = useState([])
  const [prices, setPrices] = useState([]);
  const [priceNow, setPriceNow] = useState('');

  useEffect(() => {
    fetch(URL, {
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
        let noAlv = parseFloat((prices[index].value) / 10).toFixed(2) 
        let sum = parseFloat(noAlv * 1.24).toFixed(2) // alv nyt, ennen 1.12.22
        let noAlv2 = parseFloat((prices[0].value) / 10).toFixed(2) 
        let sum2 = parseFloat(noAlv * 1.24).toFixed(2) // alv nyt, ennen 1.12.22
        setPriceNow(sum)
        console.log('Taulukon aloitusaika: ' + start)
        console.log('Taulukon lopetusaika: ' + end)
        console.log('Kellonaika haettaessa: ' + time)
        console.log('Haettava indeksi: ' + index)
        console.log('Hinta nyt, ei sis  alv: ' + noAlv + 'snt/kWh')
        console.log('Hinta nyt, sis alv: ' + sum + 'snt/kWh')
        console.log('Testi, hinta taulukon indeksistä 0, ei sis  alv: ' + noAlv2 + 's/kWh')
        console.log('Testi, hinta taulukon indeksistä 0, sis alv: ' + sum2 + 's/kWh')
      })
      .catch(err => console.log(err));
    }, [])

  return (
    <View style={styles.container}>
      <Text>Hinta nyt: {priceNow} snt/kWh (sis. Alv 24%)</Text>
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




