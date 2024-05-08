import React from "react";
import OurExpertise from "../components/Home/OurExpertise";
import WelcomeSection from "../components/Home/WelcomeSection";
import IndustriesWeServe from "../components/Home/IndustriesWeServe";
import OurTeam from '../components/Home/OurTeam' 
import OurVision from "../components/Home/OurVision";
const Home = () => {
  return (
    <div className="text-[#0A0A0A]">
      <WelcomeSection />
      <OurExpertise />
      <IndustriesWeServe/>
      <OurTeam/>
      <OurVision/>
    </div>
  );
};

export default Home;
