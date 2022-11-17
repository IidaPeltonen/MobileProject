///npm i react-native-vector-icons        
///npm i react-xml-parser
/// npm install @react-navigation/material-top-tabs react-native-tab-view        
/// npx expo install react-native-pager-view    
/// npm install @react-navigation/material-bottom-tabs react-native-paper 

import { View, ScrollView } from 'react-native';
import Header from "./components/Header";
import Elepricenow from "./components/Elepricenow";
import ElediagramsDay from "./components/ElediagramsDay";
import Eleproduce from "./components/Eleproduce";
import Footer from "./components/Footer"; 
import styles from './style/style'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ElediagramsWeek from './components/ElediagramsWeek';
import ElediagramsMonth from './components/ElediagramsMonth';
import ElediagramsYear from './components/ElediagramsYear';

const Tab = createMaterialTopTabNavigator();

function Development() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Päivä" component={ElediagramsDay} />
      <Tab.Screen name="Viikko" component={ElediagramsWeek} />
      <Tab.Screen name="Kuukausi" component={ElediagramsMonth} />
      <Tab.Screen name="Vuosi" component={ElediagramsYear} />
    </Tab.Navigator>
  )
}

export default function App() {

  return (
    <View style={styles.container}>
      <Header></Header>
      <NavigationContainer>
      <Tab.Navigator screenOptions= {{tabBarLabelStyle: { fontSize: 14 , fontWeight:'bold', color: 'white' },
        tabBarStyle: { backgroundColor: '#5F5F5F'},
        tabBarActiveTintColor: 'red'
        }}>
          <Tab.Screen  name="Hinta tänään" component={Elepricenow} />
          <Tab.Screen name="Hintakehitys" component={Development} />
          <Tab.Screen name="Kulutus ja tuotanto" component={Eleproduce} />
        </Tab.Navigator>
      </NavigationContainer>
      <Footer></Footer>
    </View>
  );
}