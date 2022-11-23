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
const day = new Date().getDate()
const StartTime = '0000'
const EndTime = '0000'
const start = 'periodStart=' + year + month + day + StartTime + '&'
const end = 'periodEnd=' + year + month + (day + 1) + EndTime

const URL = 'https://web-api.tp.entsoe.eu/api?securityToken=' + APIKEY + documentType + in_Domain + out_Domain
  + start + end
const time = new Date().getHours() // current time, tunti. Toimii myös seuraavan tunnin hinnanhakua varten

export default function ElediagramsDay() {
  const [newPrices, setNewPrices] = useState([]); //tyhjä hinta-taulukko, johon päivän hinnat tallennetaan muutoksen jälkeen
  const [times, setTimes] = useState([]); //tyhjä aika-taulukko, johon päivän hinnat tallennetaan muutoksen jälkeen

  function getPriceOfTheDay(prices, dates) {
    const tempArr = []
    for (let i = 0; i < 24; i++) {
      tempArr.push(Number(prices[i].value / 10 * 1.24).toFixed(2))
    }
    const tempDatesArr = []
    for (let x = 0; x < 24; x++) {
      tempDatesArr.push(Number(dates[x].value - 1).toFixed(2)) // jotta saadaan indeksistä kellonaika
    }
    setNewPrices(tempArr)
    setTimes(tempDatesArr)
  }

  const priceOfTheDay = () => {
    if (newPrices.length) {
      return (
        //JOUNI: tämä toimii
        <LineChart
          data={{
            labels: ["00","01","02","03","04","05","06","07","08","09","10","11","12",
                      "12","14","15","16","17","18","19","20","21","22","23"],
            datasets: [
              {
                data: newPrices.map(item => {
                  return parseInt(item)
                })
              }
            ]
          }}
         /* TÄMÄ EI TOIMI 
         data={{
            labels: [
              times.map(p => {
                return p
              })
            ],
            datasets: [
              {
                data: newPrices.map(item => {
                  return parseInt(item)
                })
              }
            ]
          }} */
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
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, //labeleiden väri,
    propsForDots: {
      strokeWidth: "1",
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
        temp2.splice(0, 1);
        const temp3 = json.getElementsByTagName('position')
        setNewPrices([])
        setTimes([])
        getPriceOfTheDay(temp, temp3)
        //seuraava hakee taulukon jokaiselle pistelle tarkan ajan,
        // ja hinnan
        //tää pitää siirtää omaan funktioon joka sit näyttää nuo,
        //kun pistettä klikkaa
        let pointsHour = (temp2[0].value).substring(11, 16)
        let pointPrice = temp[0].value
        //console.log('Aika ja hinta indeksissä 0: ' +pointsHour + ' ja ' + pointPrice)
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <View style={styles.square}>
      <ScrollView>
      <View style={styles.titleposdia}>
        <Text style={styles.title}>Sähkön hintakehitys </Text>
        <Text style={styles.text}>viimeisen vuorokauden aikana</Text>
      </View>
        {priceOfTheDay()}
        <DayList />
      </ScrollView>
    </View>
  )
}

