import { Modal } from "../../components/modal/Modal";
import { FinanceSaverProvider } from "../../hooks/context/FinanceContext";
import { Hero } from "./components/hero/Hero";
import { Info } from "./components/info/Info";
import { ExplainSection } from "./saverFunction/components/explainSection/explainSection/ExplainSection";
import { SaverSection } from "./saverFunction/SaverSection";


export const HomePage = () => {


  return (
    <div className="w-full">
      <Modal />      
      <Hero />
      <Info />
      <FinanceSaverProvider>
        <SaverSection />
      </FinanceSaverProvider>
      <ExplainSection />
    </div>
  );
};
