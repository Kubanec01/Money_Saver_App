import { CSSProperties } from "react";

export interface SecondaryExpenses {
  currency: string;
  expensesNum: number;
  style: CSSProperties;
}

export interface ChartProps extends SecondaryExpenses {
  budgetNum: number;
}
