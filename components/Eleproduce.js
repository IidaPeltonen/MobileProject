import React from 'react'
import { Text,View, ScrollView } from 'react-native'
import { useState, useEffect } from 'react';
import XMLParser from 'react-xml-parser';
import styles from "../style/style"

const APIKEY = '4d24ca50-7859-4d0d-97c2-de16d61007af';
const documentType = '&documentType=A65' //mitä tietoaineistoa luetaan, "system total load"
const outBiddingZone_Domain = '&outBiddingZone_Domain=10YFI-1--------U' // maakoodi, "FI"
const processType = '&processType=A16' // minkä tyyppistä kulutustietoa haetaan, "realised"
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
const URL2 = 'https://web-api.tp.entsoe.eu/api?securityToken=4d24ca50-7859-4d0d-97c2-de16d61007af&documentType=A71&processType=A01&in_Domain=10YFI-1--------U&periodStart=202211180000&periodEnd=202211182300'

export default function Footer() {

  const [loads, setLoads] = useState([]);
  const [lastLoad, setLastLoad] = useState('');
  const [generations, setGenerations] = useState([]);
  const [lastGeneration, setLastGeneration] = useState('');

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
        setLastLoad(Number(loads[index].value));

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

      // tällä tavalla saa ulos tietyn tunnin suunnitellun kokonaistuotannon.
      //  console.log(generations[16].value) 
        setLastGeneration(Number(generations[16].value));
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <View>
      <ScrollView>
        <View style={styles.square}>
      <Text style = {styles.title}>Sähkön kokonaiskulutus ja -tuotanto</Text>
      <Text style={styles.text}>Kokonaiskulutus Suomessa kello {index} - {index + 1} (MWh/h):</Text>
      <Text style={styles.important}>{lastLoad}</Text>
      <Text style={styles.text}>Suunniteltu kokonaistuotanto Suomessa edellisen tunnin aikana (MWh/h): </Text>
      <Text style={styles.important}>{lastGeneration}</Text>
      <Text></Text>
        </View>
      </ScrollView>
    </View>
  )
}
