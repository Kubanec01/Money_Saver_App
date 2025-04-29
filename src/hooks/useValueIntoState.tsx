import { useCallback } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig"; // uprav podľa reálnej cesty
import { useAuthContext } from "./auth/authContext/authContext";

type UseValueIntoStateProps = {
  firestoreFieldName: string;
  setValue: (val: string) => void;
};

const useValueIntoState = ({ ...props }: UseValueIntoStateProps) => {
  const { userId } = useAuthContext();
  const valueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let eventValue = e.target.value;
      const eventLength = eventValue.length;

      if (eventValue.includes("-")) return;

      if (eventLength === 0) {
        props.setValue("0");
        eventValue = "0";
      } else if (eventLength > 1 && eventValue[0] === "0") {
        eventValue = eventValue.substring(1);
        props.setValue(eventValue);
      } else if (eventLength < 11) {
        props.setValue(eventValue);
      }

      if (userId) {
        const ref = doc(db, "users", userId);
        setDoc(ref, { [props.firestoreFieldName]: eventValue }, { merge: true });
      }
    },
    [props.firestoreFieldName, props.setValue]
  );

  return { valueChange };
};

export default useValueIntoState;
