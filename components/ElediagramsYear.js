import { ScrollView, Text, View, Dimensions, } from 'react-native';
import { useState, useEffect, useCallback } from 'react';
import XMLParser from 'react-xml-parser';
import { LineChart } from "react-native-chart-kit";
import { ActivityIndicator } from 'react-native-paper';
import styles from '../style/style';
import { SelectList } from 'react-native-dropdown-select-list'
import YearList from './YearList'

const APIKEY = '4d24ca50-7859-4d0d-97c2-de16d61007af';
const documentType = '&documentType=A44&' //mitä tietoaineistoa luetaan
const in_Domain = 'in_Domain=10YFI-1--------U&' // maakoodi
const out_Domain = 'out_Domain=10YFI-1--------U&'
const StartTime = '0000' //nämä saa olla aina 00, koska kellonajalla ei ole merkitystä
const EndTime = '0000' //nämä saa olla aina 00, koska kellonajalla ei ole merkitystä
const Firstday = '01'

export default function ElediagramsYear() {
  const [newPrices, setNewPrices] = useState([]); //tyhjä hinta-taulukko, johon päivän hinnat tallennetaan muutoksen jälkeen
  const [times, setTimes] = useState([]); //tyhjä aika-taulukko, johon päivämäärät tallennetaan muutoksen jälkeen
  const [timesArr, setTimesArr] = useState([]); //tyhjä aika-taulukko, johon päivämäärät tallennetaan vuosiluvun kanssa
  const [selected, setSelected] = useState(""); //valittu kuukausi listalla
  const [months, setMonths] = useState([]) //taulukko, johon haetaan valittavat kuukaudet
  const [isSelected, setIsSelected] = useState(false);
  const [avgs, setAvgs] = useState([]); //tyhjä taulukko päiväkeskiarvoille
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

  const chartConfig = {
    backgroundColor: "black",
    backgroundGradientFrom: "#171717",
    backgroundGradientTo: "#5c5b5b",
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 195, 0, ${opacity})`, //viivojen väri
  }

  useEffect(() => {
    setIsLoading(true);
    getYear()
  }, [])

  function checkTime(selected) {
    setIsSelected(true)
  /*   var monthNumber = 0
    var monthsLast = 0 */
    var nxtMonth = 0
    var nxtMontYear = 0
    var y = Number(selected.substring(selected.length - 4)) //hakee kk-tekstin vuosiluvun
    var m = selected.substring(0, 3) //hakee kk-tekstin 3 ekaa merkkiä
    //loputon iffi tarkistamaan mikä kk on ja mitä se on numerona
    if (m === 'Tam') {
      monthNumber = '01'
      monthsLast = Number(31)
      nxtMonth = '02'
      nxtMontYear = y
    }
    if (m === 'Hel') {
      monthNumber = '02'
      monthsLast = Number(28)
      nxtMonth = '03'
      nxtMontYear = y
    }
    if (m === 'Maa') {
      monthNumber = '03'
      monthsLast = Number(31)
      nxtMonth = '04'      
      nxtMontYear = y
    }
    if (m === 'Huh') {
      monthNumber = '04'
      monthsLast = Number(30)
      nxtMonth = '05'
      nxtMontYear = y
    }
    if (m === 'Tou') {
      monthNumber = '05'
      monthsLast = Number(31)
      nxtMonth =  '06'
      nxtMontYear = y
    }
    if (m === 'Kes') {
      monthNumber = '06'
      monthsLast = Number(30)
      nxtMonth = '07'
      nxtMontYear = y
    }
    if (m === 'Hei') {
      monthNumber = '07'
      monthsLast = Number(31)
      nxtMonth = '08'
      nxtMontYear = y
    }
    if (m === 'Elo') {
      monthNumber = '08'
      monthsLast = Number(31)
      nxtMonth = '09'
      nxtMontYear = y
    }
    if (m === 'Syy') {
      monthNumber = '09'
      monthsLast = Number(30)
      nxtMonth = '10'
      nxtMontYear = y
    }
    if (m === 'Lok') {
      monthNumber = '10'
      monthsLast = Number(31)
      nxtMonth = '11'
      nxtMontYear = y
    }
    if (m === 'Mar') {
      monthNumber = '11'
      monthsLast = Number(30)
      nxtMonth = '12'
      nxtMontYear = y
    }
    if (m === 'Jou') {
      monthNumber = '12'
      monthsLast = Number(31)
      nxtMonth = '01'
      nxtMontYear = Number(y + 1)
    }
    getData(monthNumber, monthsLast, y, nxtMontYear, nxtMonth)
  }

  function getData(monthNumber, monthsLast, y,nxtMontYear, nxtMonth) {
    let start = 'periodStart=' + y + monthNumber + Firstday + StartTime + '&'
    let end = 'periodEnd=' + nxtMontYear + nxtMonth +  Firstday + EndTime

    const tempURL = 'https://web-api.tp.entsoe.eu/api?securityToken=' + APIKEY + documentType + in_Domain
      + out_Domain + '' + start + end
    fetch(tempURL, {
      headers: {
        'method': 'GET',
        'Content-Type': 'application/xml',
      },
    })

      .then(res => res.text())
      .then(data => {
        let json = new XMLParser().parseFromString(data);
        const prices = json.getElementsByTagName('price')
        const dates = json.getElementsByTagName('start')
        dates.splice(0, 2)
        getpriceOfTheMonth(prices, dates)
        getAvgs(prices, dates)
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }

  function getpriceOfTheMonth(prices, dates) {
    const tempArr = []
    for (let i = 0; i < (prices.length); i++) { //jostain syystä prices-taulussa on yksi vuorukausi enemmän
      tempArr.push(Number(prices[i].value / 10 * 1.10).toFixed(2)) //alv 10% 1.12 alkaen
    }
    const tempDatesArr = [] // labelia varten
    const tempDatesArr2 = [] // alasvetovalikkoa varten
    for (let x = 0; x < dates.length; x++) {
      //muutetaan päivämäärä suomalaiseen muotoon
      let y = (dates[x].value).substring(0, 4)
      let m = (dates[x].value).substring(5, 7)
      let d = (dates[x].value).substring(8, 10)
      let date = d + '.' + m + '.'
      let date2 = d + '.' + m + '.' + y //alasvetovalikkoa varten vuosiluvulinen versio
      tempDatesArr.push(date)
      tempDatesArr2.push(date2)
    }
    setNewPrices(tempArr)
    setTimes(tempDatesArr)
    setTimesArr(tempDatesArr2)
  }

  const priceOfTheMonth = () => {
    let lastIndex = times.length - 1
    if (newPrices.length) {
      return (
        <LineChart
        withVerticalLines={false}
          data={{
            labels: [times[0], times[4], times[9], times[14], times[19], times[24], times[lastIndex]],
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
          yAxisInterval={1} // optional, defaults to 1a
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

  //jos kk on valittu
  if (isSelected === true) {
    return (
      <View style={styles.square}>
        <ScrollView>
          <View style={styles.titleposdia}>
            <Text style={styles.title}>Sähkön hintakehitys </Text>
            <Text style={styles.lowkey}>(snt/kWh,sis. Alv 10%)</Text>
          </View>
          <Text style={styles.text}>Valitse kuukausi, jonka hintoja haluat tarkastella</Text>
          <SelectList
            boxStyles={{backgroundColor: '#5F5F5F'}}
            inputStyles={{fontSize: 15, color: 'white'}}
            dropdownStyles={{backgroundColor: '#757575'}}
            dropdownTextStyles= {{color: 'white'}}
            setSelected={(val) => setSelected(val)}
            onSelect={() => checkTime(selected)}
            data={data}
            save="value"
            placeholder='Valitse kuukausi'
          />
          <Text style={styles.flex2}>
          {isLoading ? <ActivityIndicator size="large" color="#ffffff" /> : priceOfTheMonth()}
          </Text>
          <YearList newPrices={newPrices} dates={timesArr} avgs={avgs} />
        </ScrollView>
      </View>
    )
  }
  //jos kuukautta ei vielä ole valittu
  if (isSelected === false) {
    return (
      <View style={styles.square}>
        <ScrollView>
          <View style={styles.titleposdia}>
            <Text style={styles.title}>Sähkön hintakehitys </Text>
            <Text style={styles.lowkey}>(snt/kWh,sis. Alv 10%)</Text>
          </View>
          <Text style={styles.text}>Valitse kuukausi, jonka hintoja haluat tarkastella</Text>
          <SelectList
            boxStyles={{backgroundColor: '#5F5F5F'}}
            inputStyles={{fontSize: 15, color: 'white'}}
            dropdownStyles={{backgroundColor: '#808080'}}
            dropdownTextStyles= {{color: 'white'}}
            setSelected={(val) => setSelected(val)}
            onSelect={() => checkTime(selected)}
            data={data}
            save="value"
            placeholder='Valitse kuukausi'
          />
          <Text style={styles.flex2}>
          {priceOfTheMonth()}
          </Text>
        </ScrollView>
      </View>
    )
  }
}

