import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import XMLParser from 'react-xml-parser';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

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
const time = new Date().getHours() // current time, tunti. Toimii myös seuraavan tunnin hinnanhakua varten
const index = time - 1 // tästä taulukon indeksistä haetaan hinta

export default function App() {
  const [data, setData] = useState([])
  const [prices, setPrices] = useState([]); //hinta-taulukko
  const [priceNow, setPriceNow] = useState(''); //hinta juuri nyt
  const [priceNextHour, setPriceNextHour] = useState(''); //hinta seuraavalla tunnilla
  const [arrow, setArrow] = useState('') //nuolen suunnan määrittävä
  const [color, setColor] = useState('') //nuolen värin määrittävä

  function compare(priceNow, priceNextHour) {
    //jos hinta nyt on suurempi kuin hinta tunnin päästä, kääntää nuolen alas ja muuttaa värin vihreäksi
    if (priceNow > priceNextHour) {
      setArrow('down')
      setColor('green')
    }
    //jos hinta nyt on pienempi kuin hinta tunnin päästä, kääntää nuolen ylös ja muuttaa värin punaiseksi
    else if (priceNow < priceNextHour) {
      setArrow('up')
      setColor('red')
    }
    //jos hinta nyt on sama kuin hinta tunnin päästä, kääntää nuolen oikealle ja muuttaa värin keltaiseksi
    if (priceNow === priceNextHour) {
      setArrow('right')
      setColor('yellow')
    }

/*     console.log('hinta nyt: ' + priceNow)
    console.log('hinta tunnin päästä: ' + priceNextHour)    
    console.log('arrow: ' + arrow)
    console.log('color: ' + color) */
    return arrow, color
  }

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
        let priceNext = parseFloat((prices[time].value) / 10 * 1.24).toFixed(2) //alv nyt, ennen 1.12.22
        setPriceNow(sum)
        setPriceNextHour(priceNext)
        compare(priceNow, priceNextHour)
        console.log('Taulukon aloitusaika: ' + start)
        console.log('Taulukon lopetusaika: ' + end)
        console.log('Kellonaika haettaessa: ' + time)
        console.log('Haettava indeksi: ' + index) 
        console.log('Seuraavan tunnin indeksi: ' + time)
        console.log('Seuraavan tunnin hinta: ' + priceNextHour)
        console.log('Hinta nyt, ei sis  alv: ' + noAlv + 'snt/kWh')
        console.log('Hinta nyt, sis alv: ' + sum + 'snt/kWh') 
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <View style={styles.container}>
      <Text>Sähkön hinta tänään (snt/kWh,sis. Alv 24%)</Text>
      <Text>Hinta nyt: {priceNow} </Text>
      <MaterialCommunityIcons
        name={'arrow-' + arrow + '-bold'}
        color={'red'}
        size={40}
      ></MaterialCommunityIcons>
      <Text>Päivän ylin: 0 </Text>
      <Text>Päivän alin: 0 </Text>
      <Text>Päivän keskihinta: 0 </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffS',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




