import React from 'react';
import { Text,View } from 'react-native';
import { useFonts } from 'expo-font';
import styles from "../style/style";

export default function Footer() {
  
  const [loaded] = useFonts({
    RubikGlitch: require('../assets/fonts/RubikGlitch-Regular.ttf'),
    Roboto: require('../assets/fonts/Roboto-Regular.ttf'),
    Orbitronregular: require('../assets/fonts/Orbitron-Regular.ttf'),
    Orbitronbold: require('../assets/fonts/Orbitron-Bold.ttf'),
    Robotobold: require('../assets/fonts/Roboto-Bold.ttf')
  });
  if(!loaded) {
    return null;
  }
  
  return (
    <View style={styles.footer}>
      <Text style={styles.team}>Sähkötiimi 2 - 2022</Text>
    </View>
  )
}