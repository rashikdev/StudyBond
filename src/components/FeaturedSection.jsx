import { motion } from "framer-motion";
import { BsShieldLockFill } from "react-icons/bs";
import { CgGoogleTasks } from "react-icons/cg";
import { FaUsers, FaChartLine } from "react-icons/fa";
import { IoSearchCircleOutline } from "react-icons/io5";

const FeatureSection = () => {
  return (
    <section className="py-16 px-4 mt-40">
      <div className="text-center mb-10">
        <h2 className="md:text-3xl text-xl font-bold mb-2 bg-gradient-to-bl to-green-400 bg-clip-text text-transparent">
          Why Choose Study Bond?
        </h2>
        <p className="text-gray-400">
          A collaborative space where learning is shared, safe, and efficient.
        </p>
      </div>
      <div className="w-20/20 mx-auto flex justify-center items-center h-fit py-10">
        <div className="lg:w-10/15 mx-auto flex flex-col gap-10 text-white overflow-hidden">
          <div className="flex flex-col md:flex-row gap-10 justify-between">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="p-[2px] rounded-2xl bg-gradient-to-tr from-[#0f172a] via-green-700 to-emerald-400 hover:from-green-600 hover:to-emerald-500"
            >
              <div className="bg-black rounded-2xl flex flex-col justify-center items-center gap-2 text-center md:h-48 md:w-70 p-4 text-white">
                <CgGoogleTasks className="text-4xl text-green-400 shadow-[0px_0px_20px_0px_white] rounded-full" />
                <h2 className="text-lg font-bold">Create Assignments Easily</h2>
                <p className="text-gray-400">
                  Share assignments with all registered users in just a few
                  clicks.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="p-[2px] rounded-2xl bg-gradient-to-tr from-[#0f172a] via-green-700 to-emerald-400 hover:from-green-600 hover:to-emerald-500"
            >
              <div className="bg-black rounded-2xl flex flex-col justify-center items-center gap-2 text-center md:h-48 md:w-70 p-4 text-white">
                <IoSearchCircleOutline className="text-4xl text-orange-500 shadow-[0px_0px_20px_0px_white] rounded-full" />
                <h2 className="text-lg font-bold">
                  Filter & Search Assignments
                </h2>
                <p className="text-gray-400">
                  Easily find assignments by title or difficulty with powerful
                  filters.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-[2px] rounded-2xl bg-gradient-to-tr from-[#0f172a] via-green-700 to-emerald-400 hover:from-green-600 hover:to-emerald-500"
            >
              <div className="bg-black rounded-2xl flex flex-col justify-center items-center gap-2 text-center md:h-48 md:w-70 p-4 text-white">
                <FaUsers className="text-4xl text-green-500 shadow-[0px_0px_20px_0px_white] rounded-full p-1" />
                <h2 className="text-lg font-bold">Peer Grading System</h2>
                <p className="text-gray-400">
                  Evaluate and give feedback to your friends' assignments to
                  learn better.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-[2px] rounded-2xl bg-gradient-to-tr from-[#0f172a] via-green-700 to-emerald-400 hover:from-green-600 hover:to-emerald-500"
            >
              <div className="bg-black rounded-2xl flex flex-col justify-center items-center gap-2 text-center md:h-48 md:w-70 p-4 text-white">
                <FaChartLine className="text-4xl text-blue-500 shadow-[0px_0px_20px_0px_white] rounded-full p-1" />
                <h2 className="text-lg font-bold">Track Progress</h2>
                <p className="text-gray-400">
                  See your submission history, grades, and feedback at a glance.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="p-[2px] rounded-2xl bg-gradient-to-tr from-[#0f172a] via-green-700 to-emerald-400 hover:from-green-600 hover:to-emerald-500"
            >
              <div className="bg-black rounded-2xl flex flex-col justify-center items-center gap-2 text-center md:h-48 md:w-70 p-4 text-white">
                <BsShieldLockFill className="text-4xl text-red-500 shadow-[0px_0px_20px_0px_white] rounded-full p-1" />
                <h2 className="text-lg font-bold">Secure & Private</h2>
                <p className="text-gray-400">
                  Data is protected using Firebase Auth and JWT. Only you
                  control what you see.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
