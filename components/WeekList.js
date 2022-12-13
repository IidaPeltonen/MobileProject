import { Divider, List } from 'react-native-paper';
import { useState } from 'react';
import style from '../style/style';

const Weeklist = ({ newPrices, dates, avgs }) => {
  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded(!expanded);

  const times = ["00:00-01:00", "01:00-02:00", "02:00-03:00", "03:00-04:00", "04:00-05:00", "05:00-06:00",
    "06:00-07:00", "07:00-08:00", "08:00-09:00", "09:00-10:00", "10:00-11:00", "11:00-12:00", "12:00-13:00",
    "13:00-14:00", "14:00-15:00", "15:00-16:00", "16:00-17:00", "17:00-18:00", "18:00-19:00", "19:00-20:00",
    "20:00-21:00", "21:00-22:00", "22:00-23:00", "23:00-00:00"]

  return (
    <List.Section title="">
      <List.Accordion
        title="Näytä tuntihinnat" descriptionStyle={style.descriptionStyle} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }}>
          <Divider style={{backgroundColor: '#2B2B2B' }}/>
        <List.Accordion
          title={dates[0]} description={'Päivän ka: ' + avgs[0] + 'snt/kWh'} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }} descriptionStyle={style.titleDescriptionStyle} >
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[0] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[1] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[2] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[3] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[4] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[5] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[6] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[7] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[8] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[9] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[10] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[11] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[12] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[13] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[14] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[15] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[16] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[17] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[18] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[19] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[20] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[21] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[22] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[23] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
        </List.Accordion>
        <Divider style={{backgroundColor: '#2B2B2B' }}/>
        <List.Accordion
          title={dates[1]} description={'Päivän ka: ' + avgs[1] + 'snt/kWh'} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }} descriptionStyle={style.titleDescriptionStyle} >
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[24] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[27] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[26] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[25] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[28] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[29] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[30] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[31] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[32] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[33] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[34] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[35] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[36] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[37] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[38] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[39] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[40] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[41] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[42] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[43] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[44] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[45] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[46] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[47] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion>
        <Divider style={{backgroundColor: '#2B2B2B' }}/>
        <List.Accordion
          title={dates[2]} description={'Päivän ka: ' + avgs[2] + 'snt/kWh'} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }} descriptionStyle={style.titleDescriptionStyle} >
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[48] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[49] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[50] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[51] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[52] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[53] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[54] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[55] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[56] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[57] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[58] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[59] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[60] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[61] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[62] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[63] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[64] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[65] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[66] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[67] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[68] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[69] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[70] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[71] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
        </List.Accordion>
        <Divider style={{backgroundColor: '#2B2B2B' }}/>
        <List.Accordion
          title={dates[3]} description={'Päivän ka: ' + avgs[3] + 'snt/kWh'} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }} descriptionStyle={style.titleDescriptionStyle} >
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[72] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[73] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[74] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[75] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[76] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[77] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[78] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[79] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[80] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[81] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[82] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[83] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[84] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[85] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[86] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[87] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[88] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[89] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[90] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[91] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[92] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[93] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[94] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[95] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion>
        <Divider style={{backgroundColor: '#2B2B2B' }}/>
        <List.Accordion
          title={dates[4]} description={'Päivän ka: ' + avgs[4] + 'snt/kWh'} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }} descriptionStyle={style.titleDescriptionStyle} >
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[96] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[97] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[98] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[99] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[100] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[101] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[102] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[103] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[104] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[105] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[106] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[107] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[108] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[109] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[110] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[111] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[112] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[113] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[114] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[115] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[116] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[117] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[118] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[119] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion>
        <Divider style={{backgroundColor: '#2B2B2B' }}/>
        <List.Accordion
          title={dates[5]} description={'Päivän ka: ' + avgs[5] + 'snt/kWh'} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }} descriptionStyle={style.titleDescriptionStyle} >
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[120] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[121] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[122] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[123] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[124] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[125] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[126] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[127] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[128] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[129] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[130] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[131] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[132] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[133] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[134] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[135] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[136] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[137] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[138] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[139] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[140] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[141] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[142] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[143] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
        </List.Accordion>
        <Divider style={{backgroundColor: '#2B2B2B' }}/>
        <List.Accordion
          title={dates[6]} description={'Päivän ka: ' + avgs[6] + 'snt/kWh'} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }} descriptionStyle={style.titleDescriptionStyle} >
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[144] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[145] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[146] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[147] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[148] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[149] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[150] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[151] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[152] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[153] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[154] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[155] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[156] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[157] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[158] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[159] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[160] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[161] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[162] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[163] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[164] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[165] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[166] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[167] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <Divider style={{backgroundColor: 'grey' }}/>
        </List.Accordion>
        <Divider style={{backgroundColor: '#2B2B2B' }}/>
      </List.Accordion>
    </List.Section>
  );
};
export default Weeklist;