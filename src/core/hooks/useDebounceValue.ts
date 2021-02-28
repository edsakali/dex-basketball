import { useCallback, useEffect, useRef, useState } from "react";
import { debounce } from "lodash";

export const useDebounceValue = <T>(value: T, delay: number = 750) => {
  const [current, setCurrent] = useState<T>(value);
  const previousValue = useRef(value);

  const debouncedSetValue = useCallback(
    debounce(() => setCurrent(value), delay),
    [delay, value]
  );

  useEffect(() => {
    if (value !== previousValue.current) {
      debouncedSetValue();
      previousValue.current = value;
      return debouncedSetValue.cancel;
    }
  }, [debouncedSetValue, value]);

  return current;
};
