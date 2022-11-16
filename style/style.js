////npx expo install expo-font
///npm i react-native-vector-icons    npm i react-xml-parser
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
        flexDirection: 'row',
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
        alignItems: 'center'
      },

      team: {
        fontSize:20,
        fontWeight: 'bold'
      }
});

