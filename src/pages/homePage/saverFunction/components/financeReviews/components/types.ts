import { CSSProperties } from "react";

export interface SecondaryExpenses {
  currency: string;
  expensesNum: number;
  style: CSSProperties;
  barBodyClass: string
}

export interface ChartProps extends SecondaryExpenses {
  budgetNum: number;
}
