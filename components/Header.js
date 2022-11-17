import React from 'react'
import { View, Image, Text } from 'react-native';
import styles from '../style/style';
import { useFonts } from 'expo-font';

export default function Header() {
  const [loaded] = useFonts({
    RubikGlitch: require('../assets/fonts/RubikGlitch-Regular.ttf'),
    Roboto: require('../assets/fonts/Roboto-Regular.ttf'),
    Orbitronregular: require('../assets/fonts/Orbitron-Regular.ttf')
  });

  if(!loaded) {
    return null;
  }

  return (
    <View>
      <View style={styles.header}>
      <Image source = {require('../assets/sp3.png')}
      style={styles.logo} />
      <Text style={styles.name}>Sähköpäivystäjä</Text>
      </View>

    </ View>
  )
}
