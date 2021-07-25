import React, {useContext} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ThemeContext} from '../../../commons/contexts/ThemeContext';
import CircleImage from '../../../components/CircleImage';

export default function Item({data}) {
  const {color} = useContext(ThemeContext);

  return (
    <TouchableOpacity style={styles.itemContainer}>
      <CircleImage url={data?.photo} />
      <Text style={{...styles.profileName, color: color.text}}>
        {data?.firstName}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginRight: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  profileName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
});
