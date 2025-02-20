import { FinanceSaverProvider } from "../../hooks/context/FinanceContext";
import { Hero } from "./components/hero/Hero";
import { Info } from "./components/info/Info";
import { MissingBudgetModal } from "../../components/modals/missingBudgetModal/MissingBudgetModal";
import { ExplainSection } from "./saverFunction/components/explainSection/explainSection/ExplainSection";
import { SaverSection } from "./saverFunction/SaverSection";
import { RestartValuesModal } from "../../components/modals/restartValuesModal/RestartValuesModal";

export const HomePage = () => {
  return (
    <div className="w-full">
      <Hero />
      <Info />
      <RestartValuesModal />
      <MissingBudgetModal />
      <SaverSection />
      <ExplainSection />
    </div>
  );
};
