import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ThemeContext} from '../../commons/contexts/ThemeContext';
import useForm from '../../commons/hooks/use-form';
import AppInput from '../../components/AppInput';
import BaseButton from '../../components/BaseButton';
import * as Actions from './actions';

export default function Update({route, navigation}) {
  const {id, firstName, lastName, age, photo} = route.params;
  const {color} = useContext(ThemeContext);
  const [formValues, handleFormValueChange] = useForm({
    firstName: firstName,
    lastName: lastName,
    age: age,
  });

  const {loading, execute} = Actions.UpdateContact(
    {...formValues, photo},
    id,
    () => navigation.popToTop(),
  );

  return (
    <View style={{...styles.container, backgroundColor: color.background}}>
      <AppInput
        value={formValues?.firstName}
        formKey="firstName"
        label="First Name"
        handleFormValueChange={handleFormValueChange}
      />
      <AppInput
        value={formValues?.lastName}
        formKey="lastName"
        label="Last Name"
        handleFormValueChange={handleFormValueChange}
      />
      <AppInput
        value={'' + formValues?.age}
        formKey="age"
        label="Age"
        handleFormValueChange={handleFormValueChange}
        inputProps={{keyboardType: 'numeric'}}
      />
      <BaseButton onPress={() => execute()} disable={loading} loading={loading}>
        <Text style={{...styles.buttonText, color: color.text}}>Update</Text>
      </BaseButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
