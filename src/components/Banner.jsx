import React from "react";
import animationBg from "../assets/animationbg.json";
import Lottie from "lottie-react";
import { motion } from "motion/react";
import {
  FaFacebook,
  FaLinkedinIn,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: 100 },
    hover: { scale: 1.2 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative">
      <Lottie
        animationData={animationBg}
        loop={true}
        autoPlay={true}
        className="h-[92vh] "
      />
      <div className="h-[92vh] w-full absolute top-0 left-0 bg-transparent">
        <div>
          <div className="absolute top-40 left-10 hidden md:flex">
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="flex flex-col gap-4"
            >
              <motion.a
                href=""
                variants={itemVariants}
                className="bg-zinc-700 p-[6px] rounded-full border-[1.5px] border-[#37c386]"
              >
                <FaLinkedinIn size={22} color="white" />
              </motion.a>
              <motion.a
                href=""
                variants={itemVariants}
                className="bg-zinc-700 p-[6px] rounded-full border-[1.5px] border-[#37c386]"
              >
                <FaFacebook size={24} color="white" />
              </motion.a>
              <motion.a
                href=""
                variants={itemVariants}
                className="bg-zinc-700 p-[6px] rounded-full border-[1.5px] border-[#37c386]"
              >
                <IoLogoInstagram size={24} color="white" />
              </motion.a>
              <motion.a
                href=""
                variants={itemVariants}
                className="bg-zinc-700 p-[6px] rounded-full border-[1.5px] border-[#37c386]"
              >
                <FaTwitter size={22} color="white" />
              </motion.a>
              <motion.a
                href=""
                variants={itemVariants}
                className="bg-zinc-700 p-[6px] rounded-full border-[1.5px] border-[#37c386]"
              >
                <FaTelegramPlane size={24} color="white" />
              </motion.a>
            </motion.ul>
          </div>
        </div>
        {/* for Small device  */}
        <div className="absolute bottom-5 left-2 md:hidden">
          <h2
            className="text-2xl mb-3
          font-thin"
          >
            Social Contact
          </h2>
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="flex gap-3"
          >
            <motion.a
              href=""
              variants={itemVariants}
              className="bg-zinc-700 p-[6px] rounded-full"
            >
              <FaLinkedinIn size={12} />
            </motion.a>
            <motion.a
              href=""
              variants={itemVariants}
              className="bg-zinc-700 p-[6px] rounded-full"
            >
              <FaFacebook size={14} />
            </motion.a>
            <motion.a
              href=""
              variants={itemVariants}
              className="bg-zinc-700 p-[6px] rounded-full"
            >
              <IoLogoInstagram size={14} />
            </motion.a>
            <motion.a
              href=""
              variants={itemVariants}
              className="bg-zinc-700 p-[6px] rounded-full"
            >
              <FaTwitter size={12} />
            </motion.a>
            <motion.a
              href=""
              variants={itemVariants}
              className="bg-zinc-700 p-[6px] rounded-full"
            >
              <FaTelegramPlane size={14} />
            </motion.a>
          </motion.ul>
        </div>
        <div className="absolute bottom-34 left-10 space-y-10">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 0.2, ease: "backInOut" }}
            className="text-5xl font-bold"
          >
            Study Together. Grow Smarter.
          </motion.h1>
          <motion.p
            className="text-lg text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Join{" "}
            <span className="uppercase font-thin underline underline-offset-4 text-green-300">
              Study Bond
            </span>{" "}
            – a collaborative platform <br className="hidden md:block" />
            where friends share, submit, and grade assignments together.
          </motion.p>
          <motion.button
            className="border px-6 py-2 rounded-full transition-all duration-200 cursor-pointer bg-white/20 backdrop-blur-[2px]"
            initial={{ opacity: 0, scale: 0.5, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "backOut", delay: 0.4 }}
            whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
            whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
