import { View } from 'react-native';
import Header from "./components/Header";
import Elepricenow from "./components/Elepricenow";
import ElediagramsDay from "./components/ElediagramsDay";
import ElediagramsWeek from "./components/ElediagramsWeek";
import ElediagramsMonth from "./components/ElediagramsMonth";
import ElediagramsYear from "./components/ElediagramsYear";
import Footer from "./components/Footer"; 
import styles from './style/style'

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      {/* <Elepricenow></Elepricenow> */}
      {/* <ElediagramsDay></ElediagramsDay> */}
      <ElediagramsWeek></ElediagramsWeek>
      {/* <ElediagramsMonth></ElediagramsMonth> */}
      {/* <ElediagramsYear></ElediagramsYear> */}
      <Footer></Footer>
    </View>
  );
}