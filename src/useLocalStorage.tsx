import { useState, useEffect } from 'react';

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

function getValueStorage(key: LocalStorageSetValue): LocalStorageReturnValue {
  const saveValue: LocalStorageSetValue = JSON.parse(
    localStorage.getItem(key)!
  );

  if (saveValue) return saveValue;
  return null;
}

export function useLocalStorage(key: LocalStorageSetValue) {
  const [value, setValue] = useState(() => getValueStorage(key));

  const removeItem = () => {
    localStorage.clear();
    setValue('');
  };
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, { setValue, removeItem }] as [
    value: LocalStorageReturnValue,
    {
      setValue: (value: LocalStorageSetValue) => void;
      removeItem: () => void;
    }
  ];
}
