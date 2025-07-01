import React, { useEffect } from "react";
import Banner from "../components/Banner";
import FeatureSection from "../components/FeaturedSection";
import FaqSection from "../components/FaqSection";
import RulesSection from "../components/RulesSection";
const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Banner></Banner>
      <FeatureSection></FeatureSection>
      <FaqSection></FaqSection>
      <RulesSection></RulesSection>
      {/* <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          💬 What Our Users Say
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 text-gray-700">
          <blockquote className="bg-gray-100 p-6 rounded-xl shadow">
            “Study Bond helped me stay organized and never miss deadlines
            again!”
            <footer className="mt-4 text-sm font-semibold text-right">
              – Ahsan, CSE Student
            </footer>
          </blockquote>
          <blockquote className="bg-gray-100 p-6 rounded-xl shadow">
            “Our group chat and assignment sync made study life so much easier.”
            <footer className="mt-4 text-sm font-semibold text-right">
              – Nafisa, SSC Candidate
            </footer>
          </blockquote>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
