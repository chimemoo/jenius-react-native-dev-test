import React, {useContext} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {ThemeContext} from '../commons/contexts/ThemeContext';
import BaseInput from './BaseInput';

export default function AppInput({
  value,
  handleFormValueChange,
  placeholder = '',
  inputProps,
  ...props
}) {
  const {color} = useContext(ThemeContext);
  return (
    <BaseInput {...props}>
      <TextInput
        style={{...styles.container, borderColor: color.primary}}
        defaultValue={value}
        placeholder={placeholder}
        onChange={event =>
          handleFormValueChange(props.formKey, event.nativeEvent.text)
        }
        {...inputProps}
      />
    </BaseInput>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
});
