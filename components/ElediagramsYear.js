import { StyleSheet, Text, View, Dimensions} from 'react-native';
import { useState, useEffect } from 'react';
import XMLParser from 'react-xml-parser';
import { LineChart } from "react-native-chart-kit";
import styles from '../style/style';

const APIKEY = '4d24ca50-7859-4d0d-97c2-de16d61007af';
const documentType = '&documentType=A44&' //mitä tietoaineistoa luetaan
const in_Domain = 'in_Domain=10YFI-1--------U&' // maakoodi
const out_Domain = 'out_Domain=10YFI-1--------U&'
const year = new Date().getFullYear()
const month = new Date().getMonth() + 1
const day = new Date().getDate()
const sevenDaysAgo= (new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).getDate()
const StartTime = '0000'
const EndTime = '0000'
const start = 'periodStart=' + year + month + sevenDaysAgo + StartTime + '&'
const end = 'periodEnd=' + year + month + day + EndTime

const URL = 'https://web-api.tp.entsoe.eu/api?securityToken=' + APIKEY + documentType + in_Domain + out_Domain
  + start + end
const time = new Date().getHours() // current time, tunti. Toimii myös seuraavan tunnin hinnanhakua varten

export default function ElediagramsYear() {
  const [prices, setPrices] = useState([]); //hinta-taulukko
  const [newPrices, setNewPrices] = useState([]); //tyhjä hinta-taulukko, johon päivän hinnat tallennetaan muutoksen jälkeen

  function getPriceOfTheYear(prices) {
    const tempArr = []
    for (let i = 0; i < (prices.length-24); i++) { //jostain syystä prices-taulussa on yksi vuorukausi enemmän
      tempArr.push(Number(prices[i].value / 10 * 1.24).toFixed(2))
    }
    setNewPrices(tempArr)
  }

  const priceOfTheYear = () => {
    if (newPrices.length) {
      return (
        <LineChart
          data={{
            labels: [sevenDaysAgo+'.'+month, (sevenDaysAgo+1)+'.'+month,  (sevenDaysAgo+2)+'.'+month, 
                (sevenDaysAgo+3)+'.'+month, (sevenDaysAgo+4)+'.'+month, (sevenDaysAgo+5)+'.'+month, 
                (sevenDaysAgo+6)+'.'+month, day+'.'+month], 
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
            paddingRight:35,
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
        setPrices(json.getElementsByTagName('price'))
        const temp = json.getElementsByTagName('price')
        setNewPrices([])
        getPriceOfTheYear(temp)
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <View style={styles.priceOfTheYear}>
      <Text style={styles.title}>Sähkön hintakehitys</Text>
      <Text style={styles.info}>viimeisen vuoden aikana</Text>
      <Text style={styles.info}>EI VIELÄ TEHTY</Text>
      {priceOfTheYear()}
    </View>
  )
}

