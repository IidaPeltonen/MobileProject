import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import XMLParser from 'react-xml-parser';

const URL2 = 'https://web-api.tp.entsoe.eu/api?securityToken=';
const APIKEY2 = '4d24ca50-7859-4d0d-97c2-de16d61007af';
const documentType = '&documentType=A44&' //mitä tietoaineistoa luetaan
const in_Domain = 'in_Domain=10YFI-1--------U&' // maakoodi
const out_Domain = 'out_Domain=10YFI-1--------U&'
const start = 'periodStart=' + year + month + day + StartTime + '&'
const end = 'periodEnd=' + year + month + day + EndTime + '&'
const year= new Date().getFullYear()
const month = new Date().getMonth()
const day = new Date().getDay()
const time = new Date().getHours() + '' + new Date().getMinutes()
const StartTime = '0000'
const EndTime = '2359'

export default function App() {
  const [data, setData] = useState([])
  const [prices, setPrices] = useState([]);
  const [date, setDate] = useState(new Date())
  console.log(time)

  useEffect(() => {
    fetch(URL2 + APIKEY2 + documentType + in_Domain + out_Domain + start + end, {
      headers: {
        'method': 'GET',
        'Content-Type': 'application/xml',
      },
    })
/*       .then(response => response.text())
      .then((textResponse) => console.log('response is ', textResponse))
      .catch((error) => {
        console.log(error)
      })
  }, []); */
  .then(res => res.text())
  .then(data => {
      let json = new XMLParser().parseFromString(data);
      //console.log(json.getElementsByTagName('price'));
      setPrices(json.getElementsByTagName('price'));
      console.log('hinnat' + prices[0].value); //megawattituntihinta, pitää muutta kilowattitunneiksi ja lisätä alv
    //  console.log(json)
      setData(json)
     // console.log('datan sisältö: ' + data)
  })
  .catch(err => console.log(err));
}, [])

  return (
    <View style={styles.container}>
      {
        data && data.length > 0 && data.map((item) => <Text>{item.value}</Text>)
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

