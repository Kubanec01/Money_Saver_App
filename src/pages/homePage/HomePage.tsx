import { Hero } from "./components/hero/Hero";
import { Info } from "./components/info/Info";
import { ExplainSection } from "./saverFunction/components/explainSection/ExplainSection";
import { SaverSection } from "./saverFunction/SaverSection";

export const HomePage = () => {
  return (
    <div className="w-full">
      <Hero />
      <Info />
      <SaverSection />
      <ExplainSection />
    </div>
  );
};