import { BgAnimation } from "./components/BgAnimation";
import { Navbar } from "./components/navbar/Navbar";
import { FinanceSaverProvider } from "./hooks/context/FinanceContext";
import { HomePage } from "./pages/homePage/HomePage";
function App() {
  return (
    <>
      <FinanceSaverProvider>
        <Navbar />
        <BgAnimation />
        <HomePage />
      </FinanceSaverProvider>
    </>
  );
}

export default App;
