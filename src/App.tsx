import { BgAnimation } from "./components/BgAnimation";
import { AuthProvider } from "./hooks/context/authContext";
import { CurrencyContextProvider } from "./hooks/context/CurrencyContext";
import { ExpensesAndResultsBarProvider } from "./hooks/context/ExpensesAndResultsBarContext";
import { FinanceSaverProvider } from "./hooks/context/FinanceContext";
import { UseScrollToTop } from "./hooks/UseScrollToTop";
import { MainRoutes } from "./routes/MainRoutes";

function App() {
  return (
    <>
      <AuthProvider>
        <ExpensesAndResultsBarProvider>
          <FinanceSaverProvider>
            <CurrencyContextProvider>
              <UseScrollToTop />
              <BgAnimation />
              <MainRoutes />
            </CurrencyContextProvider>
          </FinanceSaverProvider>
        </ExpensesAndResultsBarProvider>
      </AuthProvider>
    </>
  );
}

export default App;
