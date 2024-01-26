import { useState } from 'react';

const getStorageValue = <T>(key: string, defaultValue: T): T => {
    const saved = localStorage.getItem(key) ?? '';
    return JSON.parse(saved) ?? defaultValue;
  };

export const useLocalstorage = <T>(
  itemName: string,
  initialValue: T
): [T, (newValue: T) => void] => {
  const [item, setItem] = useState<T>(() => getStorageValue(itemName, initialValue),);

  const saveItem = (newItem: T) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
};
