import { useEffect, useMemo, useRef } from 'react';
import debounce from 'utils/debounce';

const useDebounce = (callback, wait) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
    };

    return debounce(func, wait);
  }, []);

  return debouncedCallback;
};

export default useDebounce;
