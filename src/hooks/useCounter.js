import { useState } from 'react';

export const useCounter = (value = 100) => {
  const [ state, setState ] = useState(Number(value));

  const increment = (factor = 1) => {
    setState(state + factor);
  }

  const substract = (factor = 1) => {
    setState(state - factor);
  }

  const reset = () => {
    setState(0);
  }

  return {
    state,
    increment,
    substract,
    reset
  }
}
