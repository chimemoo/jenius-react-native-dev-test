import React, {useContext} from 'react';
import {
  StyleSheet,
  TouchableNativeFeedback,
  View,
  ActivityIndicator,
} from 'react-native';
import {ThemeContext} from '../commons/contexts/ThemeContext';

export default function BaseButton({
  children,
  style,
  onPress,
  loading,
  disable = false,
}) {
  const {color} = useContext(ThemeContext);
  return (
    <TouchableNativeFeedback onPress={onPress} disabled={disable}>
      <View
        style={[{...styles.container, backgroundColor: color.primary}, style]}>
        {loading ? (
          <ActivityIndicator size="large" color={color.background} />
        ) : (
          children
        )}
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
