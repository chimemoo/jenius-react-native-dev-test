import React, {useContext} from 'react';
import {Image, View, StyleSheet} from 'react-native';
import UserImage from '../assets/icons/people.svg';
import {ThemeContext} from '../commons/contexts/ThemeContext';
export default function CircleImage({url}) {
  const {color} = useContext(ThemeContext);

  if (url !== 'N/A') {
    return (
      <View style={{...styles.profileBorder, borderColor: color.primary}}>
        <Image style={styles.profileImage} source={{uri: url}} />
      </View>
    );
  }
  return (
    <View style={{...styles.profileBorder, borderColor: color.primary}}>
      <UserImage style={styles.profileImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  profileBorder: {
    borderWidth: 2,
    borderRadius: 70 / 2,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
