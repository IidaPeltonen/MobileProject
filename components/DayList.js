import { Divider, List } from 'react-native-paper';
import { useState } from 'react';
import style from '../style/style';

const DayList = ({ newPrices, dates, avgs }) => {
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
      {/* style={{ backgroundColor: '#808080' }} descriptionStyle={style.titleDescriptionStyle} > */}

        <List.Item title={dates}  description={'Päivän ka: ' + avgs[0] + 'snt/kWh'} titleStyle={style.titleStyle} style={{ backgroundColor: '#808080' }} descriptionStyle={style.titleDescriptionStyle} />
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
    </List.Section>
  );
};

export default DayList;