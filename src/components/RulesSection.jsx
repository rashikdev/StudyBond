import {
  FaRegHandshake,
  FaRegClock,
  FaRegComments,
  FaRegThumbsUp,
  FaUserShield,
  FaRegGrinStars,
} from "react-icons/fa";
import { motion } from "motion/react";

const RulesSection = () => {
  const rules = [
    {
      icon: <FaRegHandshake className="text-blue-600 text-2xl" />,
      title: "Respect Everyone",
      desc: "Be kind and respectful to all group members and their opinions.",
    },
    {
      icon: <FaRegComments className="text-green-600 text-2xl" />,
      title: "Stay On Topic",
      desc: "Keep discussions focused on study-related content only.",
    },
    {
      icon: <FaRegClock className="text-yellow-500 text-2xl" />,
      title: "Meet Deadlines",
      desc: "Submit your assignments before the due date.",
    },
    {
      icon: <FaRegThumbsUp className="text-purple-500 text-2xl" />,
      title: "Avoid Spam",
      desc: "No spamming, self-promotion, or irrelevant links.",
    },
    {
      icon: <FaUserShield className="text-red-500 text-2xl" />,
      title: "Safe Environment",
      desc: "No inappropriate content or harassment will be tolerated.",
    },
    {
      icon: <FaRegGrinStars className="text-pink-500 text-2xl" />,
      title: "Collaborate & Grow",
      desc: "Help each other, ask questions, and grow together.",
    },
  ];

  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      className="py-16 overflow-hidden"
      id="rules"
    >
      <div className="w-10/12 mx-auto px-4">
        <h2 className="text-3xl md:text-3xl font-bold text-center mb-20 text-green-500">
          STUDYBOND Community Rules
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {rules.map((rule, index) => (
            <motion.div
              variants={itemVariant}
              key={index}
              className="border-l-2 border-green-500 rounded-2xl p-6 shadow-md hover:shadow-lg"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="text-3xl">{rule.icon}</div>
                <h3 className="text-xl font-semibold">{rule.title}</h3>
              </div>
              <p className="text-gray-500">{rule.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default RulesSection;
