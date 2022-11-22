import { List } from 'react-native-paper';
import { useState, useEffect } from 'react';
import XMLParser from 'react-xml-parser';

const APIKEY = '4d24ca50-7859-4d0d-97c2-de16d61007af';
const documentType = '&documentType=A44&' //mitä tietoaineistoa luetaan
const in_Domain = 'in_Domain=10YFI-1--------U&' // maakoodi
const out_Domain = 'out_Domain=10YFI-1--------U&'
const year = new Date().getFullYear()
const month = new Date().getMonth() + 1
const day = new Date().getDate()
const sevenDaysAgoDay= (new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).getDate()
const sevenDaysAgoMonth= (new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).getMonth() + 1
const sevenDaysAgoYear= (new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).getFullYear()
const StartTime = '0000'
const EndTime = '0000'
const start = 'periodStart=' + sevenDaysAgoYear + sevenDaysAgoMonth + sevenDaysAgoDay + StartTime + '&'
const end = 'periodEnd=' + year + month + day + EndTime

const URL = 'https://web-api.tp.entsoe.eu/api?securityToken=' + APIKEY + documentType + in_Domain + out_Domain
  + start + end

const Weeklist = () => {
  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded(!expanded);
  const [newPrices, setNewPrices] = useState([]); //tyhjä hinta-taulukko, johon päivän hinnat tallennetaan muutoksen jälkeen
  const [dates, setDates] = useState([]); //tyhjä hinta-taulukko, johon päivän hinnat tallennetaan muutoksen jälkeen

  function getPriceOfTheWeek(prices) {
    const tempArr = []
    for (let i = 0; i < (prices.length-24); i++) { //jostain syystä prices-taulussa on yksi vuorukausi enemmän
      tempArr.push(Number(prices[i].value / 10 * 1.24).toFixed(2))
    }
    setNewPrices(tempArr)
  }

  function getDates(dates) {
    const tempArr2 = []
    for (let x = 0; x < (dates.length); x++) {
      console.log(dates[x].value)
      let date = (dates[x].value).substring(0,10) 
      let time = ' 00:00'
let dateTime= date + time
      tempArr2.push(dateTime)
    }
    setDates(tempArr2)
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
        //poistetaan taulukosta eka, turha startti
        temp2.splice(0, 1);
        //console.log(temp2)
        getPriceOfTheWeek(temp)
        getDates(temp2)
/*         console.log(URL)
        console.log(dates)
        console.log('7pv: ' + sevenDaysAgoDay)
        console.log('tänään' + day) */
        console.log(dates.length)
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <List.Section title="Tässä on väärät labelit jne, katsotaan osaako Jouni auttaa">
      <List.Accordion
        title="Näytä tuntihinnat">
        <List.Item title={dates[0]} description={newPrices[0]}/>
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
        <List.Item title={dates[1]} description={newPrices[1]}/>
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
        <List.Item title={dates[2]} description={newPrices[2]}/>
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
        <List.Item title={dates[3]} description={newPrices[3]}/>
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
        <List.Item title={dates[4]} description={newPrices[4]}/>
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
        <List.Item title={dates[5]} description={newPrices[5]}/>
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
        <List.Item title={dates[6]} description={newPrices[6]}/>
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
        <List.Item title={dates[7]} description={newPrices[7]}/>
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

export default Weeklist;