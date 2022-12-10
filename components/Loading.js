import React, { useState } from 'react'
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import styles from '../style/style';

export default function Loading() {

  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState(false);

  const spinner = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" />
    }
    if (error) {
      return <Text>Error</Text>
    }
  };

  return (
    <View style={styles.spinner}>{spinner()}</ View>
  )
}
