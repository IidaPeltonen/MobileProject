import { ScrollView, Text, View, Dimensions } from 'react-native';
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
const monthAgoDay = (new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)).getDate()
const monthAgoMonth = (new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)).getMonth() + 1
const monthAgoYear = (new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)).getFullYear()
const StartTime = '0000'
const EndTime = '0000'
const start = 'periodStart=' + monthAgoYear + monthAgoMonth + monthAgoDay + StartTime + '&'
const end = 'periodEnd=' + year + month + day + EndTime

const URL = 'https://web-api.tp.entsoe.eu/api?securityToken=' + APIKEY + documentType + in_Domain + out_Domain
  + start + end
const time = new Date().getHours() // current time, tunti. Toimii myös seuraavan tunnin hinnanhakua varten

export default function ElediagramsMonth() {
  const [newPrices, setNewPrices] = useState([]); //tyhjä hinta-taulukko, johon päivän hinnat tallennetaan muutoksen jälkeen

  function getpriceOfTheMonth(prices) {
    const tempArr = []
    for (let i = 0; i < (prices.length - 24); i++) { //jostain syystä prices-taulussa on yksi vuorukausi enemmän
      tempArr.push(Number(prices[i].value / 10 * 1.24).toFixed(2))
    }
    setNewPrices(tempArr)
  }

  const priceOfTheMonth = () => {
    if (newPrices.length) {
      return (
        <LineChart
          data={{
            labels: [monthAgoDay + '.' + monthAgoMonth, (monthAgoDay + 1) + '.' + monthAgoMonth,
            (monthAgoDay + 2) + '.' + monthAgoMonth, (monthAgoDay + 3) + '.' + monthAgoMonth,
            (monthAgoDay + 4) + '.' + monthAgoMonth, (monthAgoDay + 5) + '.' + monthAgoMonth,
            (monthAgoDay + 6) + '.' + monthAgoMonth, day + '.' + monthAgoMonth],
            //miten tähän saisi mäppäyksen, joka toisi
            //kaikki nuo päivämäärät tuolta taulukosta?
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
        setNewPrices([])
        getpriceOfTheMonth(temp)
        //seuraava hakee taulukon jokaiselle pistelle tarkan ajan,
        // ja hinnan
        //tää pitää siirtää omaan funktioon joka sit näyttää nuo,
        //kun pistettä klikkaa
        //console.log(temp2[0].value) //tällä saa ulos ekan pisteen pointsDaym ja kellonaika
        let pointsYear = (temp2[0].value).substring(0, 4)
        let pointsMonth = (temp2[0].value).substring(5, 7)
        let pointsDay = (temp2[0].value).substring(8, 10)
        let pointsHour = (temp2[0].value).substring(11, 16)
        let pointPrice = temp[0].value
        let pointTime = pointsDay + '.' + pointsMonth + '.' + pointsYear + ' ' + pointsHour
        /*         console.log('pointTime: ' + pointTime)
                console.log('pointPrice: ' + pointPrice) */
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <View style={styles.square}>
      <ScrollView>
      <View style={styles.titleposdia}>
        <Text style={styles.title}>Sähkön hintakehitys </Text>
        <Text style={styles.text}>viimeisen kuukauden aikana (KESKEN)</Text>
      </View> 
        {priceOfTheMonth()}
      </ScrollView>
    </View>
  )
}

