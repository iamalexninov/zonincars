import { Hero } from "../components/hero/Hero";
import { ExplorePremiumBrands } from "../components/premium-brands/PremiumBrands";
import { AllVehicles } from "../components/all-vehicles/AllVehicles";
import { Services } from "../components/services/Services";
import { Stats } from "../components/stats/Stats";
import { WhyChooseUs } from "../components/why-choose-us/WhyChooseUs";

export const Home = () => {
  return (
    <>
      <Hero />
      <ExplorePremiumBrands />
      <AllVehicles />
      <Services />
      <Stats />
      <WhyChooseUs />
    </>
  );
};
