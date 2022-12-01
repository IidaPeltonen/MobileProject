import React from 'react'
import { Text,View, ScrollView } from 'react-native'
import { useState, useEffect } from 'react';
import XMLParser from 'react-xml-parser';
import { useFonts } from 'expo-font';
import styles from "../style/style"

const APIKEY = '4d24ca50-7859-4d0d-97c2-de16d61007af';
const documentType = '&documentType=A65' //mitä tietoaineistoa luetaan, "system total load" KULUTUSTIETO
const documentType2 = '&documentType=A71' //mitä tietoaineistoa luetaan, "system total load" KULUTUSTIETO
const outBiddingZone_Domain = '&outBiddingZone_Domain=10YFI-1--------U' // maakoodi, "FI"
const in_Domain = '&in_Domain=10YFI-1--------U' // maakoodi, "FI"
const processType = '&processType=A16' // minkä tyyppistä kulutustietoa haetaan, "realised"
const processType2 = '&processType=A01' // minkä tyyppistä tuotantotietoa haetaan, "day ahead"
const year = new Date().getFullYear()
const month = new Date().getMonth() + 1
let day = new Date().getDate()
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
const StartTime = '2300'
const EndTime = '2300'
const start = '&periodStart=' + year + month + (day - 1) + StartTime
const end = '&periodEnd=' + year + month + day + EndTime
const time = new Date().getHours()
const index = time - 2

// tällä saa Suomen toteutuneen kokonaiskulutuksen tuntitasolla kuluvalta päivältä
const URL = 'https://web-api.tp.entsoe.eu/api?securityToken=' + APIKEY + documentType + processType + outBiddingZone_Domain + start + end
// tällä alla olevalla osoitteella tulee suunniteltu tuotanto päivän ajalta suomessa.
const URL2 = 'https://web-api.tp.entsoe.eu/api?securityToken=' + APIKEY + documentType2 + processType2 + in_Domain + start + end

export default function Eleproduce() {

  const [lastLoad, setLastLoad] = useState(''); //viimeisin toteutunut kokonaiskulutus
  const [lastGeneration, setLastGeneration] = useState(''); //ennustettu kokonaistuotanto
  const [importNeed, setImportNeed] = useState(''); // muuttuja tuontisähkön tarpeelle

  // funktio tuontisähkön tarpeen laskentaan
  function importNeedCalculation(lastLoad,lastGeneration) {
    let situation = lastLoad - lastGeneration
/* console.log('last load: ' + lastLoad) //tämä ei saa mitään arvoa sivun latautuessa ekaa kertaa
console.log('last gen: ' + lastGeneration)
console.log('sit: ' + situation) */
     if (situation >= 0) {
      setImportNeed(Number(situation));
    } else {
      setImportNeed(Number(0));
    } 
    setImportNeed(situation)
  }

  useEffect(() => {
    Promise.all([
      fetch(URL),
      fetch(URL2),{
      headers: {
        'method': 'GET',
        'Content-Type': 'application/xml',
      },}
    ])
      .then(([resLoad, resGeneration]) =>
        Promise.all([resLoad.text(), resGeneration.text()])
      )
      .then(([dataLoad, dataGeneration]) => {
        let json = new XMLParser().parseFromString(dataLoad);
        let loadTemp = json.getElementsByTagName('quantity')
        let lastLoadTemp =  Number(loadTemp[index].value)
       // console.log('index: ' + index)
       // console.log(temp2);
        setLastLoad(Number(loadTemp[index].value));
        let json2 = new XMLParser().parseFromString(dataGeneration);
        let generationsTemp = json2.getElementsByTagName('quantity')
        let lastGenerationTemp =  Number(generationsTemp[index].value)
        //console.log(lastLoadTemp, lastGenerationTemp)
        importNeedCalculation(lastLoadTemp,lastGenerationTemp)
        setLastGeneration(Number(generationsTemp[index].value));
      })
      .catch(err => console.log(err));
    }, [])

  const [loaded] = useFonts({
    RubikGlitch: require('../assets/fonts/RubikGlitch-Regular.ttf'),
    Roboto: require('../assets/fonts/Roboto-Regular.ttf'),
    Orbitronregular: require('../assets/fonts/Orbitron-Regular.ttf'),
    Orbitronbold: require('../assets/fonts/Orbitron-Bold.ttf')
  });
  if(!loaded) {
    return null;
  }

  return (
    <View>
      <View style={styles.square}>
      <ScrollView>
      <View style={styles.titlepos}>
        <Text style={styles.title}>Sähkön kokonaiskulutus ja -tuotanto Suomessa kello {index} - {index + 1} (MWh/h)</Text>
      </View>
      <Text style={styles.flex}>
        <Text style={styles.text}>Toteutunut kokonaiskulutus:  </Text>
        <Text style={styles.notimportant}>{lastLoad}</Text>
      </Text>
      <Text style={styles.flex}>
        <Text style={styles.text}>Suunniteltu kokonaistuotanto:  </Text>
        <Text style={styles.notimportant}>{lastGeneration}</Text>
      </Text>
      <Text style={styles.flex}>
        <Text style={styles.text}>Laskennallinen tuontisähkön tarve  </Text>
        <Text style={styles.notimportant}>{importNeed}</Text>
      </Text>
      </ScrollView>
      </View>
  </View>
  );
}
