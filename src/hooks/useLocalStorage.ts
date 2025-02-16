
export const useLocalStorage = () => {
  let setLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  let getLocalStorage = (key: string, defaultValue: string) => {
    const jsonValue = localStorage.getItem(key);

    if (jsonValue === null) {
      setLocalStorage(key, defaultValue);
      return defaultValue;
    }

    return JSON.parse(jsonValue);
  };

  return { setLocalStorage, getLocalStorage };
};
