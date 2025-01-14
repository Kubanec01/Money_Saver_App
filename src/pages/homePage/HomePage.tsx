import { Hero } from "./components/hero/Hero";
import { Info } from "./components/info/Info";

export const HomePage = () => {
  return (
    <div className="w-full">
      <Hero />
      <Info />
    </div>
  );
};
