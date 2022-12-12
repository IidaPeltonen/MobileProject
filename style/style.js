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
        padding: 15,
        backgroundColor: '#FFC300',
        borderRadius: 3,
      },

      team: {
        fontSize:15,
        fontFamily: 'Robotobold'
      },

      title: {
        fontSize: 25,
        color: 'white',
        fontFamily: 'Roboto',
      },

      lowkey: {
        fontSize: 12,
        color: 'white',
        fontFamily: 'Roboto',
        paddingTop: "2%"
      },

      titlepos: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingBottom: 50,
        paddingTop: 20,
      },

      titleposdia: {
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
      },

      square: {
        backgroundColor: '#2B2B2B',
        paddingTop: 10,
        paddingBottom: 20,
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
      },

      important: {
        paddingBottom: 40,
        paddingLeft: 40,
        fontSize: 40,
        color: 'white',
        fontFamily: 'Orbitronbold'
      },

      notimportant: {
        color: 'white',
        fontFamily: 'Orbitronbold',
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
        paddingBottom: 40,
      },

      flex2:{
        paddingLeft: 5,
      },

      flex3:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingBottom: 40,
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
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      },

      modalcontent: {
        marginTop: 300,
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