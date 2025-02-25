import { BgAnimation } from "./components/BgAnimation";
import { Navbar } from "./components/navbar/Navbar";
import { CurrencyContextProvider } from "./hooks/context/CurrencyContext";
import { ExpensesAndResultsBarProvider } from "./hooks/context/ExpensesAndResultsBarContext";
import { FinanceSaverProvider } from "./hooks/context/FinanceContext";
import { HomePage } from "./pages/homePage/HomePage";

function App() {
  return (
    <>
      <ExpensesAndResultsBarProvider>
        <FinanceSaverProvider>
          <CurrencyContextProvider>
            <Navbar />
            <BgAnimation />
            <HomePage />
          </CurrencyContextProvider>
        </FinanceSaverProvider>
      </ExpensesAndResultsBarProvider>
    </>
  );
}

export default App;
