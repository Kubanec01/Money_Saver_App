import { useCallback } from "react";

export default (setValue: (e: string) => void, key: string) => {

  const valueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let eventValue = e.target.value;
      let eventLength = eventValue.length;

      if (eventValue.includes("-")) return;

      if (eventLength === 0) {
        setValue("0");
      } else if (eventLength > 1 && eventValue[0] === "0") {
        eventValue = eventValue.substring(1);
        setValue(eventValue);
      } else if (eventLength < 11) {
        setValue(eventValue);
      }
    },
    [setValue, key]
  );


  return { valueChange };
};
