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
        fontSize: 20,
        color: 'white',
        fontFamily: 'Roboto',
      },

      lowkey: {
        fontSize: 12,
        backgroundColor: '#5F5F5F',
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
        fontFamily: 'Orbitronbold'
      },

      text:{
        color: 'white',
        padding: 20,
        fontFamily: 'Roboto',
        paddingBottom: 20,
        fontSize: 20,
      },

      flex:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingBottom: 40,
      },
      //näytä-otsikko, päivämäärät
      descriptionStyle: {
        backgroundColor: "white"
      },
      //näytä-otsikko, päivämäärät
      titleStyle: {
        color:'white', 
        backgroundColor:'#808080',
        alignSelf: 'center'
      },
      //tuntihinnat
      descriptionStyleItems: {
        color: 'white',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 18
      },
      titleStyleItems: {
        color:'white',
        alignSelf: 'center'
      },
      //keskiarvot
      titleDescriptionStyle: {
        color: 'white',
        alignSelf: 'center',
        backgroundColor: '#808080'
      }
});