import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#2B2B2B',
        borderRadius: 3,
      },

      header: {
        flexDirection: 'row',
        backgroundColor: '#FFC300',
      },

      logo: {
        margin: 50,
        flex: 1,
        aspectRatio: 3.5,
        resizeMode: 'contain'
      },

      footer: {
        alignItems: 'center',
        backgroundColor: '#FFC300',
        borderRadius: 3,
        padding: 10,
      },

      team: {
        fontSize:15,
        fontFamily: 'Robotobold'
      },

      title: {
        fontSize: 27,
        color: 'white',
        fontFamily: 'Orbitronbold',
      },

      title2: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Orbitronbold',
      },

      lowkey: {
        fontSize: 12,
        color: 'white',
        fontFamily: 'Roboto',
        paddingTop: "2%"
      },

      titlepos: {
        paddingLeft: 20,
        paddingBottom: 60,
        paddingTop: 35,
        padding: 10
      },

      titleposdia: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 5
        // flexDirection: 'row',
      },

      square: {
        backgroundColor: '#2B2B2B',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
      },

      important: {
        paddingBottom: 40,
        paddingLeft: 40,
        fontSize: 45,
        color: 'white',
        fontFamily: 'Orbitronbold'
      },

      notimportant: {
        color: 'white',
        fontFamily: 'Orbitronbold',
        fontSize: 25
      },

      text:{
        color: 'white',
        padding: 20,
        fontFamily: 'Roboto',
        paddingBottom: 20,
        fontSize: 20,
      },

      flex1:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingBottom: 50,
      },

      flex2:{
        paddingTop: 5,
        paddingLeft: 5,
        paddingBottom: 15
      },

      flex3:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingBottom: 60,
      },
      //näytä-otsikko, päivämäärät
      descriptionStyle: {
        backgroundColor: "white",
        fontFamily: 'Roboto',
      },
      //näytä-otsikko, päivämäärät
      titleStyle: {
        color:'white', 
        backgroundColor:'#808080',
        alignSelf: 'center',
        fontFamily: 'Roboto',
        fontSize: 20
      },
      //tuntihinnat
      descriptionStyleItems: {
        color: 'white',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 18,
      },
      titleStyleItems: {
        color:'white',
        alignSelf: 'center',
        fontFamily: 'Roboto',
      },
      //keskiarvot
      titleDescriptionStyle: {
        color: 'white',
        alignSelf: 'center',
        backgroundColor: '#808080',
        fontFamily: 'Roboto',
      },

      modal: {
        // flex: 4,
       // flexDirection: 'column',
       // justifyContent: 'center',
       // alignItems: 'center',
       // height: '100%',
      },

      modalcontent: {
        marginTop: 340,
        width: '100%',
        height: 200,
        backgroundColor: '#5F5F5F',
        borderRadius: 3,
        padding: 10,
        paddingTop: 15,
      },

      modaltext: {
        color:'white',
        padding: 5,
        fontFamily: 'Roboto',
        marginBottom: 13,
      },
});