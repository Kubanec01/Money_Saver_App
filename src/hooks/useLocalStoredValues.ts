import { useEffect, useState } from "react";

export const useLocalStoredValues = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? (JSON.parse(storedValue) as T) : initialValue;
    } catch (error) {
      console.error("Error parsing JSON value");
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error setting JSON value");
    }
  }, [value]);

  return [value, setValue] as const;
};


// type JSONSerializable = 
//   | boolean
//   | number
//   | string
//   | null
//   | JSONSerializable[]
//   | { [key: string]: JSONSerializable };

// export const useLocalStoredValues = <T extends JSONSerializable>(key: string, initialValue: T) => {
//   const [value, setValue] = useState<T>(() => {
//     try {
//       const storedValue = localStorage.getItem(key);
//       return storedValue ? (JSON.parse(storedValue) as T) : initialValue;
//     } catch (error) {
//       console.error("Error parsing JSON value");
//       return initialValue;
//     }
//   });

//   const setValueAndSave = useCallback(
//     (value: T) => {
//       try {
//         setValue(value);
//         localStorage.setItem(key, JSON.stringify(value));
//       } catch (error) {
//         console.error("Error setting JSON value");
//         return initialValue;
//       }
//     },
//     [key]
//   );

//   return [value, setValueAndSave] as const;
// };
