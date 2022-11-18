import React from 'react'
import { Text,View } from 'react-native'
import { useState, useEffect } from 'react';
import XMLParser from 'react-xml-parser';
import styles from "../style/style"

// tällä saa Suomen toteutuneen kokonaiskulutuksen tuntitasolla
const URL = 'https://web-api.tp.entsoe.eu/api?securityToken=4d24ca50-7859-4d0d-97c2-de16d61007af&documentType=A65&processType=A16&outBiddingZone_Domain=10YFI-1--------U&periodStart=202211180000&periodEnd=202211182300'
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

      // tällä tavalla saa ulos tietyn tunnin kokonaiskulutuksen.
        console.log(loads[16].value) 
        setLastLoad(Number(loads[16].value));
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
        console.log(generations[16].value) 
        setLastGeneration(Number(generations[16].value));
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <View>
      <Text>Kokonaiskulutus Suomessa edellisen tunnin aikana (MWh/h):  {lastLoad}</Text>
      <Text>Suunniteltu kokonaistuotanto Suomessa edellisen tunnin aikana (MWh/h):  {lastGeneration}</Text>
    </View>
  )
}
