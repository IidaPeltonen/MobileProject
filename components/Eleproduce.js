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
const day = new Date().getDate()
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

  const [loads, setLoads] = useState([]); // taulukko kulutustiedoille
  const [lastLoad, setLastLoad] = useState(''); //viimeisin toteutunut kokonaiskulutus
  const [generations, setGenerations] = useState([]); //taulukko tuotantoluvuille
  const [lastGeneration, setLastGeneration] = useState(''); //ennustettu kokonaistuotanto
  const [importNeed, setImportNeed] = useState(''); // muuttuja tuontisähkön tarpeelle

  // funktio tuntisähkön tarpeen laskentaan
  function importNeedCalculation(lastLoad,lastGeneration) {
    let situation = lastLoad - lastGeneration

    if (situation >= 0) {
      setImportNeed(Number(situation));
    } else {
      setImportNeed(Number(0));
    }
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
        setLoads(json.getElementsByTagName('quantity'))
        let temp = json.getElementsByTagName('quantity')
        setLastLoad(Number(temp[index].value));

      // tällä tavalla saa ulos tietyn tunnin kokonaiskulutuksen.
      //  console.log(loads[index].value) 
      })
      .catch(err => console.log(err));
  }, [])

  useEffect(() => {
    fetch(URL2, {
      headers: {
        'method': 'GET',
        'Content-Type': 'application/xml',
      },
    })
      .then(res => res.text())
      .then(data => {
        let json = new XMLParser().parseFromString(data);
        setGenerations(json.getElementsByTagName('quantity'))
        let temp = json.getElementsByTagName('quantity')
      // tällä tavalla saa ulos tietyn tunnin suunnitellun kokonaistuotannon.
        console.log(temp[16].value) 
        setLastGeneration(Number(temp[index].value));
        importNeedCalculation(lastLoad,lastGeneration)
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
      <Text style={styles.title}>Sähkön kokonaiskulutus ja -tuotanto Suomessa kello {index} - {index + 1} (MWh/h)</Text>
      <Text style={styles.flex}>
        <Text style={styles.text}>Toteutunut kokonaiskulutus  </Text>
        <Text style={styles.notimportant}>{lastLoad}</Text>
      </Text>
      <Text style={styles.flex}>
        <Text style={styles.text}>Suunniteltu kokonaistuotanto  </Text>
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
