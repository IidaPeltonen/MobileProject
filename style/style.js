import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#2B2B2B',
        borderRadius: 3,
      },

      header: {
        paddingTop: 20,
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
        backgroundColor: '#5F5F5F',
        color: 'white',
        fontFamily: 'Roboto',
      },

      lowkey: {
        fontSize: 12,
        backgroundColor: '#5F5F5F',
        color: 'white',
        fontFamily: 'Roboto',
        paddingTop: 7
      },

      titlepos: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingBottom: 30,
        paddingTop: 20,
      },

      titleposdia: {
        paddingLeft: 20,
        paddingBottom: 30,
        paddingTop: 20,
      },

      square: {
        backgroundColor: '#5F5F5F',
        height: '100%',
        width: '100%',
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
        fontFamily: 'Roboto'
      },

      flex:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingBottom: 40,
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