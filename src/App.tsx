import { BgAnimation } from "./components/BgAnimation";
import { AuthProvider } from "./hooks/auth/authContext/authContext";
import { CurrencyDataContextProvider } from "./hooks/context/CurrencyDataContext";
import { ExpensesAndResultsDataContextProvider } from "./hooks/context/ExpensesAndResultsDataContext";
import { FinanceDataContextProvider } from "./hooks/context/FinanceDataContext";
import { UseScrollToTop } from "./hooks/UseScrollToTop";
import { MainRoutes } from "./routes/MainRoutes";

function App() {
  return (
    <>
      <AuthProvider>
        <FinanceDataContextProvider>
          <ExpensesAndResultsDataContextProvider>
            <CurrencyDataContextProvider>
              <UseScrollToTop />
              <BgAnimation />
              <MainRoutes />
            </CurrencyDataContextProvider>
          </ExpensesAndResultsDataContextProvider>
        </FinanceDataContextProvider>
      </AuthProvider>
    </>
  );
}

export default App;
