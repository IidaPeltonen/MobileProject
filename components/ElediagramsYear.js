import React from 'react'
import { Text,View } from 'react-native'
import styles from "../style/style"

export default function ElediagramsYear() {
  return (
    <View>
      <Text style={styles.title}>Sähkön hintakehitys</Text>
      <Text style={styles.info}>viimeisen vuoden aikana</Text>
    </View>
  )
}