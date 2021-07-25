import {useState} from 'react';
import {Alert} from 'react-native';
import * as ContactServices from '../../commons/services/ContactServices';

export const UpdateContact = (data, id, onSuccess) => {
  const [loading, setLoading] = useState(false);

  const execute = () => {
    const newData = {...data, age: parseInt(data.age, 10)};
    return new Promise(() => {
      setLoading(true);
      ContactServices.putContact(newData, id)
        .then(() => {
          Alert.alert('Success', 'Contact success saved!');
          onSuccess();
          setLoading(false);
        })
        .catch(err => {
          if (err) {
            err.then(error => {
              Alert.alert('Failed', error.message);
            });
          }
          setLoading(false);
        });
    });
  };

  return {loading, execute};
};
