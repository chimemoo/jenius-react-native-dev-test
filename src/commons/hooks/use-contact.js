/* eslint-disable react-hooks/exhaustive-deps */
import {useState} from 'react';
import {useEffect} from 'react/cjs/react.development';
import * as ContactServices from '../services/ContactServices';

const useContact = id => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [contact, setContact] = useState({});

  useEffect(() => {
    fetchs();
  }, []);

  const fetchs = async () => {
    setLoading(true);
    return await ContactServices.getContact(id)
      .then(res => {
        setLoading(false);
        setContact(res.data);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  };

  return {loading, error, contact};
};

export default useContact;
