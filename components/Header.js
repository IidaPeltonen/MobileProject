import React from 'react'
import { View, Image, Text } from 'react-native';
import styles from '../style/style';

export default function Header() {

  return (
    <View>
      <View style={styles.header}>
        <Image source={require('../assets/sp-.png')}
          style={styles.logo} />
      </View>

    </ View>
  )
}