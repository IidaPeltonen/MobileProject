import { View } from 'react-native';
import Header from "./components/Header";
import Elepricenow from "./components/Elepricenow";
import Elediagrams from "./components/Elediagrams";
import Footer from "./components/Footer"; 
import styles from './style/style'

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Elediagrams></Elediagrams>
      <Footer></Footer>
    </View>
  );
}