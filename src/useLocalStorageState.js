import { useEffect, useState } from "react";
export function useLocalStorage(initialState, key) {
  const [value, Setvalue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key, value]
  );
  return [value, Setvalue];
}
