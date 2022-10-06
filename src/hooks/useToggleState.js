import { useState } from 'react';

const useToggleState = (initialValue) => {
  const [state, setState] = useState(initialValue);
  const toggle = () => {
    setState(st => !st);
  };
  return [state, toggle];
};

export default useToggleState;
