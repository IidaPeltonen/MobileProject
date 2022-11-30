import { List } from 'react-native-paper';
import { useState } from 'react';

const Weeklist = ({newPrices, dates}) => {
  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded(!expanded);

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
        <List.Item title="21:00-22:00" description={newPrices[94]} />
        <List.Item title="22:00-23:00" description={newPrices[95]} />
        <List.Item title="23:00-00:00" description={newPrices[96]} />
        <List.Item title={dates[4]} />
        <List.Item title="00:00-01:00" description={newPrices[97]} />
        <List.Item title="01:00-02:00" description={newPrices[98]} />
        <List.Item title="02:00-03:00" description={newPrices[99]} />
        <List.Item title="03:00-04:00" description={newPrices[100]} />
        <List.Item title="04:00-05:00" description={newPrices[101]} />
        <List.Item title="05:00-06:00" description={newPrices[102]} />
        <List.Item title="06:00-07:00" description={newPrices[103]} />
        <List.Item title="07:00-08:00" description={newPrices[104]} />
        <List.Item title="08:00-09:00" description={newPrices[105]} />
        <List.Item title="09:00-10:00" description={newPrices[106]} />
        <List.Item title="10:00-11:00" description={newPrices[107]} />
        <List.Item title="11:00-12:00" description={newPrices[108]} />
        <List.Item title="12:00-13:00" description={newPrices[109]} />
        <List.Item title="13:00-14:00" description={newPrices[110]} />
        <List.Item title="14:00-15:00" description={newPrices[111]} />
        <List.Item title="15:00-16:00" description={newPrices[112]} />
        <List.Item title="16:00-17:00" description={newPrices[113]} />
        <List.Item title="17:00-18:00" description={newPrices[114]} />
        <List.Item title="18:00-19:00" description={newPrices[115]} />
        <List.Item title="19:00-20:00" description={newPrices[116]} />
        <List.Item title="20:00-21:00" description={newPrices[117]} />
        <List.Item title="21:00-22:00" description={newPrices[118]} />
        <List.Item title="22:00-23:00" description={newPrices[119]} />
        <List.Item title="23:00-00:00" description={newPrices[120]} />
        <List.Item title={dates[5]} />
        <List.Item title="00:00-01:00" description={newPrices[121]} />
        <List.Item title="01:00-02:00" description={newPrices[122]} />
        <List.Item title="02:00-03:00" description={newPrices[123]} />
        <List.Item title="03:00-04:00" description={newPrices[124]} />
        <List.Item title="04:00-05:00" description={newPrices[125]} />
        <List.Item title="05:00-06:00" description={newPrices[126]} />
        <List.Item title="06:00-07:00" description={newPrices[127]} />
        <List.Item title="07:00-08:00" description={newPrices[128]} />
        <List.Item title="08:00-09:00" description={newPrices[129]} />
        <List.Item title="09:00-10:00" description={newPrices[130]} />
        <List.Item title="10:00-11:00" description={newPrices[131]} />
        <List.Item title="11:00-12:00" description={newPrices[132]} />
        <List.Item title="12:00-13:00" description={newPrices[133]} />
        <List.Item title="13:00-14:00" description={newPrices[134]} />
        <List.Item title="14:00-15:00" description={newPrices[135]} />
        <List.Item title="15:00-16:00" description={newPrices[136]} />
        <List.Item title="16:00-17:00" description={newPrices[137]} />
        <List.Item title="17:00-18:00" description={newPrices[138]} />
        <List.Item title="18:00-19:00" description={newPrices[139]} />
        <List.Item title="19:00-20:00" description={newPrices[140]} />
        <List.Item title="20:00-21:00" description={newPrices[141]} />
        <List.Item title="21:00-22:00" description={newPrices[142]} />
        <List.Item title="22:00-23:00" description={newPrices[143]} />
        <List.Item title="23:00-00:00" description={newPrices[144]} />
        <List.Item title={dates[6]} />
        <List.Item title="00:00-01:00" description={newPrices[145]} />
        <List.Item title="01:00-02:00" description={newPrices[146]} />
        <List.Item title="02:00-03:00" description={newPrices[147]} />
        <List.Item title="03:00-04:00" description={newPrices[148]} />
        <List.Item title="04:00-05:00" description={newPrices[149]} />
        <List.Item title="05:00-06:00" description={newPrices[150]} />
        <List.Item title="06:00-07:00" description={newPrices[151]} />
        <List.Item title="07:00-08:00" description={newPrices[152]} />
        <List.Item title="08:00-09:00" description={newPrices[153]} />
        <List.Item title="09:00-10:00" description={newPrices[154]} />
        <List.Item title="10:00-11:00" description={newPrices[155]} />
        <List.Item title="11:00-12:00" description={newPrices[156]} />
        <List.Item title="12:00-13:00" description={newPrices[157]} />
        <List.Item title="13:00-14:00" description={newPrices[158]} />
        <List.Item title="14:00-15:00" description={newPrices[159]} />
        <List.Item title="15:00-16:00" description={newPrices[160]} />
        <List.Item title="16:00-17:00" description={newPrices[161]} />
        <List.Item title="17:00-18:00" description={newPrices[162]} />
        <List.Item title="18:00-19:00" description={newPrices[163]} />
        <List.Item title="19:00-20:00" description={newPrices[164]} />
        <List.Item title="20:00-21:00" description={newPrices[165]} />
        <List.Item title="21:00-22:00" description={newPrices[166]} />
        <List.Item title="22:00-23:00" description={newPrices[167]} />
      </List.Accordion>
    </List.Section>
  );
};
export default Weeklist;