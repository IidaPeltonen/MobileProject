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

const MonthList = () => {
  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded(!expanded);
  const [newPrices, setNewPrices] = useState([]); //tyhjä hinta-taulukko, johon päivän hinnat tallennetaan muutoksen jälkeen
  const [dates, setDates] = useState([]); //tyhjä hinta-taulukko, johon päivän hinnat tallennetaan muutoksen jälkeen

  function getPriceOfTheMonth(prices) {
    const tempArr = []
    for (let i = 0; i < (prices.length - 24); i++) { //jostain syystä prices-taulussa on yksi vuorukausi enemmän
      tempArr.push(Number(prices[i].value / 10 * 1.24).toFixed(2))
    }
    setNewPrices(tempArr)
  }

  function getDates(dates) {
    const tempArr2 = []
    for (let x = 0; x < (dates.length); x++) {
      //muutetaan päivämäärä suomalaiseen muotoon
      let y = (dates[x].value).substring(0, 4)
      let m = (dates[x].value).substring(5, 7)
      let d = (dates[x].value).substring(8, 10)
      let date = d + '.' + m + '.' + y
      tempArr2.push(date)
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
        //poistetaan taulukosta kaksi ekaa, turhaa startdatea (createdDate ja timeIntervalDate)
        temp2.splice(0, 2);
        getPriceOfTheMonth(temp)
        getDates(temp2)
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <List.Section title="">
      <List.Accordion
        title="Näytä tuntihinnat">
        <List.Item title={dates[0]} />
        <List.Item title="00:00-01:00" description={newPrices[0]} />
        <List.Item title="01:00-02:00" description={newPrices[1]} />
        <List.Item title="02:00-03:00" description={newPrices[2]} />
        <List.Item title="03:00-04:00" description={newPrices[3]} />
        <List.Item title="04:00-05:00" description={newPrices[4]} />
        <List.Item title="05:00-06:00" description={newPrices[5]} />
        <List.Item title="06:00-07:00" description={newPrices[6]} />
        <List.Item title="07:00-08:00" description={newPrices[7]} />
        <List.Item title="08:00-09:00" description={newPrices[8]} />
        <List.Item title="09:00-10:00" description={newPrices[9]} />
        <List.Item title="10:00-11:00" description={newPrices[10]} />
        <List.Item title="11:00-12:00" description={newPrices[11]} />
        <List.Item title="12:00-13:00" description={newPrices[12]} />
        <List.Item title="13:00-14:00" description={newPrices[13]} />
        <List.Item title="14:00-15:00" description={newPrices[14]} />
        <List.Item title="15:00-16:00" description={newPrices[15]} />
        <List.Item title="16:00-17:00" description={newPrices[16]} />
        <List.Item title="17:00-18:00" description={newPrices[17]} />
        <List.Item title="18:00-19:00" description={newPrices[18]} />
        <List.Item title="19:00-20:00" description={newPrices[19]} />
        <List.Item title="20:00-21:00" description={newPrices[20]} />
        <List.Item title="21:00-22:00" description={newPrices[21]} />
        <List.Item title="22:00-23:00" description={newPrices[22]} />
        <List.Item title="23:00-00:00" description={newPrices[23]} />
        <List.Item title={dates[1]} />
        <List.Item title="00:00-01:00" description={newPrices[24]} />
        <List.Item title="01:00-02:00" description={newPrices[25]} />
        <List.Item title="02:00-03:00" description={newPrices[26]} />
        <List.Item title="03:00-04:00" description={newPrices[27]} />
        <List.Item title="04:00-05:00" description={newPrices[28]} />
        <List.Item title="05:00-06:00" description={newPrices[29]} />
        <List.Item title="06:00-07:00" description={newPrices[30]} />
        <List.Item title="07:00-08:00" description={newPrices[31]} />
        <List.Item title="08:00-09:00" description={newPrices[32]} />
        <List.Item title="09:00-10:00" description={newPrices[33]} />
        <List.Item title="10:00-11:00" description={newPrices[34]} />
        <List.Item title="11:00-12:00" description={newPrices[35]} />
        <List.Item title="12:00-13:00" description={newPrices[36]} />
        <List.Item title="13:00-14:00" description={newPrices[37]} />
        <List.Item title="14:00-15:00" description={newPrices[38]} />
        <List.Item title="15:00-16:00" description={newPrices[39]} />
        <List.Item title="16:00-17:00" description={newPrices[40]} />
        <List.Item title="17:00-18:00" description={newPrices[41]} />
        <List.Item title="18:00-19:00" description={newPrices[42]} />
        <List.Item title="19:00-20:00" description={newPrices[43]} />
        <List.Item title="20:00-21:00" description={newPrices[44]} />
        <List.Item title="21:00-22:00" description={newPrices[45]} />
        <List.Item title="22:00-23:00" description={newPrices[46]} />
        <List.Item title="23:00-00:00" description={newPrices[47]} />
        <List.Item title={dates[2]} />
        <List.Item title="00:00-01:00" description={newPrices[48]} />
        <List.Item title="01:00-02:00" description={newPrices[49]} />
        <List.Item title="02:00-03:00" description={newPrices[50]} />
        <List.Item title="03:00-04:00" description={newPrices[51]} />
        <List.Item title="04:00-05:00" description={newPrices[52]} />
        <List.Item title="05:00-06:00" description={newPrices[53]} />
        <List.Item title="06:00-07:00" description={newPrices[54]} />
        <List.Item title="07:00-08:00" description={newPrices[55]} />
        <List.Item title="08:00-09:00" description={newPrices[56]} />
        <List.Item title="09:00-10:00" description={newPrices[57]} />
        <List.Item title="10:00-11:00" description={newPrices[58]} />
        <List.Item title="11:00-12:00" description={newPrices[59]} />
        <List.Item title="12:00-13:00" description={newPrices[60]} />
        <List.Item title="13:00-14:00" description={newPrices[61]} />
        <List.Item title="14:00-15:00" description={newPrices[62]} />
        <List.Item title="15:00-16:00" description={newPrices[63]} />
        <List.Item title="16:00-17:00" description={newPrices[64]} />
        <List.Item title="17:00-18:00" description={newPrices[65]} />
        <List.Item title="18:00-19:00" description={newPrices[66]} />
        <List.Item title="19:00-20:00" description={newPrices[67]} />
        <List.Item title="20:00-21:00" description={newPrices[68]} />
        <List.Item title="21:00-22:00" description={newPrices[69]} />
        <List.Item title="22:00-23:00" description={newPrices[70]} />
        <List.Item title="23:00-00:00" description={newPrices[71]} />
        <List.Item title={dates[3]} />
        <List.Item title="00:00-01:00" description={newPrices[72]} />
        <List.Item title="01:00-02:00" description={newPrices[73]} />
        <List.Item title="02:00-03:00" description={newPrices[74]} />
        <List.Item title="03:00-04:00" description={newPrices[75]} />
        <List.Item title="04:00-05:00" description={newPrices[76]} />
        <List.Item title="05:00-06:00" description={newPrices[77]} />
        <List.Item title="06:00-07:00" description={newPrices[78]} />
        <List.Item title="07:00-08:00" description={newPrices[79]} />
        <List.Item title="08:00-09:00" description={newPrices[80]} />
        <List.Item title="09:00-10:00" description={newPrices[81]} />
        <List.Item title="10:00-11:00" description={newPrices[82]} />
        <List.Item title="11:00-12:00" description={newPrices[83]} />
        <List.Item title="12:00-13:00" description={newPrices[84]} />
        <List.Item title="13:00-14:00" description={newPrices[85]} />
        <List.Item title="14:00-15:00" description={newPrices[86]} />
        <List.Item title="15:00-16:00" description={newPrices[87]} />
        <List.Item title="16:00-17:00" description={newPrices[88]} />
        <List.Item title="17:00-18:00" description={newPrices[89]} />
        <List.Item title="18:00-19:00" description={newPrices[90]} />
        <List.Item title="19:00-20:00" description={newPrices[91]} />
        <List.Item title="20:00-21:00" description={newPrices[92]} />
        <List.Item title="21:00-22:00" description={newPrices[93]} />
        <List.Item title="22:00-23:00" description={newPrices[94]} />
        <List.Item title="23:00-00:00" description={newPrices[95]} />
        <List.Item title={dates[4]} />
        <List.Item title="00:00-01:00" description={newPrices[96]} />
        <List.Item title="01:00-02:00" description={newPrices[97]} />
        <List.Item title="02:00-03:00" description={newPrices[98]} />
        <List.Item title="03:00-04:00" description={newPrices[99]} />
        <List.Item title="04:00-05:00" description={newPrices[100]} />
        <List.Item title="05:00-06:00" description={newPrices[101]} />
        <List.Item title="06:00-07:00" description={newPrices[102]} />
        <List.Item title="07:00-08:00" description={newPrices[103]} />
        <List.Item title="08:00-09:00" description={newPrices[104]} />
        <List.Item title="09:00-10:00" description={newPrices[105]} />
        <List.Item title="10:00-11:00" description={newPrices[106]} />
        <List.Item title="11:00-12:00" description={newPrices[107]} />
        <List.Item title="12:00-13:00" description={newPrices[108]} />
        <List.Item title="13:00-14:00" description={newPrices[109]} />
        <List.Item title="14:00-15:00" description={newPrices[110]} />
        <List.Item title="15:00-16:00" description={newPrices[111]} />
        <List.Item title="16:00-17:00" description={newPrices[112]} />
        <List.Item title="17:00-18:00" description={newPrices[113]} />
        <List.Item title="18:00-19:00" description={newPrices[114]} />
        <List.Item title="19:00-20:00" description={newPrices[115]} />
        <List.Item title="20:00-21:00" description={newPrices[116]} />
        <List.Item title="21:00-22:00" description={newPrices[117]} />
        <List.Item title="22:00-23:00" description={newPrices[118]} />
        <List.Item title="23:00-00:00" description={newPrices[119]} />
        <List.Item title={dates[5]} />
        <List.Item title="00:00-01:00" description={newPrices[120]} />
        <List.Item title="01:00-02:00" description={newPrices[121]} />
        <List.Item title="02:00-03:00" description={newPrices[122]} />
        <List.Item title="03:00-04:00" description={newPrices[123]} />
        <List.Item title="04:00-05:00" description={newPrices[124]} />
        <List.Item title="05:00-06:00" description={newPrices[125]} />
        <List.Item title="06:00-07:00" description={newPrices[126]} />
        <List.Item title="07:00-08:00" description={newPrices[127]} />
        <List.Item title="08:00-09:00" description={newPrices[128]} />
        <List.Item title="09:00-10:00" description={newPrices[129]} />
        <List.Item title="10:00-11:00" description={newPrices[130]} />
        <List.Item title="11:00-12:00" description={newPrices[131]} />
        <List.Item title="12:00-13:00" description={newPrices[132]} />
        <List.Item title="13:00-14:00" description={newPrices[133]} />
        <List.Item title="14:00-15:00" description={newPrices[134]} />
        <List.Item title="15:00-16:00" description={newPrices[135]} />
        <List.Item title="16:00-17:00" description={newPrices[136]} />
        <List.Item title="17:00-18:00" description={newPrices[137]} />
        <List.Item title="18:00-19:00" description={newPrices[138]} />
        <List.Item title="19:00-20:00" description={newPrices[139]} />
        <List.Item title="20:00-21:00" description={newPrices[140]} />
        <List.Item title="21:00-22:00" description={newPrices[141]} />
        <List.Item title="22:00-23:00" description={newPrices[142]} />
        <List.Item title="23:00-00:00" description={newPrices[143]} />
        <List.Item title={dates[6]} />
        <List.Item title="00:00-01:00" description={newPrices[144]} />
        <List.Item title="01:00-02:00" description={newPrices[145]} />
        <List.Item title="02:00-03:00" description={newPrices[146]} />
        <List.Item title="03:00-04:00" description={newPrices[147]} />
        <List.Item title="04:00-05:00" description={newPrices[148]} />
        <List.Item title="05:00-06:00" description={newPrices[149]} />
        <List.Item title="06:00-07:00" description={newPrices[150]} />
        <List.Item title="07:00-08:00" description={newPrices[151]} />
        <List.Item title="08:00-09:00" description={newPrices[152]} />
        <List.Item title="09:00-10:00" description={newPrices[153]} />
        <List.Item title="10:00-11:00" description={newPrices[154]} />
        <List.Item title="11:00-12:00" description={newPrices[155]} />
        <List.Item title="12:00-13:00" description={newPrices[156]} />
        <List.Item title="13:00-14:00" description={newPrices[157]} />
        <List.Item title="14:00-15:00" description={newPrices[158]} />
        <List.Item title="15:00-16:00" description={newPrices[159]} />
        <List.Item title="16:00-17:00" description={newPrices[160]} />
        <List.Item title="17:00-18:00" description={newPrices[161]} />
        <List.Item title="18:00-19:00" description={newPrices[162]} />
        <List.Item title="19:00-20:00" description={newPrices[163]} />
        <List.Item title="20:00-21:00" description={newPrices[164]} />
        <List.Item title="21:00-22:00" description={newPrices[165]} />
        <List.Item title="22:00-23:00" description={newPrices[166]} />
        <List.Item title="23:00-00:00" description={newPrices[167]} />
        <List.Item title={dates[7]} />
        <List.Item title="00:00-01:00" description={newPrices[168]} />
        <List.Item title="01:00-02:00" description={newPrices[169]} />
        <List.Item title="02:00-03:00" description={newPrices[170]} />
        <List.Item title="03:00-04:00" description={newPrices[171]} />
        <List.Item title="04:00-05:00" description={newPrices[172]} />
        <List.Item title="05:00-06:00" description={newPrices[173]} />
        <List.Item title="06:00-07:00" description={newPrices[174]} />
        <List.Item title="07:00-08:00" description={newPrices[175]} />
        <List.Item title="08:00-09:00" description={newPrices[176]} />
        <List.Item title="09:00-10:00" description={newPrices[177]} />
        <List.Item title="10:00-11:00" description={newPrices[178]} />
        <List.Item title="11:00-12:00" description={newPrices[179]} />
        <List.Item title="12:00-13:00" description={newPrices[180]} />
        <List.Item title="13:00-14:00" description={newPrices[181]} />
        <List.Item title="14:00-15:00" description={newPrices[182]} />
        <List.Item title="15:00-16:00" description={newPrices[183]} />
        <List.Item title="16:00-17:00" description={newPrices[184]} />
        <List.Item title="17:00-18:00" description={newPrices[185]} />
        <List.Item title="18:00-19:00" description={newPrices[186]} />
        <List.Item title="19:00-20:00" description={newPrices[187]} />
        <List.Item title="20:00-21:00" description={newPrices[188]} />
        <List.Item title="21:00-22:00" description={newPrices[189]} />
        <List.Item title="22:00-23:00" description={newPrices[190]} />
        <List.Item title="23:00-00:00" description={newPrices[191]} />
        <List.Item title={dates[8]} />
        <List.Item title="00:00-01:00" description={newPrices[192]} />
        <List.Item title="01:00-02:00" description={newPrices[193]} />
        <List.Item title="02:00-03:00" description={newPrices[194]} />
        <List.Item title="03:00-04:00" description={newPrices[195]} />
        <List.Item title="04:00-05:00" description={newPrices[196]} />
        <List.Item title="05:00-06:00" description={newPrices[197]} />
        <List.Item title="06:00-07:00" description={newPrices[198]} />
        <List.Item title="07:00-08:00" description={newPrices[199]} />
        <List.Item title="08:00-09:00" description={newPrices[200]} />
        <List.Item title="09:00-10:00" description={newPrices[201]} />
        <List.Item title="10:00-11:00" description={newPrices[202]} />
        <List.Item title="11:00-12:00" description={newPrices[203]} />
        <List.Item title="12:00-13:00" description={newPrices[204]} />
        <List.Item title="13:00-14:00" description={newPrices[205]} />
        <List.Item title="14:00-15:00" description={newPrices[206]} />
        <List.Item title="15:00-16:00" description={newPrices[207]} />
        <List.Item title="16:00-17:00" description={newPrices[208]} />
        <List.Item title="17:00-18:00" description={newPrices[209]} />
        <List.Item title="18:00-19:00" description={newPrices[210]} />
        <List.Item title="19:00-20:00" description={newPrices[211]} />
        <List.Item title="20:00-21:00" description={newPrices[212]} />
        <List.Item title="21:00-22:00" description={newPrices[213]} />
        <List.Item title="22:00-23:00" description={newPrices[214]} />
        <List.Item title="23:00-00:00" description={newPrices[215]} />
        <List.Item title={dates[9]} />
        <List.Item title="00:00-01:00" description={newPrices[216]} />
        <List.Item title="01:00-02:00" description={newPrices[217]} />
        <List.Item title="02:00-03:00" description={newPrices[218]} />
        <List.Item title="03:00-04:00" description={newPrices[219]} />
        <List.Item title="04:00-05:00" description={newPrices[220]} />
        <List.Item title="05:00-06:00" description={newPrices[221]} />
        <List.Item title="06:00-07:00" description={newPrices[222]} />
        <List.Item title="07:00-08:00" description={newPrices[223]} />
        <List.Item title="08:00-09:00" description={newPrices[224]} />
        <List.Item title="09:00-10:00" description={newPrices[225]} />
        <List.Item title="10:00-11:00" description={newPrices[226]} />
        <List.Item title="11:00-12:00" description={newPrices[227]} />
        <List.Item title="12:00-13:00" description={newPrices[228]} />
        <List.Item title="13:00-14:00" description={newPrices[229]} />
        <List.Item title="14:00-15:00" description={newPrices[230]} />
        <List.Item title="15:00-16:00" description={newPrices[231]} />
        <List.Item title="16:00-17:00" description={newPrices[232]} />
        <List.Item title="17:00-18:00" description={newPrices[233]} />
        <List.Item title="18:00-19:00" description={newPrices[234]} />
        <List.Item title="19:00-20:00" description={newPrices[235]} />
        <List.Item title="20:00-21:00" description={newPrices[236]} />
        <List.Item title="21:00-22:00" description={newPrices[237]} />
        <List.Item title="22:00-23:00" description={newPrices[238]} />
        <List.Item title="23:00-00:00" description={newPrices[239]} />
        <List.Item title={dates[10]} />
        <List.Item title="00:00-01:00" description={newPrices[240]} />
        <List.Item title="01:00-02:00" description={newPrices[241]} />
        <List.Item title="02:00-03:00" description={newPrices[242]} />
        <List.Item title="03:00-04:00" description={newPrices[243]} />
        <List.Item title="04:00-05:00" description={newPrices[244]} />
        <List.Item title="05:00-06:00" description={newPrices[245]} />
        <List.Item title="06:00-07:00" description={newPrices[246]} />
        <List.Item title="07:00-08:00" description={newPrices[247]} />
        <List.Item title="08:00-09:00" description={newPrices[248]} />
        <List.Item title="09:00-10:00" description={newPrices[249]} />
        <List.Item title="10:00-11:00" description={newPrices[250]} />
        <List.Item title="11:00-12:00" description={newPrices[251]} />
        <List.Item title="12:00-13:00" description={newPrices[252]} />
        <List.Item title="13:00-14:00" description={newPrices[253]} />
        <List.Item title="14:00-15:00" description={newPrices[254]} />
        <List.Item title="15:00-16:00" description={newPrices[255]} />
        <List.Item title="16:00-17:00" description={newPrices[256]} />
        <List.Item title="17:00-18:00" description={newPrices[257]} />
        <List.Item title="18:00-19:00" description={newPrices[258]} />
        <List.Item title="19:00-20:00" description={newPrices[259]} />
        <List.Item title="20:00-21:00" description={newPrices[260]} />
        <List.Item title="21:00-22:00" description={newPrices[261]} />
        <List.Item title="22:00-23:00" description={newPrices[262]} />
        <List.Item title="23:00-00:00" description={newPrices[263]} />
        <List.Item title={dates[11]} />
        <List.Item title="00:00-01:00" description={newPrices[264]} />
        <List.Item title="01:00-02:00" description={newPrices[265]} />
        <List.Item title="02:00-03:00" description={newPrices[266]} />
        <List.Item title="03:00-04:00" description={newPrices[267]} />
        <List.Item title="04:00-05:00" description={newPrices[268]} />
        <List.Item title="05:00-06:00" description={newPrices[269]} />
        <List.Item title="06:00-07:00" description={newPrices[270]} />
        <List.Item title="07:00-08:00" description={newPrices[271]} />
        <List.Item title="08:00-09:00" description={newPrices[272]} />
        <List.Item title="09:00-10:00" description={newPrices[273]} />
        <List.Item title="10:00-11:00" description={newPrices[274]} />
        <List.Item title="11:00-12:00" description={newPrices[275]} />
        <List.Item title="12:00-13:00" description={newPrices[276]} />
        <List.Item title="13:00-14:00" description={newPrices[277]} />
        <List.Item title="14:00-15:00" description={newPrices[278]} />
        <List.Item title="15:00-16:00" description={newPrices[279]} />
        <List.Item title="16:00-17:00" description={newPrices[280]} />
        <List.Item title="17:00-18:00" description={newPrices[281]} />
        <List.Item title="18:00-19:00" description={newPrices[282]} />
        <List.Item title="19:00-20:00" description={newPrices[283]} />
        <List.Item title="20:00-21:00" description={newPrices[284]} />
        <List.Item title="21:00-22:00" description={newPrices[285]} />
        <List.Item title="22:00-23:00" description={newPrices[286]} />
        <List.Item title="23:00-00:00" description={newPrices[287]} />
        <List.Item title={dates[12]} />
        <List.Item title="00:00-01:00" description={newPrices[288]} />
        <List.Item title="01:00-02:00" description={newPrices[289]} />
        <List.Item title="02:00-03:00" description={newPrices[290]} />
        <List.Item title="03:00-04:00" description={newPrices[291]} />
        <List.Item title="04:00-05:00" description={newPrices[292]} />
        <List.Item title="05:00-06:00" description={newPrices[293]} />
        <List.Item title="06:00-07:00" description={newPrices[294]} />
        <List.Item title="07:00-08:00" description={newPrices[295]} />
        <List.Item title="08:00-09:00" description={newPrices[296]} />
        <List.Item title="09:00-10:00" description={newPrices[297]} />
        <List.Item title="10:00-11:00" description={newPrices[298]} />
        <List.Item title="11:00-12:00" description={newPrices[299]} />
        <List.Item title="12:00-13:00" description={newPrices[300]} />
        <List.Item title="13:00-14:00" description={newPrices[301]} />
        <List.Item title="14:00-15:00" description={newPrices[302]} />
        <List.Item title="15:00-16:00" description={newPrices[303]} />
        <List.Item title="16:00-17:00" description={newPrices[304]} />
        <List.Item title="17:00-18:00" description={newPrices[305]} />
        <List.Item title="18:00-19:00" description={newPrices[306]} />
        <List.Item title="19:00-20:00" description={newPrices[307]} />
        <List.Item title="20:00-21:00" description={newPrices[308]} />
        <List.Item title="21:00-22:00" description={newPrices[309]} />
        <List.Item title="22:00-23:00" description={newPrices[310]} />
        <List.Item title="23:00-00:00" description={newPrices[311]} />
        <List.Item title={dates[13]} />
        <List.Item title="00:00-01:00" description={newPrices[312]} />
        <List.Item title="01:00-02:00" description={newPrices[313]} />
        <List.Item title="02:00-03:00" description={newPrices[314]} />
        <List.Item title="03:00-04:00" description={newPrices[315]} />
        <List.Item title="04:00-05:00" description={newPrices[316]} />
        <List.Item title="05:00-06:00" description={newPrices[317]} />
        <List.Item title="06:00-07:00" description={newPrices[318]} />
        <List.Item title="07:00-08:00" description={newPrices[319]} />
        <List.Item title="08:00-09:00" description={newPrices[320]} />
        <List.Item title="09:00-10:00" description={newPrices[321]} />
        <List.Item title="10:00-11:00" description={newPrices[322]} />
        <List.Item title="11:00-12:00" description={newPrices[323]} />
        <List.Item title="12:00-13:00" description={newPrices[324]} />
        <List.Item title="13:00-14:00" description={newPrices[325]} />
        <List.Item title="14:00-15:00" description={newPrices[326]} />
        <List.Item title="15:00-16:00" description={newPrices[327]} />
        <List.Item title="16:00-17:00" description={newPrices[328]} />
        <List.Item title="17:00-18:00" description={newPrices[329]} />
        <List.Item title="18:00-19:00" description={newPrices[330]} />
        <List.Item title="19:00-20:00" description={newPrices[331]} />
        <List.Item title="20:00-21:00" description={newPrices[332]} />
        <List.Item title="21:00-22:00" description={newPrices[333]} />
        <List.Item title="22:00-23:00" description={newPrices[334]} />
        <List.Item title="23:00-00:00" description={newPrices[335]} />
        <List.Item title={dates[14]} />
        <List.Item title="00:00-01:00" description={newPrices[336]} />
        <List.Item title="01:00-02:00" description={newPrices[337]} />
        <List.Item title="02:00-03:00" description={newPrices[338]} />
        <List.Item title="03:00-04:00" description={newPrices[339]} />
        <List.Item title="04:00-05:00" description={newPrices[340]} />
        <List.Item title="05:00-06:00" description={newPrices[341]} />
        <List.Item title="06:00-07:00" description={newPrices[342]} />
        <List.Item title="07:00-08:00" description={newPrices[343]} />
        <List.Item title="08:00-09:00" description={newPrices[344]} />
        <List.Item title="09:00-10:00" description={newPrices[345]} />
        <List.Item title="10:00-11:00" description={newPrices[346]} />
        <List.Item title="11:00-12:00" description={newPrices[347]} />
        <List.Item title="12:00-13:00" description={newPrices[348]} />
        <List.Item title="13:00-14:00" description={newPrices[349]} />
        <List.Item title="14:00-15:00" description={newPrices[350]} />
        <List.Item title="15:00-16:00" description={newPrices[351]} />
        <List.Item title="16:00-17:00" description={newPrices[352]} />
        <List.Item title="17:00-18:00" description={newPrices[353]} />
        <List.Item title="18:00-19:00" description={newPrices[354]} />
        <List.Item title="19:00-20:00" description={newPrices[355]} />
        <List.Item title="20:00-21:00" description={newPrices[356]} />
        <List.Item title="21:00-22:00" description={newPrices[357]} />
        <List.Item title="22:00-23:00" description={newPrices[358]} />
        <List.Item title="23:00-00:00" description={newPrices[359]} />
        <List.Item title={dates[15]} />
        <List.Item title="00:00-01:00" description={newPrices[360]} />
        <List.Item title="01:00-02:00" description={newPrices[361]} />
        <List.Item title="02:00-03:00" description={newPrices[362]} />
        <List.Item title="03:00-04:00" description={newPrices[363]} />
        <List.Item title="04:00-05:00" description={newPrices[364]} />
        <List.Item title="05:00-06:00" description={newPrices[365]} />
        <List.Item title="06:00-07:00" description={newPrices[366]} />
        <List.Item title="07:00-08:00" description={newPrices[367]} />
        <List.Item title="08:00-09:00" description={newPrices[368]} />
        <List.Item title="09:00-10:00" description={newPrices[369]} />
        <List.Item title="10:00-11:00" description={newPrices[370]} />
        <List.Item title="11:00-12:00" description={newPrices[371]} />
        <List.Item title="12:00-13:00" description={newPrices[372]} />
        <List.Item title="13:00-14:00" description={newPrices[373]} />
        <List.Item title="14:00-15:00" description={newPrices[374]} />
        <List.Item title="15:00-16:00" description={newPrices[375]} />
        <List.Item title="16:00-17:00" description={newPrices[376]} />
        <List.Item title="17:00-18:00" description={newPrices[377]} />
        <List.Item title="18:00-19:00" description={newPrices[378]} />
        <List.Item title="19:00-20:00" description={newPrices[379]} />
        <List.Item title="20:00-21:00" description={newPrices[380]} />
        <List.Item title="21:00-22:00" description={newPrices[381]} />
        <List.Item title="22:00-23:00" description={newPrices[382]} />
        <List.Item title="23:00-00:00" description={newPrices[383]} />
        <List.Item title={dates[16]} />
        <List.Item title="00:00-01:00" description={newPrices[384]} />
        <List.Item title="01:00-02:00" description={newPrices[385]} />
        <List.Item title="02:00-03:00" description={newPrices[386]} />
        <List.Item title="03:00-04:00" description={newPrices[387]} />
        <List.Item title="04:00-05:00" description={newPrices[388]} />
        <List.Item title="05:00-06:00" description={newPrices[389]} />
        <List.Item title="06:00-07:00" description={newPrices[390]} />
        <List.Item title="07:00-08:00" description={newPrices[391]} />
        <List.Item title="08:00-09:00" description={newPrices[392]} />
        <List.Item title="09:00-10:00" description={newPrices[393]} />
        <List.Item title="10:00-11:00" description={newPrices[394]} />
        <List.Item title="11:00-12:00" description={newPrices[395]} />
        <List.Item title="12:00-13:00" description={newPrices[396]} />
        <List.Item title="13:00-14:00" description={newPrices[397]} />
        <List.Item title="14:00-15:00" description={newPrices[398]} />
        <List.Item title="15:00-16:00" description={newPrices[399]} />
        <List.Item title="16:00-17:00" description={newPrices[400]} />
        <List.Item title="17:00-18:00" description={newPrices[401]} />
        <List.Item title="18:00-19:00" description={newPrices[402]} />
        <List.Item title="19:00-20:00" description={newPrices[403]} />
        <List.Item title="20:00-21:00" description={newPrices[404]} />
        <List.Item title="21:00-22:00" description={newPrices[405]} />
        <List.Item title="22:00-23:00" description={newPrices[406]} />
        <List.Item title="23:00-00:00" description={newPrices[407]} />
        <List.Item title={dates[17]} />
        <List.Item title="00:00-01:00" description={newPrices[408]} />
        <List.Item title="01:00-02:00" description={newPrices[409]} />
        <List.Item title="02:00-03:00" description={newPrices[410]} />
        <List.Item title="03:00-04:00" description={newPrices[411]} />
        <List.Item title="04:00-05:00" description={newPrices[412]} />
        <List.Item title="05:00-06:00" description={newPrices[413]} />
        <List.Item title="06:00-07:00" description={newPrices[414]} />
        <List.Item title="07:00-08:00" description={newPrices[415]} />
        <List.Item title="08:00-09:00" description={newPrices[416]} />
        <List.Item title="09:00-10:00" description={newPrices[417]} />
        <List.Item title="10:00-11:00" description={newPrices[418]} />
        <List.Item title="11:00-12:00" description={newPrices[419]} />
        <List.Item title="12:00-13:00" description={newPrices[420]} />
        <List.Item title="13:00-14:00" description={newPrices[421]} />
        <List.Item title="14:00-15:00" description={newPrices[422]} />
        <List.Item title="15:00-16:00" description={newPrices[423]} />
        <List.Item title="16:00-17:00" description={newPrices[424]} />
        <List.Item title="17:00-18:00" description={newPrices[425]} />
        <List.Item title="18:00-19:00" description={newPrices[426]} />
        <List.Item title="19:00-20:00" description={newPrices[427]} />
        <List.Item title="20:00-21:00" description={newPrices[428]} />
        <List.Item title="21:00-22:00" description={newPrices[429]} />
        <List.Item title="22:00-23:00" description={newPrices[430]} />
        <List.Item title="23:00-00:00" description={newPrices[431]} />
        <List.Item title={dates[18]} />
        <List.Item title="00:00-01:00" description={newPrices[432]} />
        <List.Item title="01:00-02:00" description={newPrices[433]} />
        <List.Item title="02:00-03:00" description={newPrices[434]} />
        <List.Item title="03:00-04:00" description={newPrices[435]} />
        <List.Item title="04:00-05:00" description={newPrices[436]} />
        <List.Item title="05:00-06:00" description={newPrices[437]} />
        <List.Item title="06:00-07:00" description={newPrices[438]} />
        <List.Item title="07:00-08:00" description={newPrices[439]} />
        <List.Item title="08:00-09:00" description={newPrices[440]} />
        <List.Item title="09:00-10:00" description={newPrices[441]} />
        <List.Item title="10:00-11:00" description={newPrices[442]} />
        <List.Item title="11:00-12:00" description={newPrices[443]} />
        <List.Item title="12:00-13:00" description={newPrices[444]} />
        <List.Item title="13:00-14:00" description={newPrices[445]} />
        <List.Item title="14:00-15:00" description={newPrices[456]} />
        <List.Item title="15:00-16:00" description={newPrices[447]} />
        <List.Item title="16:00-17:00" description={newPrices[448]} />
        <List.Item title="17:00-18:00" description={newPrices[449]} />
        <List.Item title="18:00-19:00" description={newPrices[450]} />
        <List.Item title="19:00-20:00" description={newPrices[451]} />
        <List.Item title="20:00-21:00" description={newPrices[452]} />
        <List.Item title="21:00-22:00" description={newPrices[453]} />
        <List.Item title="22:00-23:00" description={newPrices[454]} />
        <List.Item title="23:00-00:00" description={newPrices[455]} />
        <List.Item title={dates[19]} />
        <List.Item title="00:00-01:00" description={newPrices[457]} />
        <List.Item title="01:00-02:00" description={newPrices[457]} />
        <List.Item title="02:00-03:00" description={newPrices[458]} />
        <List.Item title="03:00-04:00" description={newPrices[459]} />
        <List.Item title="04:00-05:00" description={newPrices[460]} />
        <List.Item title="05:00-06:00" description={newPrices[461]} />
        <List.Item title="06:00-07:00" description={newPrices[462]} />
        <List.Item title="07:00-08:00" description={newPrices[463]} />
        <List.Item title="08:00-09:00" description={newPrices[464]} />
        <List.Item title="09:00-10:00" description={newPrices[465]} />
        <List.Item title="10:00-11:00" description={newPrices[466]} />
        <List.Item title="11:00-12:00" description={newPrices[467]} />
        <List.Item title="12:00-13:00" description={newPrices[468]} />
        <List.Item title="13:00-14:00" description={newPrices[469]} />
        <List.Item title="14:00-15:00" description={newPrices[470]} />
        <List.Item title="15:00-16:00" description={newPrices[471]} />
        <List.Item title="16:00-17:00" description={newPrices[472]} />
        <List.Item title="17:00-18:00" description={newPrices[473]} />
        <List.Item title="18:00-19:00" description={newPrices[474]} />
        <List.Item title="19:00-20:00" description={newPrices[475]} />
        <List.Item title="20:00-21:00" description={newPrices[476]} />
        <List.Item title="21:00-22:00" description={newPrices[477]} />
        <List.Item title="22:00-23:00" description={newPrices[478]} />
        <List.Item title="23:00-00:00" description={newPrices[479]} />
        <List.Item title={dates[20]} />
        <List.Item title="00:00-01:00" description={newPrices[480]} />
        <List.Item title="01:00-02:00" description={newPrices[481]} />
        <List.Item title="02:00-03:00" description={newPrices[482]} />
        <List.Item title="03:00-04:00" description={newPrices[483]} />
        <List.Item title="04:00-05:00" description={newPrices[484]} />
        <List.Item title="05:00-06:00" description={newPrices[485]} />
        <List.Item title="06:00-07:00" description={newPrices[486]} />
        <List.Item title="07:00-08:00" description={newPrices[487]} />
        <List.Item title="08:00-09:00" description={newPrices[488]} />
        <List.Item title="09:00-10:00" description={newPrices[489]} />
        <List.Item title="10:00-11:00" description={newPrices[490]} />
        <List.Item title="11:00-12:00" description={newPrices[491]} />
        <List.Item title="12:00-13:00" description={newPrices[492]} />
        <List.Item title="13:00-14:00" description={newPrices[493]} />
        <List.Item title="14:00-15:00" description={newPrices[494]} />
        <List.Item title="15:00-16:00" description={newPrices[495]} />
        <List.Item title="16:00-17:00" description={newPrices[496]} />
        <List.Item title="17:00-18:00" description={newPrices[497]} />
        <List.Item title="18:00-19:00" description={newPrices[498]} />
        <List.Item title="19:00-20:00" description={newPrices[499]} />
        <List.Item title="20:00-21:00" description={newPrices[500]} />
        <List.Item title="21:00-22:00" description={newPrices[501]} />
        <List.Item title="22:00-23:00" description={newPrices[502]} />
        <List.Item title="23:00-00:00" description={newPrices[503]} />
        <List.Item title={dates[21]} />
        <List.Item title="00:00-01:00" description={newPrices[504]} />
        <List.Item title="01:00-02:00" description={newPrices[505]} />
        <List.Item title="02:00-03:00" description={newPrices[506]} />
        <List.Item title="03:00-04:00" description={newPrices[507]} />
        <List.Item title="04:00-05:00" description={newPrices[508]} />
        <List.Item title="05:00-06:00" description={newPrices[509]} />
        <List.Item title="06:00-07:00" description={newPrices[510]} />
        <List.Item title="07:00-08:00" description={newPrices[511]} />
        <List.Item title="08:00-09:00" description={newPrices[512]} />
        <List.Item title="09:00-10:00" description={newPrices[513]} />
        <List.Item title="10:00-11:00" description={newPrices[514]} />
        <List.Item title="11:00-12:00" description={newPrices[515]} />
        <List.Item title="12:00-13:00" description={newPrices[516]} />
        <List.Item title="13:00-14:00" description={newPrices[517]} />
        <List.Item title="14:00-15:00" description={newPrices[518]} />
        <List.Item title="15:00-16:00" description={newPrices[519]} />
        <List.Item title="16:00-17:00" description={newPrices[520]} />
        <List.Item title="17:00-18:00" description={newPrices[521]} />
        <List.Item title="18:00-19:00" description={newPrices[522]} />
        <List.Item title="19:00-20:00" description={newPrices[523]} />
        <List.Item title="20:00-21:00" description={newPrices[524]} />
        <List.Item title="21:00-22:00" description={newPrices[525]} />
        <List.Item title="22:00-23:00" description={newPrices[526]} />
        <List.Item title="23:00-00:00" description={newPrices[527]} />
        <List.Item title={dates[22]} />
        <List.Item title="00:00-01:00" description={newPrices[528]} />
        <List.Item title="01:00-02:00" description={newPrices[529]} />
        <List.Item title="02:00-03:00" description={newPrices[530]} />
        <List.Item title="03:00-04:00" description={newPrices[531]} />
        <List.Item title="04:00-05:00" description={newPrices[532]} />
        <List.Item title="05:00-06:00" description={newPrices[533]} />
        <List.Item title="06:00-07:00" description={newPrices[534]} />
        <List.Item title="07:00-08:00" description={newPrices[535]} />
        <List.Item title="08:00-09:00" description={newPrices[536]} />
        <List.Item title="09:00-10:00" description={newPrices[537]} />
        <List.Item title="10:00-11:00" description={newPrices[538]} />
        <List.Item title="11:00-12:00" description={newPrices[539]} />
        <List.Item title="12:00-13:00" description={newPrices[540]} />
        <List.Item title="13:00-14:00" description={newPrices[541]} />
        <List.Item title="14:00-15:00" description={newPrices[542]} />
        <List.Item title="15:00-16:00" description={newPrices[543]} />
        <List.Item title="16:00-17:00" description={newPrices[544]} />
        <List.Item title="17:00-18:00" description={newPrices[545]} />
        <List.Item title="18:00-19:00" description={newPrices[546]} />
        <List.Item title="19:00-20:00" description={newPrices[547]} />
        <List.Item title="20:00-21:00" description={newPrices[548]} />
        <List.Item title="21:00-22:00" description={newPrices[549]} />
        <List.Item title="22:00-23:00" description={newPrices[550]} />
        <List.Item title="23:00-00:00" description={newPrices[551]} />
        <List.Item title={dates[23]} />
        <List.Item title="00:00-01:00" description={newPrices[552]} />
        <List.Item title="01:00-02:00" description={newPrices[553]} />
        <List.Item title="02:00-03:00" description={newPrices[554]} />
        <List.Item title="03:00-04:00" description={newPrices[555]} />
        <List.Item title="04:00-05:00" description={newPrices[556]} />
        <List.Item title="05:00-06:00" description={newPrices[557]} />
        <List.Item title="06:00-07:00" description={newPrices[558]} />
        <List.Item title="07:00-08:00" description={newPrices[559]} />
        <List.Item title="08:00-09:00" description={newPrices[560]} />
        <List.Item title="09:00-10:00" description={newPrices[561]} />
        <List.Item title="10:00-11:00" description={newPrices[562]} />
        <List.Item title="11:00-12:00" description={newPrices[563]} />
        <List.Item title="12:00-13:00" description={newPrices[564]} />
        <List.Item title="13:00-14:00" description={newPrices[565]} />
        <List.Item title="14:00-15:00" description={newPrices[566]} />
        <List.Item title="15:00-16:00" description={newPrices[567]} />
        <List.Item title="16:00-17:00" description={newPrices[568]} />
        <List.Item title="17:00-18:00" description={newPrices[569]} />
        <List.Item title="18:00-19:00" description={newPrices[570]} />
        <List.Item title="19:00-20:00" description={newPrices[571]} />
        <List.Item title="20:00-21:00" description={newPrices[572]} />
        <List.Item title="21:00-22:00" description={newPrices[573]} />
        <List.Item title="22:00-23:00" description={newPrices[574]} />
        <List.Item title="23:00-00:00" description={newPrices[575]} />
        <List.Item title={dates[24]} />
        <List.Item title="00:00-01:00" description={newPrices[576]} />
        <List.Item title="01:00-02:00" description={newPrices[577]} />
        <List.Item title="02:00-03:00" description={newPrices[578]} />
        <List.Item title="03:00-04:00" description={newPrices[579]} />
        <List.Item title="04:00-05:00" description={newPrices[580]} />
        <List.Item title="05:00-06:00" description={newPrices[581]} />
        <List.Item title="06:00-07:00" description={newPrices[582]} />
        <List.Item title="07:00-08:00" description={newPrices[583]} />
        <List.Item title="08:00-09:00" description={newPrices[584]} />
        <List.Item title="09:00-10:00" description={newPrices[585]} />
        <List.Item title="10:00-11:00" description={newPrices[586]} />
        <List.Item title="11:00-12:00" description={newPrices[587]} />
        <List.Item title="12:00-13:00" description={newPrices[588]} />
        <List.Item title="13:00-14:00" description={newPrices[589]} />
        <List.Item title="14:00-15:00" description={newPrices[590]} />
        <List.Item title="15:00-16:00" description={newPrices[591]} />
        <List.Item title="16:00-17:00" description={newPrices[592]} />
        <List.Item title="17:00-18:00" description={newPrices[593]} />
        <List.Item title="18:00-19:00" description={newPrices[594]} />
        <List.Item title="19:00-20:00" description={newPrices[595]} />
        <List.Item title="20:00-21:00" description={newPrices[596]} />
        <List.Item title="21:00-22:00" description={newPrices[597]} />
        <List.Item title="22:00-23:00" description={newPrices[598]} />
        <List.Item title="23:00-00:00" description={newPrices[599]} />
        <List.Item title={dates[25]} />
        <List.Item title="00:00-01:00" description={newPrices[600]} />
        <List.Item title="01:00-02:00" description={newPrices[601]} />
        <List.Item title="02:00-03:00" description={newPrices[602]} />
        <List.Item title="03:00-04:00" description={newPrices[603]} />
        <List.Item title="04:00-05:00" description={newPrices[604]} />
        <List.Item title="05:00-06:00" description={newPrices[605]} />
        <List.Item title="06:00-07:00" description={newPrices[606]} />
        <List.Item title="07:00-08:00" description={newPrices[607]} />
        <List.Item title="08:00-09:00" description={newPrices[608]} />
        <List.Item title="09:00-10:00" description={newPrices[609]} />
        <List.Item title="10:00-11:00" description={newPrices[610]} />
        <List.Item title="11:00-12:00" description={newPrices[611]} />
        <List.Item title="12:00-13:00" description={newPrices[612]} />
        <List.Item title="13:00-14:00" description={newPrices[613]} />
        <List.Item title="14:00-15:00" description={newPrices[614]} />
        <List.Item title="15:00-16:00" description={newPrices[615]} />
        <List.Item title="16:00-17:00" description={newPrices[616]} />
        <List.Item title="17:00-18:00" description={newPrices[617]} />
        <List.Item title="18:00-19:00" description={newPrices[618]} />
        <List.Item title="19:00-20:00" description={newPrices[619]} />
        <List.Item title="20:00-21:00" description={newPrices[620]} />
        <List.Item title="21:00-22:00" description={newPrices[621]} />
        <List.Item title="22:00-23:00" description={newPrices[622]} />
        <List.Item title="23:00-00:00" description={newPrices[623]} />
        <List.Item title={dates[26]} />
        <List.Item title="00:00-01:00" description={newPrices[624]} />
        <List.Item title="01:00-02:00" description={newPrices[625]} />
        <List.Item title="02:00-03:00" description={newPrices[626]} />
        <List.Item title="03:00-04:00" description={newPrices[627]} />
        <List.Item title="04:00-05:00" description={newPrices[628]} />
        <List.Item title="05:00-06:00" description={newPrices[629]} />
        <List.Item title="06:00-07:00" description={newPrices[630]} />
        <List.Item title="07:00-08:00" description={newPrices[631]} />
        <List.Item title="08:00-09:00" description={newPrices[632]} />
        <List.Item title="09:00-10:00" description={newPrices[633]} />
        <List.Item title="10:00-11:00" description={newPrices[634]} />
        <List.Item title="11:00-12:00" description={newPrices[635]} />
        <List.Item title="12:00-13:00" description={newPrices[636]} />
        <List.Item title="13:00-14:00" description={newPrices[637]} />
        <List.Item title="14:00-15:00" description={newPrices[638]} />
        <List.Item title="15:00-16:00" description={newPrices[639]} />
        <List.Item title="16:00-17:00" description={newPrices[640]} />
        <List.Item title="17:00-18:00" description={newPrices[641]} />
        <List.Item title="18:00-19:00" description={newPrices[642]} />
        <List.Item title="19:00-20:00" description={newPrices[643]} />
        <List.Item title="20:00-21:00" description={newPrices[644]} />
        <List.Item title="21:00-22:00" description={newPrices[645]} />
        <List.Item title="22:00-23:00" description={newPrices[646]} />
        <List.Item title="23:00-00:00" description={newPrices[647]} />
        <List.Item title={dates[27]} />
        <List.Item title="00:00-01:00" description={newPrices[648]} />
        <List.Item title="01:00-02:00" description={newPrices[649]} />
        <List.Item title="02:00-03:00" description={newPrices[650]} />
        <List.Item title="03:00-04:00" description={newPrices[651]} />
        <List.Item title="04:00-05:00" description={newPrices[652]} />
        <List.Item title="05:00-06:00" description={newPrices[653]} />
        <List.Item title="06:00-07:00" description={newPrices[654]} />
        <List.Item title="07:00-08:00" description={newPrices[655]} />
        <List.Item title="08:00-09:00" description={newPrices[656]} />
        <List.Item title="09:00-10:00" description={newPrices[657]} />
        <List.Item title="10:00-11:00" description={newPrices[658]} />
        <List.Item title="11:00-12:00" description={newPrices[659]} />
        <List.Item title="12:00-13:00" description={newPrices[660]} />
        <List.Item title="13:00-14:00" description={newPrices[661]} />
        <List.Item title="14:00-15:00" description={newPrices[662]} />
        <List.Item title="15:00-16:00" description={newPrices[663]} />
        <List.Item title="16:00-17:00" description={newPrices[664]} />
        <List.Item title="17:00-18:00" description={newPrices[665]} />
        <List.Item title="18:00-19:00" description={newPrices[666]} />
        <List.Item title="19:00-20:00" description={newPrices[667]} />
        <List.Item title="20:00-21:00" description={newPrices[668]} />
        <List.Item title="21:00-22:00" description={newPrices[669]} />
        <List.Item title="22:00-23:00" description={newPrices[670]} />
        <List.Item title="23:00-00:00" description={newPrices[671]} />
        <List.Item title={dates[28]} />
        <List.Item title="00:00-01:00" description={newPrices[672]} />
        <List.Item title="01:00-02:00" description={newPrices[673]} />
        <List.Item title="02:00-03:00" description={newPrices[674]} />
        <List.Item title="03:00-04:00" description={newPrices[675]} />
        <List.Item title="04:00-05:00" description={newPrices[676]} />
        <List.Item title="05:00-06:00" description={newPrices[677]} />
        <List.Item title="06:00-07:00" description={newPrices[678]} />
        <List.Item title="07:00-08:00" description={newPrices[679]} />
        <List.Item title="08:00-09:00" description={newPrices[680]} />
        <List.Item title="09:00-10:00" description={newPrices[681]} />
        <List.Item title="10:00-11:00" description={newPrices[682]} />
        <List.Item title="11:00-12:00" description={newPrices[683]} />
        <List.Item title="12:00-13:00" description={newPrices[684]} />
        <List.Item title="13:00-14:00" description={newPrices[685]} />
        <List.Item title="14:00-15:00" description={newPrices[686]} />
        <List.Item title="15:00-16:00" description={newPrices[687]} />
        <List.Item title="16:00-17:00" description={newPrices[688]} />
        <List.Item title="17:00-18:00" description={newPrices[689]} />
        <List.Item title="18:00-19:00" description={newPrices[690]} />
        <List.Item title="19:00-20:00" description={newPrices[691]} />
        <List.Item title="20:00-21:00" description={newPrices[692]} />
        <List.Item title="21:00-22:00" description={newPrices[693]} />
        <List.Item title="22:00-23:00" description={newPrices[694]} />
        <List.Item title="23:00-00:00" description={newPrices[695]} />
        <List.Item title={dates[29]} />
        <List.Item title="00:00-01:00" description={newPrices[696]} />
        <List.Item title="01:00-02:00" description={newPrices[697]} />
        <List.Item title="02:00-03:00" description={newPrices[698]} />
        <List.Item title="03:00-04:00" description={newPrices[699]} />
        <List.Item title="04:00-05:00" description={newPrices[700]} />
        <List.Item title="05:00-06:00" description={newPrices[701]} />
        <List.Item title="06:00-07:00" description={newPrices[702]} />
        <List.Item title="07:00-08:00" description={newPrices[703]} />
        <List.Item title="08:00-09:00" description={newPrices[704]} />
        <List.Item title="09:00-10:00" description={newPrices[705]} />
        <List.Item title="10:00-11:00" description={newPrices[706]} />
        <List.Item title="11:00-12:00" description={newPrices[707]} />
        <List.Item title="12:00-13:00" description={newPrices[708]} />
        <List.Item title="13:00-14:00" description={newPrices[709]} />
        <List.Item title="14:00-15:00" description={newPrices[710]} />
        <List.Item title="15:00-16:00" description={newPrices[711]} />
        <List.Item title="16:00-17:00" description={newPrices[712]} />
        <List.Item title="17:00-18:00" description={newPrices[713]} />
        <List.Item title="18:00-19:00" description={newPrices[714]} />
        <List.Item title="19:00-20:00" description={newPrices[715]} />
        <List.Item title="20:00-21:00" description={newPrices[716]} />
        <List.Item title="21:00-22:00" description={newPrices[717]} />
        <List.Item title="22:00-23:00" description={newPrices[718]} />
        <List.Item title="23:00-00:00" description={newPrices[719]} />
      </List.Accordion>
    </List.Section>
  );
};

export default MonthList;