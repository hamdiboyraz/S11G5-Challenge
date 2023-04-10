import { useState } from "react";

const useLocalStorage = (storageKey, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const value = localStorage.getItem(storageKey);

    if (!value) {
      localStorage.setItem(storageKey, initialValue);
      return initialValue;
    } else {
      return JSON.parse(value);
    }
  });

  const setValue = (newStoredValue) => {
    setStoredValue(newStoredValue);
    localStorage.setItem(storageKey, JSON.stringify(newStoredValue));
    // console.log(newStoredValue);
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
