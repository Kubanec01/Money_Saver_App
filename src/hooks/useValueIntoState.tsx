import { ChangeEvent } from "react";

export const useValueIntoState = (setBudget: (e: string) => void) => {
  const valueChange = (e: ChangeEvent<HTMLInputElement>) => {
    let eventValue = e.target.value;
    let eventLength = eventValue.length;

    if (eventLength === 0) {
      setBudget("0");
    } else if (eventLength > 1 && eventValue[0] === "0") {
      eventValue = eventValue.substring(1);
      setBudget(eventValue);
    } else if (eventLength < 11) {
      setBudget(eventValue);
    }
  };

  return { valueChange };
};
