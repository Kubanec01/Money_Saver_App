import { useCallback } from "react";

export default (setValue: (e: string) => void, key: string) => {

  let setLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getLocalStorage = (key: string, defaultValue: string) => {
    const jsonValue = localStorage.getItem(key);


    if (jsonValue === null) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }

    return JSON.parse(jsonValue);
  };

  const valueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let eventValue = e.target.value;
      let eventLength = eventValue.length;

      if (eventValue.includes("-")) return;

      if (eventLength === 0) {
        setValue("0");
        setLocalStorage(key, "0");
      } else if (eventLength > 1 && eventValue[0] === "0") {
        eventValue = eventValue.substring(1);
        setValue(eventValue);
        setLocalStorage(key, eventValue);
      } else if (eventLength < 11) {
        setValue(eventValue);
        setLocalStorage(key, eventValue);
      }
    },
    [setValue, key]
  );

  const initialValue = getLocalStorage(key, "0");

  return { valueChange, initialValue };
};
