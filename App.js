////npx expo install expo-font
///npm i react-native-vector-icons    
///npm i react-xml-parser
///npx expo install react-native-svg@13.4.0
///npm install react-native-chart-kit
/// npm install @react-navigation/material-top-tabs react-native-tab-view         
///npx expo install react-native-pager-view    
/// npm install @react-navigation/material-bottom-tabs react-native-paper
///npx expo install react-native-web@~0.18.7 react-dom@18.0.0 @expo/webpack-config@^0.17.0
///npm i react-native-dropdown-select-list

import { View, ScrollView } from 'react-native';
import Header from "./components/Header";
import Elepricenow from "./components/Elepricenow";
import Eleproduce from "./components/Eleproduce";
import ElediagramsDay from "./components/ElediagramsDay";
import ElediagramsWeek from './components/ElediagramsWeek';
import ElediagramsMonth from './components/ElediagramsMonth';
import ElediagramsYear from './components/ElediagramsYear';
import Footer from "./components/Footer"; 
import styles from './style/style'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Loading from './components/Loading';

const Tab = createMaterialTopTabNavigator();

function Development() {
  console.log('app.js - development')
  return (
    <Tab.Navigator screenOptions= {{tabBarLabelStyle: { fontSize: 13 , fontWeight:'bold', color: 'white' },
    tabBarStyle: { backgroundColor: '#808080', borderWidth: 2, borderColor: '#5F5F5F'},
    tabBarIndicatorStyle: {backgroundColor: '#FFC300', height: 2}
    
    }}>
      <Tab.Screen lazy={true} name="Päivä" component={ElediagramsDay} />
      <Tab.Screen lazy={true} name="Viikko" component={ElediagramsWeek} />
      <Tab.Screen lazy={true} name="Kuukausi" component={ElediagramsMonth} />
      <Tab.Screen lazy={true} name="Vuosi" component={ElediagramsYear} />
    </Tab.Navigator>
  )
}

export default function App() {
console.log('app.js')
  return (
    <View style={styles.container}>
      <Header></Header>
      <NavigationContainer>
      <Tab.Navigator screenOptions= {{tabBarLabelStyle: { fontSize: 14 , fontWeight:'bold', color: 'white' },
        tabBarStyle: { backgroundColor: '#5F5F5F'},
        tabBarIndicatorStyle: {backgroundColor: '#FFC300', height: 2}
        }}>
          <Tab.Screen lazy={true}  name="Hinta tänään" component={Elepricenow} />
          <Tab.Screen lazy={true} name="Hintakehitys" component={Development} />
          <Tab.Screen lazy={true} name="Kulutus ja tuotanto" component={Eleproduce} />
        </Tab.Navigator>
      </NavigationContainer>
      <Footer></Footer>
    </View>
  );
}