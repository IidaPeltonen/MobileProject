import { Text, View, ScrollView, Modal, Button, } from 'react-native';
import { useState, useEffect } from 'react';
import XMLParser from 'react-xml-parser';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ActivityIndicator } from 'react-native-paper';
import { useFonts } from 'expo-font';
import styles from '../style/style';

const APIKEY = '4d24ca50-7859-4d0d-97c2-de16d61007af';
const documentType = '&documentType=A44&' //mitä tietoaineistoa luetaan
const in_Domain = 'in_Domain=10YFI-1--------U&' // maakoodi
const out_Domain = 'out_Domain=10YFI-1--------U&'
const year = new Date().getFullYear()
let month = new Date().getMonth() + 1
let day = new Date().getDate()
//jos päivä on alle 10, se saadaan yksinumeroisena, jolloin url ei toimi
//joten muutetaan ne kaksinumeroiseksi
if (day === 1) {
  day = '01'
}
if (day === 2) {
  day = '02'
}
if (day === 3) {
  day = '03'
}
if (day === 4) {
  day = '04'
}
if (day === 5) {
  day = '05'
}
if (day === 6) {
  day = '06'
}
if (day === 7) {
  day = '07'
}
if (day === 8) {
  day = '08'
}
if (day === 9) {
  day = '09'
}
//jos kk on alle 10, se saadaan yksinumeroisena, jolloin url ei toimi
//joten muutetaan ne kaksinumeroiseksi
if (month === 1) {
  month = '01'
}
if (month === 2) {
  month = '02'
}
if (month === 3) {
  month = '03'
}
if (month === 4) {
  month = '04'
}
if (month === 5) {
  month = '05'
}
if (month === 6) {
  month = '06'
}
if (month === 7) {
  month = '07'
}
if (month === 8) {
  month = '08'
}
if (month === 9) {
  month = '09'
}
let nextDayDay = new Date(new Date().getTime() + (24 * 60 * 60 * 1000)).getDate();
//jos päivä on alle 10, se saadaan yksinumeroisena, jolloin url ei toimi
//joten muutetaan ne kaksinumeroiseksi
if (nextDayDay === 1) {
  nextDayDay = '01'
}
if (nextDayDay === 2) {
  nextDayDay = '02'
}
if (nextDayDay === 3) {
  nextDayDay = '03'
}
if (nextDayDay === 4) {
  nextDayDay = '04'
}
if (nextDayDay === 5) {
  nextDayDay = '05'
}
if (nextDayDay === 6) {
  nextDayDay = '06'
}
if (nextDayDay === 7) {
  nextDayDay = '07'
}
if (nextDayDay === 8) {
  nextDayDay = '08'
}
if (nextDayDay === 9) {
  nextDayDay = '09'
}
let nextDayMonth = new Date(new Date().getTime() + (24 * 60 * 60 * 1000)).getMonth() + 1;
//jos kk on alle 10, se saadaan yksinumeroisena, jolloin url ei toimi
//joten muutetaan ne kaksinumeroiseksi
if (nextDayMonth === 1) {
  nextDayMonth = '01'
}
if (nextDayMonth === 2) {
  nextDayMonth = '02'
}
if (nextDayMonth === 3) {
  nextDayMonth = '03'
}
if (nextDayMonth === 4) {
  nextDayMonth = '04'
}
if (nextDayMonth === 5) {
  nextDayMonth = '05'
}
if (nextDayMonth === 6) {
  nextDayMonth = '06'
}
if (nextDayMonth === 7) {
  nextDayMonth = '07'
}
if (nextDayMonth === 8) {
  nextDayMonth = '08'
}
if (nextDayMonth === 9) {
  nextDayMonth = '09'
}
const nextDayYear = new Date(new Date().getTime() + (24 * 60 * 60 * 1000)).getFullYear();
const StartTime = '0000'
const EndTime = '0000'
const start = 'periodStart=' + year + month + day + StartTime + '&'
const end = 'periodEnd=' + nextDayYear + nextDayMonth + nextDayDay + EndTime

const URL = 'https://web-api.tp.entsoe.eu/api?securityToken=' + APIKEY + documentType + in_Domain + out_Domain
  + start + end
const time = new Date().getHours() // current time, tunti. Toimii myös seuraavan tunnin hinnanhakua varten
let index = 0 // tästä taulukon indeksistä haetaan hinta
//jos kello on 0
if (time === 0) {
  index = 23
}
//muuten
else {
  index = time -1
}


export default function Elepricenow() {
  const [data, setData] = useState([])
  const [priceNow, setPriceNow] = useState(0); //hinta juuri nyt
  const [priceNextHour, setPriceNextHour] = useState(0); //hinta seuraavalla tunnilla
  const [arrow, setArrow] = useState('left') //nuolen suunnan määrittävä
  const [color, setColor] = useState('blue') //nuolen värin määrittävä
  const [maxPrice, setMaxPrice] = useState(0) //korkein hinta
  const [minPrice, setMinPrice] = useState(0) //matalin hinta
  const [avg, setAvg] = useState(0) //keskiarvot
  const [lowTime, setLowTime] = useState(0) //matalimman hinnan kellonaika
  const [highTime, setHighTime] = useState(0) //korkeimman hinnan kellonaika
  const [timeStart, setTimeStart] = useState(0) 
  const [timeEnd, setTimeEnd] = useState(0) 
  const [timeStart2, setTimeStart2] = useState(0) 
  const [timeEnd2, setTimeEnd2] = useState(0) 
   const [modalOpen, setModalOpen] = useState(false);

  //vertaa hintaa nyt tunninpäästä-hintaan
  function compare(priceNow, priceNextHour) {
    //jos hinta nyt on suurempi kuin hinta tunnin päästä, kääntää nuolen alas ja muuttaa värin vihreäksi
    if (priceNow > priceNextHour) {
      setArrow('down')
      setColor('lightgreen')
    }
    //jos hinta nyt on pienempi kuin hinta tunnin päästä, kääntää nuolen ylös ja muuttaa värin punaiseksi
    else if (priceNow < priceNextHour) {
      setArrow('up')
      setColor('red')
    }
    //jos hinta nyt on sama kuin hinta tunnin päästä, kääntää nuolen oikealle ja muuttaa värin keltaiseksi
    if (priceNow === priceNextHour) {
      setArrow('right')
      setColor('#FFC300')
    }
    return arrow, color
  }

  //etsii korkeimman hinnan
  function findMaxPrice(prices) {
    let bigPrice = 0
    let timeUp = 0
    for (let i = 0; i < 24; i++) {
      let curValue = Number(prices[i].value)
      if (curValue > bigPrice) {
        timeUp = i + 1
        bigPrice = curValue
      }
    }
    bigPrice = (bigPrice / 10 * 1.10).toFixed(2) //alv 10% 1.12 alkaen
    setMaxPrice(bigPrice)
    setHighTime(timeUp)
    if (timeUp === 24) {
      setTimeStart(0)
      setTimeEnd(1)
    }
    else {
      setTimeStart(timeUp)
      setTimeEnd(timeUp + 1)
  }
    return maxPrice
  }

  //etsii matalimman hinnan
  function findMinPrice(prices) {
    let smallPrice = 20000
    let timeDown = 0
    for (let i = 0; i < 24; i++) {
      let curValue = Number(prices[i].value)
      if (curValue < smallPrice) {
        timeDown = i + 1
        smallPrice = curValue
      }
    }
    smallPrice = (smallPrice / 10 * 1.10).toFixed(2) //alv 10% 1.12 alkaen
    setMinPrice(smallPrice)
    setLowTime(timeDown)
    if (timeDown === 24) {
      setTimeStart2(0)
      setTimeEnd2(1)
    }
    else {
      setTimeStart2(timeDown)
      setTimeEnd2(timeDown + 1)
  }
    return minPrice
  }

  //laskee päivän keskiarvon
  function findAvg(prices) {
    let average = 0
    for (let i = 0; i < 24; i++) {
      let price = Number(prices[i].value)
      average += price
    }
    average = (average / 24 / 10 * 1.10).toFixed(2) //alv 10% 1.12 alkaen
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
        const temp = json.getElementsByTagName('price')
        let noAlv = Number((temp[index].value) / 10).toFixed(2)
        let sum = Number(noAlv * 1.10).toFixed(2) // alv nyt, ennen 1.12.22
        let priceNext = Number((temp[time].value) / 10 * 1.10).toFixed(2) //alv nyt, ennen 1.12.22
        setPriceNow(sum)
        setPriceNextHour(priceNext)
        findMaxPrice(temp)
        findMinPrice(temp)
        compare(sum, priceNext)
        findAvg(temp)
      })
      .catch(err => console.log(err));
  }, [])

  const [loaded] = useFonts({
    Roboto: require('../assets/fonts/Roboto-Regular.ttf'),
    Orbitronregular: require('../assets/fonts/Orbitron-Regular.ttf'),
    Orbitronbold: require('../assets/fonts/Orbitron-Bold.ttf')
  });
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.square}>
      <ScrollView>
        <View style={styles.titlepos}>
          <Text style={styles.title}>Sähkön hinta tänään </Text>
          <Text style={styles.lowkey}>(snt/kWh,sis. Alv 10%)</Text>
        </View>
        <Text style={styles.flex1}>
          <Text style={styles.text}>Hinta nyt:  </Text>
          <Text style={styles.important}>{priceNow ? priceNow : <ActivityIndicator size="large" color="#ffffff" />}
            <MaterialCommunityIcons
              name={'arrow-' + arrow + '-bold'}
              color={color}
              size={48}
              style={styles.icon}
            ></MaterialCommunityIcons></Text>
          <Modal presentationStyle="overFullScreen" transparent style={styles.modalcontent} visible={modalOpen}>
            <View style={styles.modal}>
              <View style={styles.modalcontent}>
                <Text style={styles.modaltext}>Vihreä nuoli alas = Hinta tulee laskemaan</Text>
                <Text style={styles.modaltext}>Punainen nuoli ylös = Hinta tulee nousemaan</Text>
                <Text style={styles.modaltext}>Keltainen oikealle = Hinta pysyy samana</Text>
                <Button color='#757575' title='sulje' onPress={() => setModalOpen(false)}></Button>
              </View>
            </View>
          </Modal>
          <MaterialCommunityIcons name='information-outline' size={25} color={'#5F5F5F'} onPress={() => setModalOpen(true)}></MaterialCommunityIcons>
        </Text>
        <Text style={styles.flex1}>
          <Text style={styles.text}>Päivän ylin (klo: {timeStart}-{timeEnd}):  </Text>
          <Text style={styles.notimportant}>{maxPrice ? maxPrice : <ActivityIndicator size="small" color="#ffffff" />}</Text>
        </Text>
        <Text style={styles.flex1}>
          <Text style={styles.text}>Päivän alin (klo: {timeStart2}-{timeEnd2}):  </Text>
          <Text style={styles.notimportant}>{minPrice ? minPrice : <ActivityIndicator size="small" color="#ffffff" />}</Text>
        </Text>
        <Text style={styles.flex1}>
          <Text style={styles.text}>Päivän keskihinta:  </Text>
          <Text style={styles.notimportant}>{avg ? avg : <ActivityIndicator size="small" color="#ffffff" />}</Text>
        </Text>
      </ScrollView>
    </View>
  );
}
