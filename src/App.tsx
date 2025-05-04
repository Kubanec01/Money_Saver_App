import { BgAnimation } from "./components/BgAnimation";
import { AuthProvider } from "./hooks/auth/authContext/authContext";
import { CurrencyContextProvider } from "./hooks/context/CurrencyContext";
import { CurrencyDataContextProvider } from "./hooks/context/CurrencyDataContext";
import { ExpensesAndResultsBarProvider } from "./hooks/context/ExpensesAndResultsBarContext";
import { ExpensesAndResultsDataContextProvider } from "./hooks/context/ExpensesAndResultsDataContext";
import { FinanceSaverProvider } from "./hooks/context/FinanceContext";
import { FinanceDataContextProvider } from "./hooks/context/FinanceDataContext";
import { UseScrollToTop } from "./hooks/UseScrollToTop";
import { MainRoutes } from "./routes/MainRoutes";

function App() {
  return (
    <>
      <AuthProvider>
        <FinanceDataContextProvider>
          <ExpensesAndResultsDataContextProvider>
            <ExpensesAndResultsBarProvider>
              <FinanceSaverProvider>
                <CurrencyDataContextProvider>
                  <CurrencyContextProvider>
                    <UseScrollToTop />
                    <BgAnimation />
                    <MainRoutes />
                  </CurrencyContextProvider>
                </CurrencyDataContextProvider>
              </FinanceSaverProvider>
            </ExpensesAndResultsBarProvider>
          </ExpensesAndResultsDataContextProvider>
        </FinanceDataContextProvider>
      </AuthProvider>
    </>
  );
}

export default App;
