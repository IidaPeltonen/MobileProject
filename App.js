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
import styles from './style/style';
import { useFonts } from 'expo-font';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

function Development() {
  return (
    <Tab.Navigator  screenOptions= {{ 
      tabBarLabelStyle: { fontSize: 13 , fontFamily: 'Robotobold', color: 'white' },
      tabBarStyle: { backgroundColor: '#757575', borderWidth: 2, borderColor: '#5F5F5F'},
      tabBarIndicatorStyle: {backgroundColor: '#FFC300', height: 2}, 
      lazy:true,
      swipeEnabled:false
    }}>
      <Tab.Screen name="Päivä" component={ElediagramsDay} />
      <Tab.Screen name="Viikko" component={ElediagramsWeek} />
      <Tab.Screen name="Kuukausi" component={ElediagramsMonth} />
      <Tab.Screen name="Vuosi" component={ElediagramsYear} />
    </Tab.Navigator>
  )
}

export default function App() {

  const [loaded] = useFonts({
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
    Orbitronregular: require('./assets/fonts/Orbitron-Regular.ttf'),
    Orbitronbold: require('./assets/fonts/Orbitron-Bold.ttf'),
    Robotobold: require('./assets/fonts/Roboto-Bold.ttf')
    });
    if(!loaded) {
    return null;
    }

  return (
    <View style={styles.container}>
      <Header></Header>
      <NavigationContainer>
      <Tab.Navigator screenOptions= {{
        tabBarLabelStyle: { fontSize: 14 , fontFamily: 'Robotobold', color: 'white' },
        tabBarStyle: { backgroundColor: '#5F5F5F'},
        tabBarIndicatorStyle: {backgroundColor: '#FFC300', height: 2},
        lazy:true 
        }}>
          <Tab.Screen  name="Hinta tänään" component={Elepricenow} />
          <Tab.Screen  name="Hintakehitys" component={Development} />
          <Tab.Screen  name="Kulutus ja tuotanto" component={Eleproduce} />
        </Tab.Navigator>
      </NavigationContainer>
      <Footer></Footer>
    </View>
  );
}