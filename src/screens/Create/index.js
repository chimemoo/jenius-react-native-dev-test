import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ThemeContext} from '../../commons/contexts/ThemeContext';
import useForm from '../../commons/hooks/use-form';
import AppInput from '../../components/AppInput';
import BaseButton from '../../components/BaseButton';
import * as Actions from './actions';

export default function Create({navigation}) {
  const {color} = useContext(ThemeContext);
  const [formValues, handleFormValueChange] = useForm({
    firstName: '',
    lastName: '',
    age: '',
  });

  const {loading, execute} = Actions.CreateContact(formValues, () =>
    navigation.popToTop(),
  );

  return (
    <View style={{...styles.container, backgroundColor: color.background}}>
      <AppInput
        formKey="firstName"
        label="First Name"
        handleFormValueChange={handleFormValueChange}
      />
      <AppInput
        formKey="lastName"
        label="Last Name"
        handleFormValueChange={handleFormValueChange}
      />
      <AppInput
        formKey="age"
        label="Age"
        handleFormValueChange={handleFormValueChange}
        inputProps={{keyboardType: 'numeric'}}
      />
      <BaseButton onPress={() => execute()} disable={loading} loading={loading}>
        <Text style={{...styles.buttonText, color: color.text}}>Create</Text>
      </BaseButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
