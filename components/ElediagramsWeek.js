import { ScrollView, Text, View, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';
import XMLParser from 'react-xml-parser';
import { LineChart } from "react-native-chart-kit";
import { ActivityIndicator } from 'react-native-paper';
import styles from '../style/style';
import Weeklist from './WeekList';

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
let sevenDaysAgoDay = (new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).getDate()
const sevenDaysAgoMonth = (new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).getMonth() + 1
const sevenDaysAgoYear = (new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).getFullYear()

if (sevenDaysAgoDay === 1) {
  sevenDaysAgoDay = '01'
}
if (sevenDaysAgoDay === 2) {
  sevenDaysAgoDay = '02'
}
if (sevenDaysAgoDay === 3) {
  sevenDaysAgoDay = '03'
}
if (sevenDaysAgoDay === 4) {
  sevenDaysAgoDay = '04'
}
if (sevenDaysAgoDay === 5) {
  sevenDaysAgoDay = '05'
}
if (sevenDaysAgoDay === 6) {
  sevenDaysAgoDay = '06'
}
if (sevenDaysAgoDay === 7) {
  sevenDaysAgoDay = '07'
}
if (sevenDaysAgoDay === 8) {
  sevenDaysAgoDay = '08'
}
if (sevenDaysAgoDay === 9) {
  sevenDaysAgoDay = '09'
}

if (sevenDaysAgoMonth === 1) {
  sevenDaysAgoMonth = '01'
}
if (sevenDaysAgoMonth === 2) {
  sevenDaysAgoMonth = '02'
}
if (sevenDaysAgoMonth === 3) {
  sevenDaysAgoMonth = '03'
}
if (sevenDaysAgoMonth === 4) {
  sevenDaysAgoMonth = '04'
}
if (sevenDaysAgoMonth === 5) {
  sevenDaysAgoMonth = '05'
}
if (sevenDaysAgoMonth === 6) {
  sevenDaysAgoMonth = '06'
}
if (sevenDaysAgoMonth === 7) {
  sevenDaysAgoMonth = '07'
}
if (sevenDaysAgoMonth === 8) {
  sevenDaysAgoMonth = '08'
}
if (sevenDaysAgoMonth === 9) {
  sevenDaysAgoMonth = '09'
}
let sixDaysAgoDay = (new Date(Date.now() - 6 * 24 * 60 * 60 * 1000)).getDate()
let sixDaysAgoMonth = (new Date(Date.now() - 6 * 24 * 60 * 60 * 1000)).getMonth() + 1
let fiveDaysAgoDay = (new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)).getDate()
let fiveDaysAgoMonth = (new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)).getMonth() + 1
let fourDaysAgoDay = (new Date(Date.now() - 4 * 24 * 60 * 60 * 1000)).getDate()
let fourDaysAgoMonth = (new Date(Date.now() - 4 * 24 * 60 * 60 * 1000)).getMonth() + 1
let threeDaysAgoDay = (new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)).getDate()
let threeDaysAgoMonth = (new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)).getMonth() + 1
let twDaysAgoDay = (new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)).getDate()
let twoDaysAgoMonth = (new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)).getMonth() + 1
let oneDaysAgoDay = (new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)).getDate()
let oneDaysAgoMonth = (new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)).getMonth() + 1

const StartTime = '0000'
const EndTime = '0000'
const start = 'periodStart=' + sevenDaysAgoYear + sevenDaysAgoMonth + sevenDaysAgoDay + StartTime + '&'
const end = 'periodEnd=' + year + month + day + EndTime

const URL = 'https://web-api.tp.entsoe.eu/api?securityToken=' + APIKEY + documentType + in_Domain + out_Domain
  + start + end
const time = new Date().getHours() // current time, tunti. Toimii myös seuraavan tunnin hinnanhakua varten

export default function ElediagramsWeek() {
  const [newPrices, setNewPrices] = useState([]); //tyhjä hinta-taulukko, johon päivän hinnat tallennetaan muutoksen jälkeen
  const [dates, setDates] = useState([]); //tyhjä hinta-taulukko, johon päivät tallennetaan muutoksen jälkeen
  const [avgs, setAvgs] = useState([]); //tyhjä taulukko vrkn keskiarvoille
  const [isLoading, setIsLoading] = useState(false); // Spinnerille

  function getAvgs(prices, dates) {
    const tempAvg = []
    let avg = 0

    for (let length = 0; length <= dates.length; length++) {
      for (let a = 0; a <= 23; a++) {
        let price = Number(prices[a].value)
        avg += price
      }
      prices.splice(0, 23);
      let dailyAvg = (avg / 24 / 10 * 1.10).toFixed(2) //alv 10% 1.12 alkaen
      avg = 0
      tempAvg.push(dailyAvg)
    }
    setAvgs(tempAvg)
  }

  function getPriceOfTheWeek(prices) {
    const tempArr = []
    for (let i = 0; i < (prices.length - 24); i++) { //jostain syystä prices-taulussa on yksi vuorukausi enemmän
      tempArr.push(Number(prices[i].value / 10 * 1.10).toFixed(2)) //alv 10% 1.12 alkaen
    }
    setNewPrices(tempArr)
  }

  function getDates(dates) {
    const tempArr2 = []
    for (let x = 0; x < (dates.length); x++) {
      //muutetaan päivämäärä suomalaiseen muotoon
      let y = (dates[x].value).substring(0, 4)
      let m = (dates[x].value).substring(5, 7)
      let d = (dates[x].value).substring(8, 10)
      let date = d + '.' + m + '.' + y
      tempArr2.push(date)
    }
    setDates(tempArr2)
  }

  const priceOfTheWeek = () => {
    if (newPrices.length) {
      return (
        <LineChart
        withVerticalLines={false}
        
          data={{
            labels: [sevenDaysAgoDay + '.' + sevenDaysAgoMonth, sixDaysAgoDay + '.' + sixDaysAgoMonth,
            fiveDaysAgoDay + '.' + fiveDaysAgoMonth, fourDaysAgoDay + '.' + fourDaysAgoMonth,
            threeDaysAgoDay + '.' + threeDaysAgoMonth, twDaysAgoDay + '.' + twoDaysAgoMonth,
            oneDaysAgoDay + '.' + oneDaysAgoMonth],
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
          withDots={false}
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
    color: (opacity = 1) => `rgba(255, 195, 0, ${opacity})`, //viivojen väri
  }

  useEffect(() => {
    setIsLoading(true);
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
        const temp2 = json.getElementsByTagName('start')
        //poistetaan taulukosta eka, turha startti
        temp2.splice(0, 2);
        getPriceOfTheWeek(temp)
        getDates(temp2)
        getAvgs(temp, temp2)
        setIsLoading(false);
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
        <Text style={styles.text}>Viimeisen viikon aikana </Text>
        <Text style={styles.flex2}>
        {isLoading ? <ActivityIndicator size="large" color="#ffffff"/> : priceOfTheWeek()}
        </Text>
        <Weeklist newPrices={newPrices} dates={dates} avgs={avgs} />
      </ScrollView>
    </View>
  )
}

