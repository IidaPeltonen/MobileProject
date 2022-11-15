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
//const maxPrice = 0

export default function App() {
  const [data, setData] = useState([])
  const [prices, setPrices] = useState([]); //hinta-taulukko
  const [priceNow, setPriceNow] = useState(0); //hinta juuri nyt
  const [priceNextHour, setPriceNextHour] = useState(0); //hinta seuraavalla tunnilla
  const [arrow, setArrow] = useState('right') //nuolen suunnan määrittävä
  const [color, setColor] = useState('yellow') //nuolen värin määrittävä
  const [maxPrice, setMaxPrice] = useState(0)
  const [minPrice, setMinPrice] = useState(0)
  const [avg, setAvg] = useState(0)
 
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
    return arrow, color
  }
 
  function findMaxPrice(prices) {
    let bigPrice = 0
    for(let i = 0; i < 24; i++) {
      let curValue = Number(prices[i].value)
      if (curValue > bigPrice) {
        bigPrice = curValue
      }
    }
    bigPrice = (bigPrice /10 * 1.24).toFixed(2) 
    setMaxPrice(bigPrice)
  return maxPrice
  } 

  function findMinPrice(prices) {
    let smallPrice = 20000
    for(let i = 0; i < 24; i++) {
      let curValue = Number(prices[i].value)
      console.log('curValue: ' + curValue)
      console.log('smallPrice: ' + smallPrice)
      if (curValue < smallPrice) {
        smallPrice = curValue
      }
    }
    smallPrice = (smallPrice /10 * 1.24).toFixed(2) 
    //console.log('curValue: ' + curValue)
    //console.log('isoHinta: ' + isoHinta)
    setMinPrice(smallPrice)
  return minPrice
  } 

  function findAvg(prices) {
    let average = 0
    for(let i = 0; i < 24; i++) {
      let price = Number(prices[i].value)
      console.log('price: ' + price)
      console.log('average nyt: ' + average) 
      average+= price
    }
    average = (average / 24 /10 * 1.24).toFixed(2) 
    setAvg(average)
    return avg
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
        let noAlv = Number((prices[index].value) / 10).toFixed(2) 
        let sum = Number(noAlv * 1.24).toFixed(2) // alv nyt, ennen 1.12.22
        let priceNext = Number((prices[time].value) / 10 * 1.24).toFixed(2) //alv nyt, ennen 1.12.22
        setPriceNow(sum)
        setPriceNextHour(priceNext)
        compare(sum, priceNext)
        findMaxPrice(prices)
        findMinPrice(prices)
        findAvg(prices)
        console.log('Haettava indeksi: ' + index) 
        console.log('Seuraavan tunnin indeksi: ' + time)
        console.log('Seuraavan tunnin hinta: ' + priceNextHour)
        console.log('Hinta nyt, ei sis  alv: ' + noAlv + 'snt/kWh')
        console.log('Hinta nyt, sis alv: ' + sum + 'snt/kWh') 
        console.log('Päivän korkein: ' + maxPrice + 'snt/kWh') 
        console.log('Päivän matalin: ' + minPrice + 'snt/kWh') 
        console.log('Päivän ka: ' + avg + 'snt/kWh') 
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <View style={styles.container}>
      <Text>Sähkön hinta tänään (snt/kWh,sis. Alv 24%)</Text>
      <Text>Hinta nyt: {priceNow} </Text>
      <MaterialCommunityIcons
        name={'arrow-' + arrow + '-bold'}
        color={color}
        size={40}
      ></MaterialCommunityIcons>
      <Text>Päivän ylin: {maxPrice} </Text>
      <Text>Päivän alin: {minPrice} </Text>
      <Text>Päivän keskihinta: {avg} </Text>
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




