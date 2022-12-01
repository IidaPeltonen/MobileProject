import { ScrollView, Text, View, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';
import XMLParser from 'react-xml-parser';
import { LineChart } from "react-native-chart-kit";
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
const StartTime = '0000'
const EndTime = '0000'
const start = 'periodStart=' + sevenDaysAgoYear + sevenDaysAgoMonth + sevenDaysAgoDay + StartTime + '&'
const end = 'periodEnd=' + year + month + day + EndTime

const URL = 'https://web-api.tp.entsoe.eu/api?securityToken=' + APIKEY + documentType + in_Domain + out_Domain
  + start + end
const time = new Date().getHours() // current time, tunti. Toimii myös seuraavan tunnin hinnanhakua varten

export default function ElediagramsWeek() {
  const [newPrices, setNewPrices] = useState([]); //tyhjä hinta-taulukko, johon päivän hinnat tallennetaan muutoksen jälkeen
  const [dates, setDates] = useState([]); //tyhjä hinta-taulukko, johon päivän hinnat tallennetaan muutoksen jälkeen

  function getPriceOfTheWeek(prices) {
    const tempArr = []
    for (let i = 0; i < (prices.length - 24); i++) { //jostain syystä prices-taulussa on yksi vuorukausi enemmän
      tempArr.push(Number(prices[i].value / 10 * 1.24).toFixed(2))
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
          data={{
            labels: [/*tähän kohtaa pilkun laittamalla rivi siirtyy oikealle, mutta siirtyy paaaaaljoon
            tää on paskamainen muotoiltava, mutta katsotaan mitä keksitään*/sevenDaysAgoDay + '.' + sevenDaysAgoMonth, (sevenDaysAgoDay + 1) + '.' + sevenDaysAgoMonth,
              (sevenDaysAgoDay + 2) + '.' + sevenDaysAgoMonth, (sevenDaysAgoDay + 3) + '.' + sevenDaysAgoMonth,
              (sevenDaysAgoDay + 4) + '.' + sevenDaysAgoMonth, (sevenDaysAgoDay + 5) + '.' + sevenDaysAgoMonth,
              (sevenDaysAgoDay + 6) + '.' + sevenDaysAgoMonth],
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
    backgroundColor: "purple",
    backgroundGradientFrom: "blue",
    backgroundGradientTo: "pink",
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, //viivojen väri
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, //labeleiden väri
    propsForDots: {
      strokeWidth: "1", //palleroiden paksuus
      stroke: "purple" //palleroiden väri,
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
        const temp = json.getElementsByTagName('price')
        const temp2 = json.getElementsByTagName('start')
        //poistetaan taulukosta eka, turha startti
        temp2.splice(0, 2);
        getPriceOfTheWeek(temp)
        getDates(temp2)
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <View style={styles.square}>
      <ScrollView>
        <View style={styles.titleposdia}>
          <Text style={styles.title}>Sähkön hintakehitys </Text>
          <Text style={styles.text}>viimeisen viikon aikana </Text>
        </View>
        {priceOfTheWeek()}
        <Weeklist newPrices={newPrices} dates={dates} />
      </ScrollView>
    </View>
  )
}

