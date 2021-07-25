import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';
import {ThemeContext} from '../../../commons/contexts/ThemeContext';
import CircleImage from '../../../components/CircleImage';

export default function Item({data, onPress, onLongPress}) {
  const {color} = useContext(ThemeContext);

  return (
    <TouchableNativeFeedback onPress={onPress} onLongPress={onLongPress}>
      <View style={styles.itemContainer}>
        <CircleImage url={data.photo} />
        <View style={styles.itemContent}>
          <Text style={{...styles.itemTitle, color: color.text}}>
            {data.firstName}
          </Text>
          <Text>{data.lastName}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemContent: {
    paddingHorizontal: 15,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
