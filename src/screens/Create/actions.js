import {useState} from 'react';
import {Alert} from 'react-native';
import * as ContactServices from '../../commons/services/ContactServices';
import * as RandomImageService from '../../commons/services/RandomImageService';

export const CreateContact = (data, onSuccess) => {
  const [loading, setLoading] = useState(false);

  const execute = async () => {
    return new Promise(() => {
      setLoading(true);
      RandomImageService.getImage()
        .then(res => {
          ContactServices.postContact({
            ...data,
            age: parseInt(data.age, 10),
            photo: res.url,
          })
            .then(() => {
              Alert.alert('Success', 'New contact success saved!');
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
        })
        .catch(() => {
          setLoading(false);
          Alert.alert('Failed', 'Failed to save new contact');
        });
    });
  };

  return {loading, execute};
};
