import { ScrollView, Text, View, Dimensions, TextComponent } from 'react-native';
import { useState, useEffect } from 'react';
import XMLParser from 'react-xml-parser';
import { LineChart } from "react-native-chart-kit";
import styles from '../style/style';

const APIKEY = '4d24ca50-7859-4d0d-97c2-de16d61007af';
const documentType = '&documentType=A44&' //mitä tietoaineistoa luetaan
const in_Domain = 'in_Domain=10YFI-1--------U&' // maakoodi
const out_Domain = 'out_Domain=10YFI-1--------U&'
const now = new Date()
const year = new Date().getFullYear()
const month = new Date().getMonth() + 1
const day = new Date().getDate()
const yearAgo = (year - 1) + '' + month + '' + day + '0000'
const StartTime = '0000'
const EndTime = '0000'
const start = 'periodStart=' + yearAgo + '&'
const end = 'periodEnd=' + year + month + day + EndTime

const URL = 'https://web-api.tp.entsoe.eu/api?securityToken=' + APIKEY + documentType + in_Domain + out_Domain
  + start + end
const time = new Date().getHours() // current time, tunti. Toimii myös seuraavan tunnin hinnanhakua varten

export default function ElediagramsYear() {
  const [newPrices, setNewPrices] = useState([]); //tyhjä hinta-taulukko, johon päivän hinnat tallennetaan muutoksen jälkeen
  const [averagePerMonth, setAvgMonth] = useState([]); //tyhjä hinta-taulukko, johon päivän hinnat tallennetaan muutoksen jälkeen

/*   function countAverage(prices) {
    const tempArr = []
    let multiply = 0
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 ||
      month === 10 || month === 12) { multiply = 744 }
    else if (month === 2) { multiply = 672 }
    else { multiply = 720 }
    let avg = 0
    let f = 0
    while (f < 12) {
      for (let i = 0; i < multiply; i++) {
        let price = Number(prices[i].value)
        avg += price
      }
      avg = (avg / multiply / 10 * 1.24).toFixed(2)
      f++
      tempArr.push(Number(avg))
    }
    console.log('tempArr: ' + tempArr)
    averagePerMonth.push(tempArr)
    console.log('avgPerM: ' + averagePerMonth)
  }

  function getPriceOfTheYear(prices) {
    const tempArr2 = []
    for (let i = 0; i < (prices.length - 24); i++) { //jostain syystä prices-taulussa on yksi vuorukausi enemmän
      tempArr2.push(Number(prices[i].value / 10 * 1.24).toFixed(2))
    }
    setNewPrices(tempArr2)
  }

  const priceOfTheYear = () => {
    if (newPrices.length) {
      return (
        <LineChart
          data={{
            labels: [month, (month + 1),],
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
          //onDataPointClick	Function	Callback that takes {value, dataset, getColor}
          //tähän voisi kikkailla sellaisen toiminnon, jolla nappulaa painamalla saisi 
          //näkyviin tarkan ajan ja hinnan
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
        setNewPrices([])
        getPriceOfTheYear(temp)
        //console.log('vuosi sitten'+ yearAgo)
        //console.log('hinnat: ' + newPrices)
        countAverage(temp)
      })
      .catch(err => console.log(err));
  }, []) */

  return (
    <View style={styles.square}>
      <ScrollView>
        <Text style={styles.title}>Sähkön hintakehitys </Text>
        <Text style={styles.text}>viimeisen vuorokauden aikana (EI VIELÄ TEHTY)</Text>
        {/* {priceOfTheYear()} */}
      </ScrollView>
    </View>
  )
}

