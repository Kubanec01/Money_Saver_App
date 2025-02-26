import { BgAnimation } from "./components/BgAnimation";
import { Navbar } from "./components/navbar/Navbar";
import { CurrencyContextProvider } from "./hooks/context/CurrencyContext";
import { ExpensesAndResultsBarProvider } from "./hooks/context/ExpensesAndResultsBarContext";
import { FinanceSaverProvider } from "./hooks/context/FinanceContext";
import { MainRoutes } from "./routes/MainRoutes";

function App() {
  return (
    <>
      <ExpensesAndResultsBarProvider>
        <FinanceSaverProvider>
          <CurrencyContextProvider>
            <Navbar />
            <BgAnimation />
            <MainRoutes />
          </CurrencyContextProvider>
        </FinanceSaverProvider>
      </ExpensesAndResultsBarProvider>
    </>
  );
}

export default App;
