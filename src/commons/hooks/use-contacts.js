import {useState} from 'react';
import {useEffect} from 'react/cjs/react.development';
import * as ContactServices from '../services/ContactServices';

const useContacts = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [execute, setExecute] = useState(false);

  const fetchsContacts = () => {
    setExecute(true);
  };
  useEffect(() => {
    if (execute) {
      fetchs();
    }
  }, [execute]);

  const fetchs = async () => {
    setLoading(true);
    return await ContactServices.getAllContacts()
      .then(res => {
        setLoading(false);
        setContacts(res.data);
        setExecute(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
        setExecute(false);
      });
  };

  return {loading, error, contacts, fetchsContacts};
};

export default useContacts;
