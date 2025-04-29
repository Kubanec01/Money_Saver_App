import { BgAnimation } from "./components/BgAnimation";
import { AuthProvider } from "./hooks/auth/authContext/authContext";
import { CurrencyContextProvider } from "./hooks/context/CurrencyContext";
import { ExpensesAndResultsBarProvider } from "./hooks/context/ExpensesAndResultsBarContext";
import { FinanceSaverProvider } from "./hooks/context/FinanceContext";
import { FinanceDataContextProvider } from "./hooks/context/FinanceDataContext";
import { UseScrollToTop } from "./hooks/UseScrollToTop";
import { MainRoutes } from "./routes/MainRoutes";

function App() {
  return (
    <>
      <AuthProvider>
        <FinanceDataContextProvider>
          <ExpensesAndResultsBarProvider>
            <FinanceSaverProvider>
              <CurrencyContextProvider>
                <UseScrollToTop />
                <BgAnimation />
                <MainRoutes />
              </CurrencyContextProvider>
            </FinanceSaverProvider>
          </ExpensesAndResultsBarProvider>
        </FinanceDataContextProvider>
      </AuthProvider>
    </>
  );
}

export default App;
