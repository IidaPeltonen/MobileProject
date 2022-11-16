import React from 'react'
import { View, Image, Text } from 'react-native';
import styles from '../style/style';
import { useFonts } from 'expo-font';
import Burger from './Burger';

export default function Header() {
  const [loaded] = useFonts({
    RubikGlitch: require('../assets/fonts/RubikGlitch-Regular.ttf'),
  });

  if(!loaded) {
    return null;
  }

  return (
    <View>
      <View style={styles.header}>
      <Image source = {require('../assets/sp3.png')}
      style={{flex: 1, height: 103 }} />
      <Text style={styles.name}>Sähköpäivystäjä</Text>
      </View>
      <Burger />
    </ View>
  )
}
