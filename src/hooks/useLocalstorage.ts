/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

const getStorageValue = <T>(key: string, defaultValue: T): T => {
  const saved = localStorage.getItem(key);
  if(saved) {
    return JSON.parse(saved) ?? defaultValue;
  }
  localStorage.setItem(key, JSON.stringify(defaultValue))
  return defaultValue;
};

export const useLocalstorage = <T>(itemName: string, initialValue: T) => {
  const [item, setItem] = useState<T>(initialValue);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        setItem(getStorageValue(itemName, initialValue));
        setIsLoading(false);
        setError(false);
      } catch (error) {
        setIsLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);

  const saveItem = (newItem: T) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    isLoading,
    error,
  };
};
