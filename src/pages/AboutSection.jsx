import React from "react";
import { FaUsers, FaLightbulb, FaLayerGroup } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="w-11/12 max-w-6xl mx-auto mt-30 min-h-[55vh]">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-4">Who We Are</h2>
        <p className="text-gray-400 max-w-xl mx-auto text-lg">
          StudyBond is built for learners who grow stronger through teamwork. We
          combine smart tools, structured learning, and a passionate community
          to help you thrive.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Card 1 */}
        <div className="bg-zinc-900 p-6 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300 text-center">
          <div className="text-green-500 text-3xl mb-4 mx-auto">
            <FaUsers />
          </div>
          <h3 className="text-white text-xl font-semibold mb-2">
            Community First
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Connect with peers, share insights, and solve problems together —
            because learning is better when it's shared.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-zinc-900 p-6 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300 text-center">
          <div className="text-green-500 text-3xl mb-4 mx-auto">
            <FaLightbulb />
          </div>
          <h3 className="text-white text-xl font-semibold mb-2">
            Smart Features
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            From assignment tracking to real-time feedback, we offer tools that
            make your academic journey efficient and fun.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-zinc-900 p-6 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300 text-center">
          <div className="text-green-500 text-3xl mb-4 mx-auto">
            <FaLayerGroup />
          </div>
          <h3 className="text-white text-xl font-semibold mb-2">
            Structured Learning
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Clear milestones, grouped tasks, and goal-focused activities help
            you stay on track and achieve more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
