import { useState, useEffect } from 'react';

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

function getValueStorage(key: string) {
  const saveValue: string = JSON.parse(localStorage.getItem(key) ?? '');

  if (saveValue) return saveValue;
}

export function useLocalStorage(key: string) {
  const [value, setValue] = useState(() => getValueStorage(key));
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, { setValue }] as [
    value: LocalStorageReturnValue,
    {
      setValue: (value: LocalStorageSetValue) => void;
      removeItem: () => void;
    }
  ];
}
