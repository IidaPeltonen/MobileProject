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
  console.log('täällä ollaan')
  console.log(new Date(y, m + 1, 0).getDate())
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
//urlin pätkät, jotka muuttuu vallinnan mukaan, annetaan oletuksena kuluvan kkn eka päivä
const start = 'periodStart=' + year + month + day + StartTime + '&'
const end = 'periodEnd=' + year + month + endDay + EndTime

const URL = 'https://web-api.tp.entsoe.eu/api?securityToken=' + APIKEY + documentType + in_Domain + out_Domain
  + start + end

export default function ElediagramsYear() {
  const [newPrices, setNewPrices] = useState([]); //tyhjä hinta-taulukko, johon päivän hinnat tallennetaan muutoksen jälkeen
  const [chosenTimeStart, setChosenTimeStart] = useState('00000')
  const [chosenTimeEnd, setChosenTimeEnd] = useState('00000')
  const [selected, setSelected] = useState(""); //valittu kuukausi listalla
  const [selectedMonth, setSelectedMonth] = useState(""); //valittu kuukausi numerona
  const [selectedYear, setSelectedYear] = useState(""); //valittu vuosi numerona
  const [selectedMonthLast, setSelectedMonthLast] = useState(""); //valittu vuosi numerona
  const [months, setMonths] = useState([]) //taulukko, johon haetaan valittavat kuukaudet

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
    //mikä on valittu
    console.log('selected: ' + selected)
    let y = Number(selected.substring(selected.length - 4)) //hakee kk-tekstin vuosiluvun
    let m = selected.substring(0, 3) //hakee kk-tekstin 3 ekaa merkkiä
    //loputon iffi tarkistamaan mikä kk on ja mitä se on numerona
    if (m === 'Tam') {
      monthNumber = 1
    }
    if (m === 'Hel') {
      monthNumber = 2
    }
    if (m === 'Maa') {
      monthNumber = 3
    }
    if (m === 'Huh') {
      monthNumber = 4
    }
    if (m === 'Tou') {
      monthNumber = 5
    }
    if (m === 'Kes') {
      monthNumber = 6
    }
    if (m === 'Hei') {
      monthNumber = 7
    }
    if (m === 'Elo') {
      monthNumber = 8
    }
    if (m === 'Syy') {
      monthNumber = 9
    }
    if (m === 'Lok') {
      monthNumber = 10
    }
    if (m === 'Mar') {
      monthNumber = 11
    }
    if (m === 'Jou') {
      monthNumber = 12
    }
  //nyt on tiedossa valittu kk-numero ja vuosi

  console.log('monthNumber: ' + monthNumber)
  console.log('year: ' + y)
  //nää pitää palauttaa ja sit kutsua lastDayta, vai voiko sen tehdä tässä?
  lastday(y, monthNumber)
  }

   //tää varmaan siirretään johonkin funktioon, joka tehdään vasta kun jokin kuukausi valitaan?
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
        //sitten pitää tarkistaa mikä kk on valittu
        checkTime(selected)
        //sitten kutsua lastDay-funktiota(y + m)
        //sitten pitäisi tehdä funktio joka hakee arvot
        //ja piirtää diagrammin
      })
      .catch(err => console.log(err));
  }, [])

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
      </ScrollView>
    </View>
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

