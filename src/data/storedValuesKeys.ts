type LocalStoredObject = {
  key: string;
  initialValue: string | number | object;
};

type LocalStoredKeys = {
  [key: string]: LocalStoredObject;
};

export const localStoredKeys: LocalStoredKeys = {
  budget: {
    key: "budgetValue",
    initialValue: "0",
  },
  goal: {
    key: "goalValue",
    initialValue: "0",
  },
  expensesSum: {
    key: "expensesSumValue",
    initialValue: 0,
  },
  expenses: {
    key: "expenses",
    initialValue: {},
  },
};

