import { ScrollView, Text, View, Dimensions, TextComponent, SafeAreaView, TouchableOpacity } from 'react-native';
import { useState, useEffect, useCallback } from 'react';
import XMLParser from 'react-xml-parser';
import { LineChart } from "react-native-chart-kit";
import styles from '../style/style';
import { SelectList } from 'react-native-dropdown-select-list'
import moment from 'react-moment';

const APIKEY = '4d24ca50-7859-4d0d-97c2-de16d61007af';
const documentType = '&documentType=A44&' //mitä tietoaineistoa luetaan
const in_Domain = 'in_Domain=10YFI-1--------U&' // maakoodi
const out_Domain = 'out_Domain=10YFI-1--------U&'

//fuknktio kuukauden viimeisen päivän hakuun
let lastday = function (y, m) {
  return new Date(y, m + 1, 0).getDate();
}

// tarvitaan:
//tämä vuosi
const year = new Date().getFullYear()
//tämä kuukausi
const month = new Date().getMonth() + 1
//alkupäivä voi aina olla kuukauden eka
const day = '01'
//loppupäiväksi haetaan kunkin kuukauden vika
const endDay = lastday(year, (month - 1));
//kellonajat
const StartTime = '0000' //nämä saa olla aina 00, koska kellonajalla ei ole merkitystä
const EndTime = '0000' //nämä saa olla aina 00, koska kellonajalla ei ole merkitystä
/* console.log('year: ' + year)
console.log('month: ' + month)
console.log('startDay: ' + day)
console.log('endDay: ' + endDay) */
//urlin pätkät, jotka muuttuu vallinnan mukaan, annetaan oletuksena kuluvan kkn eka päivä
const start = 'periodStart=' + year + month + day + StartTime + '&'
const end = 'periodEnd=' + year + month + endDay + EndTime
/* console.log(start)
console.log(end) */

const URL = 'https://web-api.tp.entsoe.eu/api?securityToken=' + APIKEY + documentType + in_Domain + out_Domain
  + start + end
const time = new Date().getHours() // current time, tunti. Toimii myös seuraavan tunnin hinnanhakua varten

export default function ElediagramsYear() {
  const [newPrices, setNewPrices] = useState([]); //tyhjä hinta-taulukko, johon päivän hinnat tallennetaan muutoksen jälkeen
  const [chosenTimeStart, setChosenTimeStart] = useState('00000')
  const [chosenTimeEnd, setChosenTimeEnd] = useState('00000')
  const [selected, setSelected] = useState(""); //valittu kuukausi
  const [months, setMonths] = useState([]) //taulukko, johon haetaan valittavat kuukaudet


  //tämä rakentaa vuoden kuukauden nimillä, aloittaen edellisestä kuukaudesta
  function getYear() {
    const tempArr = []
    let monthName = new Array("Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu",
      "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu");
    let d = new Date();
    d.setDate(1);
    for (let i = 0; i <= 11; i++) {
      //console.log(monthName[d.getMonth()-1] + ' ' + d.getFullYear());
      tempArr.push(monthName[d.getMonth()-1] + ' ' + d.getFullYear())
      d.setMonth(d.getMonth() - 1);
    }
    console.log(tempArr[2]) // pitäisi marraskuussa käyttäessä olla elokuu
    console.log(tempArr[0]) // pitäisi marraskuussa käyttäessä olla lokakuu
    setMonths(tempArr)
  }

  const data = [
/*     { key: '1', value: 'Mobiles' },
    { key: '2', value: 'Appliances' },
    { key: '3', value: 'Cameras' },
    { key: '4', value: 'Computers', },
    { key: '5', value: 'Vegetables' },
    { key: '6', value: 'Diary Products' },
    { key: '7', value: 'Drinks' },
    { key: '8', value: 'Drinks' },
    { key: '9', value: 'Drinks' },
    { key: '10', value: 'Drinks' },
    { key: '11', value: 'Drinks' },
    { key: '12', value: 'Drinks' }, */
    months.map(item => {
      return item
    })
  ]

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
        getYear()
        //console.log('months: ' + months[1])
        //findMonths()
      })
      .catch(err => console.log(err));
  }, [])


  return (
    <SelectList
      setSelected={(val) => setSelected(val)}
      data={data}
      save="value"
    />
  )

};

/* 
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
  }, []) 

  return (
    <View style={styles.square}>
      <ScrollView>
      <View style={styles.titleposdia}>
        <Text style={styles.title}>Sähkön hintakehitys </Text>
        <Text style={styles.text}>viimeisen vuorokauden aikana (EI VIELÄ TEHTY)</Text>

        
      </View>
         {priceOfTheYear()} 
      </ScrollView>
    </View>
  )
}  */

