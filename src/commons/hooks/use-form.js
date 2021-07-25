import {useState} from 'react';
import debounce from '../utils/debounce';

const useForm = values => {
  const [formValues, setFormValues] = useState({
    ...values,
  });

  const handleFormValueChange = debounce((key, value) => {
    setFormValues({
      ...formValues,
      [key]: value,
    });
  }, 100);

  return [formValues, handleFormValueChange, setFormValues];
};

export default useForm;
