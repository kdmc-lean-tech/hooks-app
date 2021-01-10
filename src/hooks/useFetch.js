import { useState, useEffect, useRef } from 'react';
import { getBreakingUser } from '../helpers/getBreakingUser';

export const useFetch = (url) => {
  const [ state, setState ] = useState({ loading: true, data: null, error: null });
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, [])

  useEffect(() => {
    getBreakingUser(url)
      .then(data => {
        if (isMounted) {
          setState({
            loading: false,
            data,
            error: null
          })
        }
      });
  }, [ url ]);
  return state;
}
