import React, { useEffect } from "react";
import Banner from "../components/Banner";
import FeatureSection from "../components/FeaturedSection";
import FaqSection from "../components/FaqSection";
import RulesSection from "../components/RulesSection";
import Testimonials from "./Testimonials";
const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Banner></Banner>
      <FeatureSection></FeatureSection>
      <RulesSection></RulesSection>
      <Testimonials></Testimonials>
      <FaqSection></FaqSection>
    </div>
  );
};

export default Home;
