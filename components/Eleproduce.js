import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import { useState, useEffect } from 'react';
import XMLParser from 'react-xml-parser';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native-paper';
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
let previousDay = new Date(new Date().getTime() - (24 * 60 * 60 * 1000)).getDate();
//jos päivä on alle 10, se saadaan yksinumeroisena, jolloin url ei toimi
//joten muutetaan ne kaksinumeroiseksi
if (previousDay === 1) {
  previousDay = '01'
}
if (previousDay === 2) {
  previousDay = '02'
}
if (previousDay === 3) {
  previousDay = '03'
}
if (previousDay === 4) {
  previousDay = '04'
}
if (previousDay === 5) {
  previousDay = '05'
}
if (previousDay === 6) {
  previousDay = '06'
}
if (previousDay === 7) {
  previousDay = '07'
}
if (previousDay === 8) {
  previousDay = '08'
}
if (previousDay === 9) {
  previousDay = '09'
}

let previousMonth = new Date(new Date().getTime() - (24 * 60 * 60 * 1000)).getMonth() + 1;
//jos päivä on alle 10, se saadaan yksinumeroisena, jolloin url ei toimi
//joten muutetaan ne kaksinumeroiseksi
if (previousMonth === 1) {
  previousMonth = '01'
}
if (previousMonth === 2) {
  previousMonth = '02'
}
if (previousMonth === 3) {
  previousMonth = '03'
}
if (previousMonth === 4) {
  previousMonth = '04'
}
if (previousMonth === 5) {
  previousMonth = '05'
}
if (previousMonth === 6) {
  previousMonth = '06'
}
if (previousMonth === 7) {
  previousMonth = '07'
}
if (previousMonth === 8) {
  previousMonth = '08'
}
if (previousMonth === 9) {
  previousMonth = '09'
}

const previousYear = new Date(new Date().getTime() - (24 * 60 * 60 * 1000)).getFullYear();
//haetaan kellonaika 24h sitten
const dAgo = (new Date(new Date().getTime() - (24 * 60 * 60 * 1000)).getHours())
//jos aika on yksinumeroinen
if (dAgo === 1) {
  dAgo = '01'
}
if (dAgo === 2) {
  dAgo = '02'
}
if (dAgo === 3) {
  dAgo = '03'
}
if (dAgo === 4) {
  dAgo = '04'
}
if (dAgo === 5) {
  dAgo = '05'
}
if (dAgo === 6) {
  dAgo = '06'
}
if (dAgo === 7) {
  dAgo = '07'
}
if (dAgo === 8) {
  dAgo = '08'
}
if (dAgo === 9) {
  dAgo = '09'
}
const minutes = '00'
const StartTime = dAgo + minutes
//kellonaika nyt
const hours = new Date().getHours()
const EndTime = hours+ minutes
const start = '&periodStart=' + previousYear + previousMonth + previousDay + StartTime
const end = '&periodEnd=' + year + month + day + EndTime

const StartTime2 = '2300'
const EndTime2 = '2300'
const start2 = '&periodStart=' + previousYear + previousMonth + previousDay + StartTime2
const end2 = '&periodEnd=' + year + month + day + EndTime2

// tällä saa Suomen toteutuneen kokonaiskulutuksen tuntitasolla viimeiseltä 24 hlta
const URL = 'https://web-api.tp.entsoe.eu/api?securityToken=' + APIKEY + documentType + processType + outBiddingZone_Domain + start + end
// tällä alla olevalla osoitteella tulee suunniteltu tuotanto päivän ajalta suomessa.
const URL2 = 'https://web-api.tp.entsoe.eu/api?securityToken=' + APIKEY + documentType2 + processType2 + in_Domain + start2 + end2

export default function Eleproduce() {
  const [lastLoad, setLastLoad] = useState(''); //viimeisin toteutunut kokonaiskulutus
  const [lastGeneration, setLastGeneration] = useState(''); //ennustettu kokonaistuotanto
  const [importNeed, setImportNeed] = useState(''); // muuttuja tuontisähkön tarpeelle

  // funktio tuontisähkön tarpeen laskentaan
  function importNeedCalculation(lastLoad, lastGeneration) {
    lastLoad = Number(lastLoad)
    lastGeneration = Number(lastGeneration)
    let situation = Number(lastLoad - lastGeneration)
    if (situation >= 0) {
      setImportNeed(Number(situation));
    } 
    else {
      setImportNeed(Number(0));
    }
  }

  useEffect(() => {
    Promise.all([
      fetch(URL),
      fetch(URL2), {
        headers: {
          'method': 'GET',
          'Content-Type': 'application/xml',
        },
      }
    ])
      .then(([resLoad, resGeneration]) =>
        Promise.all([resLoad.text(), resGeneration.text()])
      )
      .then(([dataLoad, dataGeneration]) => {
        let json = new XMLParser().parseFromString(dataLoad);
        let loadTemp = json.getElementsByTagName('quantity')
        let length = loadTemp.length
        let lastLoadTemp = Number(loadTemp[length-1].value)
        setLastLoad(Number(lastLoadTemp));

        let json2 = new XMLParser().parseFromString(dataGeneration);
        let generationsTemp = json2.getElementsByTagName('quantity')
        let lastGenerationTemp = Number(generationsTemp[hours-2].value)

        importNeedCalculation(lastLoadTemp, lastGenerationTemp)
        setLastGeneration(Number(generationsTemp[hours-2].value));
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
    <View>
      <View style={styles.square}>
        <ScrollView>
        <Text style={styles.flex3}>
          <Text style={styles.title}>Sähkön kokonaiskulutus ja -tuotanto Suomessa kello {hours -2} - {hours - 1} (MWh/h)</Text>
        </Text>
          <Text style={styles.flex3}>
            <Text style={styles.text}>Toteutunut kokonaiskulutus  {"\n"}</Text>
            <Text style={styles.notimportant}>{lastLoad ? lastLoad : <ActivityIndicator size="small" color="#ffffff" />}</Text>
          </Text>
          <Text style={styles.flex3}>
            <Text style={styles.text}>Suunniteltu kokonaistuotanto  {"\n"}</Text>
            <Text style={styles.notimportant}>{lastGeneration ? lastGeneration : <ActivityIndicator size="small" color="#ffffff" />}</Text>
          </Text>
          <Text style={styles.flex3}>
            <Text style={styles.text}>Laskennallinen tuontisähkön tarve  {"\n"}</Text>
            <Text style={styles.notimportant}>{importNeed ? importNeed : <ActivityIndicator size="small" color="#ffffff" />}</Text>
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}
