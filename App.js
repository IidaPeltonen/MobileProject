import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';


//testi, entsoeu
const URL2 = 'https://web-api.tp.entsoe.eu/api?securityToken=';
const APIKEY2 = '4d24ca50-7859-4d0d-97c2-de16d61007af';
const loppu = '&documentType=A65&processType=A16&outBiddingZone_Domain=10YCZ-CEPS-----N&periodStart=201512312300&periodEnd=201612312300'

export default function App() {
  const [data, setData] = useState([])

 // GET /api?securityToken=TOKEN (other parameters omitted)

 //https://web-api.tp.entsoe.eu/api?securityToken=MYTOKEN&documentType=A65&processType=A16&outBiddingZone_Domain=10YCZ-CEPS-----N&periodStart=201512312300&periodEnd=201612312300



  useEffect(() => {
    fetch (URL2 + APIKEY2 + loppu ,{
      headers: {
        'method': 'GET',
        'securityToken': APIKEY2,
        'DocumentType': 'A44',
        'Content-Type': 'application/xml'
      },
      parameter: {
        //'TimeInterval': '2016-01-01T00:00Z/2016-01-02T00:00Z',
        'periodStart': '201601010000',
        'periodEnd': '201701010000',
      }
    })

    .then(response => response.xml())
    .then((xml) => {
      console.log(xml)
    
      setData(xml)
    }, (error) => {
      console.log(error)
    })
  }, []);
     
  return (
    <View style={styles.container}> 
    {
      data && data.length>0 && data.map((item)=><Text>{item.value}</Text>)
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

