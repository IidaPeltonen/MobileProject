////npx expo install expo-font
///npm i react-native-vector-icons    
///npm i react-xml-parser
///npx expo install react-native-svg@13.4.0
///npm install react-native-chart-kit
/// npm install @react-navigation/material-top-tabs react-native-tab-view         
///npx expo install react-native-pager-view    

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FFC300'
      },

      header: {
        margin: 10,
        paddingTop: 20,
        flexDirection: 'row'
      },

      logo: {
        height: 90,
        width: 90
      },

      name: {
        marginTop: 30,
        fontSize: 30,
        fontFamily: 'RubikGlitch'
      },

      burger: {
        alignItems: 'flex-end'
      },

      footer: {
        alignItems: 'center',
        padding: 15,
      },

      team: {
        fontSize:15,
        fontWeight: 'bold'
      },

      title: {
        paddingLeft: 20,
        fontSize: 20,
        backgroundColor: '#FFC300',
        paddingTop: 20,
      },

      info: {
        paddingLeft: 20,
        fontSize: 15,
        backgroundColor: '#FFC300',
      },

      square: {
        backgroundColor: '#5F5F5F',
        borderColor: 'black',
        borderRadius: 2,
        borderWidth: 1,
        paddingTop: 10,
        paddingBottom: 20,
        height: 555
      },

      important: {
        paddingLeft: 20,
        paddingBottom: 40,
        fontSize: 20,
        color: 'white',
      },

      text:{
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom:20,
        color: 'white',
      },

      icon:{
        paddingBottom: 40,
      },

      View:{
        backgroundColor: '#FFC300',
        color: '#FFC300',
      },
});