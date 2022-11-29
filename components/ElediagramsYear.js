import { ScrollView, Text, View, Dimensions, TextComponent, SafeAreaView, TouchableOpacity } from 'react-native';
import { useState, useEffect, useCallback } from 'react';
import XMLParser from 'react-xml-parser';
import { LineChart } from "react-native-chart-kit";
import styles from '../style/style';
import { SelectList } from 'react-native-dropdown-select-list'
//import MonthList from './MonthList';

const APIKEY = '4d24ca50-7859-4d0d-97c2-de16d61007af';
const documentType = '&documentType=A44&' //mitä tietoaineistoa luetaan
const in_Domain = 'in_Domain=10YFI-1--------U&' // maakoodi
const out_Domain = 'out_Domain=10YFI-1--------U&'
const StartTime = '0000' //nämä saa olla aina 00, koska kellonajalla ei ole merkitystä
const EndTime = '0000' //nämä saa olla aina 00, koska kellonajalla ei ole merkitystä
const Firstday = '01'

export default function ElediagramsYear() {
  const [newPrices, setNewPrices] = useState([]); //tyhjä hinta-taulukko, johon päivän hinnat tallennetaan muutoksen jälkeen
  const [times, setTimes] = useState([]); //tyhjä aika-taulukko, johon päivän hinnat tallennetaan muutoksen jälkeen
  const [selected, setSelected] = useState(""); //valittu kuukausi listalla
  const [months, setMonths] = useState([]) //taulukko, johon haetaan valittavat kuukaudet
  
  function getpriceOfTheMonth(prices, dates) {
    const tempArr = []
    for (let i = 0; i < (prices.length - 24); i++) { //jostain syystä prices-taulussa on yksi vuorukausi enemmän
      tempArr.push(Number(prices[i].value / 10 * 1.24).toFixed(2))
    }
    const tempDatesArr = []
    for (let x = 0; x < dates.length; x++) {
      //muutetaan päivämäärä suomalaiseen muotoon
      let y = (dates[x].value).substring(0, 4)
      let m = (dates[x].value).substring(5, 7)
      let d = (dates[x].value).substring(8, 10)
      let date = d + '.' + m + '.'
      tempDatesArr.push(date)
    }
    setNewPrices(tempArr)
    setTimes(tempDatesArr)
  }

  const priceOfTheMonth = () => {
    console.log(newPrices.length)
    if (newPrices.length) {
      return (
        <LineChart
          data={{
            labels: [times[0], times[4], times[9], times[14], times[19], times[24], times[29]],
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

  //tämä rakentaa vuoden kuukauden nimillä, aloittaen edellisestä kuukaudesta
  function getYear() {
    const tempArr = []
    let monthName = new Array("Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu",
      "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu");
    let d = new Date();
    d.setDate(1);
    for (let i = 0; i <= 12; i++) {
      tempArr.push(monthName[d.getMonth()] + ' ' + d.getFullYear())
      d.setMonth(d.getMonth() - 1);
    }
    setMonths(tempArr)
  }

   //tämä tuottaa getArr-antaman taulukon tulokset dropdown-valikon "otsikoiksi"
  const data = [
    { key: '1', value: months[1] },
    { key: '2', value: months[2] },
    { key: '3', value: months[3] },
    { key: '4', value: months[4], },
    { key: '5', value: months[5] },
    { key: '6', value: months[6] },
    { key: '7', value: months[7] },
    { key: '8', value: months[8] },
    { key: '9', value: months[9] },
    { key: '10', value: months[10] },
    { key: '11', value: months[11] },
    { key: '12', value: months[12] }, 

  ]
  function checkTime(selected) {
    //muuttuja kk-numerolle
    let monthNumber = 0
    let monthsLast = 0
    let y = Number(selected.substring(selected.length - 4)) //hakee kk-tekstin vuosiluvun
    let m = selected.substring(0, 3) //hakee kk-tekstin 3 ekaa merkkiä
    //loputon iffi tarkistamaan mikä kk on ja mitä se on numerona
    if (m === 'Tam') {
      monthNumber = '01'
      monthsLast = Number(31)
    }
    if (m === 'Hel') {
      monthNumber = '02'
      monthsLast = Number(28)
    }
    if (m === 'Maa') {
      monthNumber = '03'
      monthsLast = Number(31)
    }
    if (m === 'Huh') {
      monthNumber = '04'
      monthsLast = Number(30)
    }
    if (m === 'Tou') {
      monthNumber = '05'
      monthsLast = Number(31)
    }
    if (m === 'Kes') {
      monthNumber = '06'
      monthsLast = Number(30)
    }
    if (m === 'Hei') {
      monthNumber = '07'
      monthsLast = Number(31)
    }
    if (m === 'Elo') {
      monthNumber = '08'
      monthsLast = Number(31)
    }
    if (m === 'Syy') {
      monthNumber = '09'
      monthsLast = Number(30)
    }
    if (m === 'Lok') {
      monthNumber = '10'
      monthsLast = Number(31)
    }
    if (m === 'Mar') {
      monthNumber = '11'
      monthsLast = Number(30)
    }
    if (m === 'Jou') {
      monthNumber = '12'
      monthsLast = Number(31)
    }

  //urlin pätkät, jotka muuttuu vallinnan mukaan, annetaan oletuksena kuluvan kkn eka päivä
  let start = 'periodStart=' + y + monthNumber + Firstday + StartTime + '&'
  let end = 'periodEnd=' + y + monthNumber + monthsLast + EndTime

let URL = 'https://web-api.tp.entsoe.eu/api?securityToken=' + APIKEY + documentType + in_Domain 
+ out_Domain  + '' + start + end

     useEffect(() => {
      fetch(URL, {
        headers: {
          'method': 'GET',
          'Content-Type': 'application/xml',
        },
      })
        .then(res => res.text())
        .then(data => {
          getYear()
          let json = new XMLParser().parseFromString(data);
          const temp = json.getElementsByTagName('price')
          const temp2 = json.getElementsByTagName('start')
          //poistetaan taulukosta eka, turha startti
          temp2.splice(0, 2);
          //setNewPrices([])
          getpriceOfTheMonth(temp, temp2)
        })
        .catch(err => console.log(err));
    }, [])
  }

  return (
    <View style={styles.square}>
      <ScrollView>
      <View style={styles.titleposdia}>
        <Text style={styles.title}>Sähkön hintakehitys </Text>
        <Text style={styles.text}>Valitse valikosta kuukausi, jonka arvoja haluat tarkastella (KESKEN)</Text>
      </View>
      <SelectList
      setSelected={(val) => setSelected(val)} 
      onSelect={checkTime(selected)} 
      data={data}
      save="value"
    />
    {priceOfTheMonth()}
      </ScrollView>
    </View>
  )

};
