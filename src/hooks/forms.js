import { useState } from 'react';

export const useFormInput = () => {
  const [value, setValue] = useState('');
  const [validity, setValidity] = useState(false);

  const inputChangeHandler = (event) => {
    setValue(event.target.value);
    if (event.target.value.trim() === '') {
      setValidity(false);
    } else {
      setValidity(true);
    }
  };

  const reset = () => {
    setValue('');
    setValidity(false);
  }

  return { value, onChange: inputChangeHandler, validity, reset };
};
