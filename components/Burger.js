import React  from 'react'
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import styles from '../style/style';

    export default function Burger() {
      return (
        <View style={styles.burger}><MaterialCommunityIcons name="hamburger" size={40} color="black" /></View>
      )
    }