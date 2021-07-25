/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useLayoutEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  ActivityIndicator,
} from 'react-native';
import {ThemeContext} from '../../commons/contexts/ThemeContext';
import useContact from '../../commons/hooks/use-contact';
import CircleImage from '../../components/CircleImage';

export default function Detail({route, navigation}) {
  const {id} = route.params;
  const {loading, error, contact} = useContact(id);
  const {color} = useContext(ThemeContext);

  useLayoutEffect(() => {
    if (contact.firstName) {
      navigation.setOptions({
        headerRight: () => <RightHeaderButton />,
        headerTitle: `${contact.firstName}`,
      });
    }
  }, [contact]);

  const RightHeaderButton = () => (
    <TouchableNativeFeedback
      onPress={() => navigation.push('Update', {...contact})}>
      <View style={styles.editButton}>
        <Text>Edit</Text>
      </View>
    </TouchableNativeFeedback>
  );

  if (error) {
    return (
      <View style={{...styles.container, justifyContent: 'center'}}>
        <Text>Something Error</Text>
      </View>
    );
  }

  if (loading) {
    return (
      <View
        style={{
          ...styles.container,
          justifyContent: 'center',
          backgroundColor: color.background,
        }}>
        <ActivityIndicator size="large" color={color.primary} />
      </View>
    );
  }

  return (
    <View style={{...styles.container, backgroundColor: color.background}}>
      <CircleImage url={contact.photo} />
      <Text>
        {contact.firstName} {contact.lastName}
      </Text>
      <Text>Age : {contact.age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 50,
  },
  editButton: {
    padding: 20,
  },
});
