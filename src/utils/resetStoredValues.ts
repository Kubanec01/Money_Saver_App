type resetStoredValuesProps = {
  keys: string[];
};

export const resetStoredValues = ({ keys }: resetStoredValuesProps) => {
  keys.forEach((k) => {
    localStorage.removeItem(k);
  });
};
