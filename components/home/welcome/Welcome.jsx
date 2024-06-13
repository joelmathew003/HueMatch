import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'; 

import styles from './welcome.style'

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>Hi, Sugu</Text>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionBox}>
          <Text style={styles.optionText}>Outfit Check</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionBox}>
          <Text style={styles.optionText}>Style Yourself</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Welcome