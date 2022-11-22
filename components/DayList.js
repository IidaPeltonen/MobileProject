import { List } from 'react-native-paper';
import { useState, useEffect } from 'react';
import XMLParser from 'react-xml-parser';
import { Text } from 'react-native';

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

const DayList = () => {
  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded(!expanded);
  const [newPrices, setNewPrices] = useState([]); //tyhjä hinta-taulukko, johon päivän hinnat tallennetaan muutoksen jälkeen

  function getPriceOfTheDay(prices) {
    const tempArr = []
    for (let i = 0; i < 24; i++) {
      tempArr.push(Number(prices[i].value / 10 * 1.24).toFixed(2))
    }
    setNewPrices(tempArr)
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
        console.log(URL)
        getPriceOfTheDay(temp)
        console.log('priceOfTheDay: ' + newPrices)
        console.log(newPrices[0])
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <List.Section title="">
      <List.Accordion
        title="Näytä tuntihinnat">
        <List.Item title="00:00-01:00" description={newPrices[0]}/>
        <List.Item title="01:00-02:00" description={newPrices[1]}/>
        <List.Item title="02:00-03:00" description={newPrices[2]}/>
        <List.Item title="03:00-04:00" description={newPrices[3]}/>
        <List.Item title="04:00-05:00" description={newPrices[4]}/>
        <List.Item title="05:00-06:00" description={newPrices[5]}/>
        <List.Item title="06:00-07:00" description={newPrices[6]}/>
        <List.Item title="07:00-08:00" description={newPrices[7]}/>
        <List.Item title="08:00-09:00" description={newPrices[8]}/>
        <List.Item title="09:00-10:00" description={newPrices[9]}/>
        <List.Item title="10:00-11:00" description={newPrices[10]}/>
        <List.Item title="11:00-12:00" description={newPrices[11]}/>
        <List.Item title="12:00-13:00" description={newPrices[12]}/>
        <List.Item title="13:00-14:00" description={newPrices[13]}/>
        <List.Item title="14:00-15:00" description={newPrices[14]}/>
        <List.Item title="15:00-16:00" description={newPrices[15]}/>
        <List.Item title="16:00-17:00" description={newPrices[16]}/>
        <List.Item title="17:00-18:00" description={newPrices[17]}/>
        <List.Item title="18:00-19:00" description={newPrices[18]}/>
        <List.Item title="19:00-20:00" description={newPrices[19]}/>
        <List.Item title="20:00-21:00" description={newPrices[20]}/>
        <List.Item title="21:00-22:00" description={newPrices[21]}/>
        <List.Item title="22:00-23:00" description={newPrices[22]}/>
        <List.Item title="23:00-00:00" description={newPrices[23]}/>
      </List.Accordion>
    </List.Section>
  );
};

export default DayList;