import { List } from 'react-native-paper';
import { useState } from 'react';
import style from '../style/style';

const YearList = ({newPrices, dates}) => {
  console.log('YearList')
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
      <List.Accordion
        title={dates[0]} descriptionStyle={style.descriptionStyle} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }}>
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[24] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[27] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[26] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[25] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[28] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[29] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[30] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[31] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[32] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[33] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[34] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[35] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[36] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[37] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[38] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[39] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[40] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[41] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[42] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[43] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[44] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[45] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[46] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[47] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion>
       <List.Accordion
          title={dates[2]} descriptionStyle={style.descriptionStyle} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }}>
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[48] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[49] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[50] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[51] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[52] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[53] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[54] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[55] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[56] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[57] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[58] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[59] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[60] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[61] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[62] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[63] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[64] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[65] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[66] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[67] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[68] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[69] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[70] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[71] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion>
        <List.Accordion
          title={dates[3]} descriptionStyle={style.descriptionStyle} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }}>
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[72] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[73] + 'snt/kWh'} descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[74] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[75] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[76] + 'snt/kWh' }  descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[77] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[78] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[79] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[80] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[81] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[82] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[83] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[84] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[85] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[86] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[87] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[88] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[89] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[90] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[91] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[92] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[93] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[94] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[95] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion>
      <List.Accordion
          title={dates[4]} descriptionStyle={style.descriptionStyle} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }}>
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[96] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[97] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[98] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[99] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[100] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[101] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[102] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[103] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[104] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[105] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[106] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[107] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[108] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[109] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[110] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[111] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[112] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[113] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[114] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[115] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[116] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[117] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[118] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[119] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion>
    <List.Accordion
          title={dates[5]} descriptionStyle={style.descriptionStyle} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }}>
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[120] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[121] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[122] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[123] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[124] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[125] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[126] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[127] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[128] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[129] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[130] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[131] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[132] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[133] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[134] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[135] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[136] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[137] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[138] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[139] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[140] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[141] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[142] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[143] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion>
         <List.Accordion
          title={dates[6]} descriptionStyle={style.descriptionStyle} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }}>
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[144] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[145] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[146] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[147] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[148] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[149] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[150] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[151] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[152] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[153] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[154] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[155] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[156] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[157] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[158] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[159] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[160] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[161] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[162] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[163] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[164] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[165] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[166] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[167] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion>
       <List.Accordion
          title={dates[7]} descriptionStyle={style.descriptionStyle} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }}>
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[168] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[169] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[170] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[171] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[172] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[173] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[174] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[175] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[176] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[177] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[178] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[179] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[180] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[181] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[182] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[183] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[184] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[185] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[186] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[187] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[188] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[189] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[190] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[191] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion>
             <List.Accordion
          title={dates[8]} descriptionStyle={style.descriptionStyle} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }}>
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[192] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[193] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[194] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[195] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[196] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[197] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[198] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[199] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[200] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[201] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[202] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[203] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[204] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[205] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[206] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[207] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[208] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[209] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[210] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[211] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[212] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[213] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[214] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[215] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion>
        <List.Accordion
          title={dates[9]} descriptionStyle={style.descriptionStyle} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }}>
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[216] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[217] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[218] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[219] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[220] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[221] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[222] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[223] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[224] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[225] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[226] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[227] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[228] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[229] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[230] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[231] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[232] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[233] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[234] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[235] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[236] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[237] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[238] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[239] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion>
       <List.Accordion
          title={dates[10]} descriptionStyle={style.descriptionStyle} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }}>
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[240] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[241] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[242] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[243] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[244] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[245] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[246] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[247] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[248] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[249] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[250] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[251] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[252] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[253] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[254] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[255] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[256] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[257] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[258] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[259] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[260] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[261] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[262] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[263] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion>
        <List.Accordion
          title={dates[11]} descriptionStyle={style.descriptionStyle} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }}>
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[264] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[265] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[266] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[267] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[268] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[269] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[270] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[271] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[272] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[273]+ 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} /> 
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[274] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[275] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[276] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[277] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[278] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[279] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[280] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[281] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[282] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[283]  + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[284] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[285] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[286] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[287] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion>
       <List.Accordion
          title={dates[12]} descriptionStyle={style.descriptionStyle} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }}>
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[288]} />
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[289] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[290] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[291] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[292] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[293] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[294] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[295] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[296] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[297] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[298] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[299] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[300] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[301] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[302] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[303] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[304] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[305] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[306] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[307] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[308] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[309] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[310] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[311] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion>
        <List.Accordion
          title={dates[13]} descriptionStyle={style.descriptionStyle} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }}>
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[312] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[313] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[314] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[315] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[316] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[317] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[318] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[319] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[320] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[321] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[322] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[323] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[324] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[325] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[326] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[327] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[328] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[329] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[330] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[331] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[332] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[333] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[334] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[335] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion>
        <List.Accordion
          title={dates[14]} descriptionStyle={style.descriptionStyle} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }}>
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[336] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[337] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[338] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[339] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[340] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[341] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[342] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[343] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[344] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[345] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[346] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[347] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[348] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[349] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[350] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[351] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[352] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[353] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[354] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[355] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[356] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[357] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[358] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[359] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion>
        <List.Accordion
          title={dates[15]} descriptionStyle={style.descriptionStyle} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }}>
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[360] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[361] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[362] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[363] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[364] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[365] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[366] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[367] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[368] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[369] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[370] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[371] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[372] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[373] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[374] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[375] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[376] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[377] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[378] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[379] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[380] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[381] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[382] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[383] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion>
        <List.Accordion
         title={dates[16]} descriptionStyle={style.descriptionStyle} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }}>
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[384] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[385] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[386] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[387]+ 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[389]+ 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[390] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[388] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[391] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[392] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[393] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[394]+ 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[395] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[396] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[397] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[398] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[399] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[400] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[401] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[402] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[403] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[404] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[405] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[406] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[407] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion>
       <List.Accordion
          title={dates[17]} descriptionStyle={style.descriptionStyle} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }}>
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[408] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[409] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[410] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[411] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[412] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[413] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[414] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[415] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[416] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[417] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[418] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[419] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[420] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[421] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[422] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[423] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[424] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[425] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[426] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[427] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[428] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[429] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[430] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[431] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion>
        <List.Accordion
          title={dates[18]} descriptionStyle={style.descriptionStyle} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }}>
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[432] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[433] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[434] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[435] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[436] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[437] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[438] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[439] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[440] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[441] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[442] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[443] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[444] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[445] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[456] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[447] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[448] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[449] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[450] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[451] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[452] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[453] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[454] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[455] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion>
        <List.Accordion
          title={dates[19]} descriptionStyle={style.descriptionStyle} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }}>
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[457] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[457] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[458] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[459] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[460] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[461] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[462] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[463] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[464] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[465] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[466] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[467] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[468] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[469] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[470] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[471] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[472] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[473] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[474] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[475] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[476] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[477] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[478] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[479] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion>
     <List.Accordion
          title={dates[20]} descriptionStyle={style.descriptionStyle} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }}>
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[480] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[481] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[482] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[483] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[484] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[485] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[486] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[487] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[488] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[489] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[490] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[491] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[492] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[493] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[494] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[495] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[496] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[497] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[498] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[499] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[500] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[501] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[502] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[503] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion>
           <List.Accordion
          title={dates[21]} descriptionStyle={style.descriptionStyle} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }}>
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[504] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[505] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[506] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[507] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[508] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[509] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[510] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[511] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[512] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[513] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[514] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[515] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[516] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[517] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[518] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[519] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[520] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[521] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[522] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[523] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[524] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[525] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[526] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[527] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion>
       <List.Accordion
          title={dates[22]} descriptionStyle={style.descriptionStyle} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }}>
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[528] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[529] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[530] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[531] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[532] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[533] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[534] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[535] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[536] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[537] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[538] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[539] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[540] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[541] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[542] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[543] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[544] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[545] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[546] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[547] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[548] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[549] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[550] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[551] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion>
         <List.Accordion
          title={dates[23]} descriptionStyle={style.descriptionStyle} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }}>
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[552] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[553] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[554] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[555] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[556] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[557] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[558] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[559] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[560] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[561] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[562] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[563] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[564] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[565] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[566] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[567] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[568] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[569] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[570] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[571] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[572] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[573] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[574] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[575] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion>
        <List.Accordion
          title={dates[24]} descriptionStyle={style.descriptionStyle} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }}>
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[576] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[577] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[578] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[579] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[580] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[581] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[582] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[583] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[584] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[585] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[586] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[587] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[588] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[589] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[590] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[591] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[592] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[593] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[594] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[595] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[596] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[597] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[598] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[599] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion>
        <List.Accordion
          title={dates[25]} descriptionStyle={style.descriptionStyle} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }}>
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[600] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[601] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[602] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[603] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[604] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[605] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[606] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[607] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[608] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[609] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[610] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[611] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[612] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[613] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[614] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[615] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[616] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[617] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[618] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[619] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[620] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[621] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[622] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[623] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion>
       <List.Accordion
          title={dates[26]} descriptionStyle={style.descriptionStyle} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }}>
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[624] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[625] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[626] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[627] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[628] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[629] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[630] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[631] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[632] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[633] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[634] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[635] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[636] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[637] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[638] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[639] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[640] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[641] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[642] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[643] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[644] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[645] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[646] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[647] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion>
     <List.Accordion
          title={dates[27]} descriptionStyle={style.descriptionStyle} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }}>
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[648] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[649] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[650] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[651] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[652] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[653] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[654] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[655] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[656] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[657] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[658] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[659] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[660] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[661] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[662] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[663] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[664] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[665] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[666] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[667] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[668] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[669] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[670] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[671] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion>
         <List.Accordion
          title={dates[28]} descriptionStyle={style.descriptionStyle} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }}>
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[672] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[673] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[674] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[675] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[676] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[677] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[678] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[679] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[680] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[681] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[682] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[683] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[684] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[685] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[686] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[687] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[688] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[689] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[690] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[691] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[692] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[693] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[694] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[695] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion>
        <List.Accordion
          title={dates[29]} descriptionStyle={style.descriptionStyle} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }}>
          <List.Item title={times[0]} titleStyle={style.titleStyleItems} description={newPrices[696] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[1]} titleStyle={style.titleStyleItems} description={newPrices[697] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[2]} titleStyle={style.titleStyleItems} description={newPrices[698] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[3]} titleStyle={style.titleStyleItems} description={newPrices[699] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[4]} titleStyle={style.titleStyleItems} description={newPrices[700] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[5]} titleStyle={style.titleStyleItems} description={newPrices[701] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[6]} titleStyle={style.titleStyleItems} description={newPrices[702] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[7]} titleStyle={style.titleStyleItems} description={newPrices[703] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[8]} titleStyle={style.titleStyleItems} description={newPrices[704] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[9]} titleStyle={style.titleStyleItems} description={newPrices[705] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[10]} titleStyle={style.titleStyleItems} description={newPrices[706] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[11]} titleStyle={style.titleStyleItems} description={newPrices[707] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[12]} titleStyle={style.titleStyleItems} description={newPrices[708] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[13]} titleStyle={style.titleStyleItems} description={newPrices[709] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[14]} titleStyle={style.titleStyleItems} description={newPrices[710] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[15]} titleStyle={style.titleStyleItems} description={newPrices[711] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[16]} titleStyle={style.titleStyleItems} description={newPrices[712] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[17]} titleStyle={style.titleStyleItems} description={newPrices[713] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[18]} titleStyle={style.titleStyleItems} description={newPrices[714] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[19]} titleStyle={style.titleStyleItems} description={newPrices[715] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[20]} titleStyle={style.titleStyleItems} description={newPrices[716] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[21]} titleStyle={style.titleStyleItems} description={newPrices[717] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[22]} titleStyle={style.titleStyleItems} description={newPrices[718] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
          <List.Item title={times[23]} titleStyle={style.titleStyleItems} description={newPrices[719] + 'snt/kWh' } descriptionStyle={style.descriptionStyleItems} />
        </List.Accordion> 
      </List.Accordion>
    </List.Section>
  );
};

export default YearList;