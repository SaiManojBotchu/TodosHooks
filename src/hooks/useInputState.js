import { useState } from 'react';

const useInputState = (value) => {
  const [state, setState] = useState(value);
  const updateState = (evt) => {
    setState(evt.target.value);
  };
  const reset = () => {
    setState('');
  };
  return [state, updateState, reset];
};

export default useInputState;
