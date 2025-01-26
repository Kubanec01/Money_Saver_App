import { Hero } from "./components/hero/Hero";
import { Info } from "./components/info/Info";
import { SaverSection } from "./saverFunction/SaverSection";

export const HomePage = () => {
  return (
    <div className="w-full">
      <Hero />
      <Info />
      <SaverSection />
    </div>
  );
};