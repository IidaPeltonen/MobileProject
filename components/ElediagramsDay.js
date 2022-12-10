import { ScrollView, Text, View, Dimensions } from 'react-native';
import { React, useState, useEffect } from 'react';
import XMLParser from 'react-xml-parser';
import { LineChart } from "react-native-chart-kit";
import styles from '../style/style';
import DayList from './DayList';

const APIKEY = '4d24ca50-7859-4d0d-97c2-de16d61007af';
const documentType = '&documentType=A44&' //mitä tietoaineistoa luetaan
const in_Domain = 'in_Domain=10YFI-1--------U&' // maakoodi
const out_Domain = 'out_Domain=10YFI-1--------U&'
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
const nextDayMonth = new Date(new Date().getTime() + (24 * 60 * 60 * 1000)).getMonth() + 1;
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

export default function ElediagramsDay() {
  const [newPrices, setNewPrices] = useState([]); //tyhjä hinta-taulukko, johon päivän hinnat tallennetaan muutoksen jälkeen
  const [dates, setDates] = useState(day + '.' + month + '.' + year); //muuttuja päivämäärän tallennukseen
  const [avgs, setAvgs] = useState([]); //tyhjä taulukko vrkn keskiarvoille

  function getAvgs(prices) {
    const tempAvg = []
    let avg = 0

    for (let length = 0; length <= 1; length++) {
      for (let a = 0; a <= 23; a++) {
        let price = Number(prices[a].value)
        avg += price
      }
      prices.splice(0,24)
      let dailyAvg = (avg / 24 / 10 * 1.10).toFixed(2) //alv 10% 1.12 alkaen
      tempAvg.push(dailyAvg)
    }
    setAvgs(tempAvg)
  }

  function getPriceOfTheDay(prices) {
    setDates(day + '.' + month + '.' + year)
    const tempArr = []
    tempArr.push(Number(prices[0].value / 10 * 1.10).toFixed(2) -1) // tää on silkka huijaus,
    //kannasta ei saa tällä meidän nykyisellä osoitteella hintaa eiliseltä 23-00
    for (let i = 0; i < 24; i++) {
      tempArr.push(Number(prices[i].value / 10 * 1.10).toFixed(2)) //alv 10% 1.12 alkaen
    console.log(tempArr[0])
    }

    setNewPrices(tempArr)
  }

  const priceOfTheDay = () => {
    if (newPrices.length) {
      return (
        <LineChart
          data={{
            labels: ["23", "01", "03", "05", "07", "09", "11", "13", "15", "17", "19", "21", "23"],
            datasets: [
              {
                data: newPrices.map(item => {
                  return parseInt(item)
                })
              }
            ]
          }}
          width={Dimensions.get("window").width - 10} // from react-native
          height={220}
          yAxisInterval={1} // optional, defaults to 1
          fromZero='true' //näyttää y-akselin nollasta asti
          chartConfig={chartConfig}
          bezier
          style={{
            paddingRight: 35,
            borderRadius: 16
          }}

        />
      )
    }
  }

  const chartConfig = {
    backgroundColor: "black",
    backgroundGradientFrom: "#171717",
    backgroundGradientTo: "#5c5b5b",
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 213, 0, ${opacity})`, //viivojen väri
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
        getPriceOfTheDay(temp)
        getAvgs(temp, dates)
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <View style={styles.square}>
      <ScrollView>
        <View style={styles.titleposdia}>
          <Text style={styles.title}>Sähkön hintakehitys </Text>
          <Text style={styles.lowkey}>(snt/kWh,sis. Alv 10%)</Text>
        </View>
        
        <Text style={styles.text}>viimeisen vuorokauden aikana</Text>
        <Text style={styles.flex2}>
        {priceOfTheDay()}
        </Text>
        <DayList newPrices={newPrices} dates={dates} avgs={avgs} />
        
      </ScrollView>
    </View>
  )
}

