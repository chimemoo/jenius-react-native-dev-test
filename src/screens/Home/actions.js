import {Alert} from 'react-native';
import * as ContactServices from '../../commons/services/ContactServices';

export const DeleteContact = id => {
  return new Promise((resolve, reject) => {
    ContactServices.deleteContact(id)
      .then(() => {
        Alert.alert('Success', 'Contact success deleted!');
        resolve(true);
      })
      .catch(err => {
        err.then(() => {
          console.log(err);
        });

        Alert.alert('Failed', 'Failed to delete contact');
        reject(false);
      });
  });
};
