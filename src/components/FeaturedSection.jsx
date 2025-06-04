import { motion } from "framer-motion";
import { FaTasks, FaUsers, FaChartLine, FaLock } from "react-icons/fa";

const features = [
  {
    title: "Create Assignments Easily",
    description:
      "Share assignments with all registered users in just a few clicks.",
    icon: <FaTasks className="text-3xl text-indigo-500" />,
  },
  {
    title: "Peer Grading System",
    description:
      "Evaluate and give feedback to your friends' assignments to learn better.",
    icon: <FaUsers className="text-3xl text-green-500" />,
  },
  {
    title: "Track Progress",
    description:
      "See your submission history, grades, and feedback at a glance.",
    icon: <FaChartLine className="text-3xl text-blue-500" />,
  },
  {
    title: "Secure & Private",
    description:
      "Data is protected using Firebase Auth and JWT. Only you control what you see.",
    icon: <FaLock className="text-3xl text-red-500" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const FeatureSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="md:text-3xl text-xl font-bold mb-4">
          Why Choose Study Bond?
        </h2>
        <p className="text-gray-500">
          A collaborative space where learning is shared, safe, and efficient.
        </p>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="grid w-10/12 grid-cols-1 md:grid-cols-2 gap-10 mx-auto"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 border rounded-xl hover:border-indigo-500 hover:duration-300 cursor-pointer"
            variants={itemVariants}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-500">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeatureSection;
