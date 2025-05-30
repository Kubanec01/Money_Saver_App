import { Hero } from "./components/hero/Hero";
import { Info } from "./components/info/Info";
import { MissingBudgetModal } from "../../components/modals/missingBudgetModal/MissingBudgetModal";
import { ExplainSection } from "./saverFunction/components/explainSection/explainSection/ExplainSection";
import { SaverSection } from "./saverFunction/SaverSection";
import { ResetValuesModal } from "../../components/modals/restartValuesModal/ResetValuesModal";
import { Navbar } from "../../components/navbars/navbar/Navbar";

const HomePage = () => {
  return (
    <div className="w-full">
      <ResetValuesModal />
      <MissingBudgetModal />
      <Navbar />
      <Hero />
      <Info />
      <SaverSection />
      <ExplainSection />
    </div>
  );
};

export default HomePage;
