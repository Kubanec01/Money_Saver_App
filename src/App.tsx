import { BgAnimation } from "./components/BgAnimation";
import { CurrencyContextProvider } from "./hooks/context/CurrencyContext";
import { ExpensesAndResultsBarProvider } from "./hooks/context/ExpensesAndResultsBarContext";
import { FinanceSaverProvider } from "./hooks/context/FinanceContext";
import { UseScrollToTop } from "./hooks/UseScrollToTop";
import { MainRoutes } from "./routes/MainRoutes";

function App() {
  return (
    <>
      <ExpensesAndResultsBarProvider>
        <FinanceSaverProvider>
          <CurrencyContextProvider>
            <UseScrollToTop />
            <BgAnimation />
            <MainRoutes />
          </CurrencyContextProvider>
        </FinanceSaverProvider>
      </ExpensesAndResultsBarProvider>
    </>
  );
}

export default App;
