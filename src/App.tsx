import { BgAnimation } from "./components/BgAnimation";
import { Navbar } from "./components/navbar/Navbar";
import { ExpensesAndResultsBarProvider } from "./hooks/context/ExpensesAndResultsBarContext";
import { FinanceSaverProvider } from "./hooks/context/FinanceContext";
import { HomePage } from "./pages/homePage/HomePage";

function App() {
  return (
    <>
      <ExpensesAndResultsBarProvider>
        <FinanceSaverProvider>
          <Navbar />
          <BgAnimation />
          <HomePage />
        </FinanceSaverProvider>
      </ExpensesAndResultsBarProvider>
    </>
  );
}

export default App;
