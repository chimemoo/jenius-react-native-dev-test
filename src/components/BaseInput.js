import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function BaseInput({children, label, containerStyle}) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    fontSize: 12,
    marginBottom: 3,
  },
});
