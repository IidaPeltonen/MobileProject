import { StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native';
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
const StartTime = '0000'
const EndTime = '0000'
const start = 'periodStart=' + year + month + day + StartTime + '&'
const end = 'periodEnd=' + year + month + (day + 1) + EndTime

const URL = 'https://web-api.tp.entsoe.eu/api?securityToken=' + APIKEY + documentType + in_Domain + out_Domain
  + start + end
const time = new Date().getHours() // current time, tunti. Toimii myös seuraavan tunnin hinnanhakua varten

export default function Elediagrams() {
  const [data, setData] = useState([])
  const [prices, setPrices] = useState([]); //hinta-taulukko
  const [newPrices, setNewPrices] = useState([]); //tyhjä hinta-taulukko, johon päivän hinnat tallennetaan muutoksen jälkeen


  function getPriceOfTheDay(prices) {
    setNewPrices([])
    for (let i = 0; i < 24; i++) {
      newPrices.push(Number(prices[i].value / 10 * 1.24).toFixed(2))
    }
    console.log('newPrices: ' + newPrices)
    return newPrices
  }
  
  const priceOfTheDay =
  {
    labels: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13",
      "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
    datasets: [
      {
        data: [
          0, 1, 22, 13, 4, 25, 6, 17, 8, 10, 0, 11, 24, 13, 4, 15, 26, 7, 18, 9, 0, 11, 24, 3, 22
          //newPrices
        ]
      }
    ]
  }

  const chartConfig = {
    backgroundColor: "purple",
    backgroundGradientFrom: "blue", 
    backgroundGradientTo: "pink",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, //viivojen väri
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, //labeleiden väri
    style: {
      borderRadius: 16,
    },
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
        //console.log(json.getElementsByTagName('price'));
        setPrices(json.getElementsByTagName('price'))
        setNewPrices([])
        getPriceOfTheDay(prices)
      })
      .catch(err => console.log(err));
  }, [])

  return (
      <View style={styles.priceOfTheDay}>
        <Text style={styles.head}>
          Sähkön hintakehitys
        </Text>
        <LineChart
          data={priceOfTheDay}
          width={Dimensions.get("window").width - 10} // from react-native
          height={220}
          //yAxisSuffix="snt/kWh"
          yAxisInterval={1} // optional, defaults to 1
          fromZero='true' //näyttää y-akselin nollasta asti
          //onDataPointClick	Function	Callback that takes {value, dataset, getColor}
          //tähän voisi kikkailla sellaisen toiminnon, jolla nappulaa painamalla saisi 
          //näkyviin tarkan ajan ja hinnan
          chartConfig={chartConfig}
          bezier
          style={{
            marginVertical: 8,
            marginRight: 10,
          }}
        />
      </View>
  )
}

