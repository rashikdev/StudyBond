import React, { useState } from "react";
import { motion, scale } from "motion/react";
import bgVideo from "../assets/bgvideo.mp4";
import {
  FaFacebook,
  FaLinkedinIn,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { Link } from "react-router";
import { TbArrowDownToArc } from "react-icons/tb";

const Banner = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="md:w-11/12 mx-auto pt-25">
      <div className="relative h-[80vh] overflow-hidden md:rounded-2xl">
        {/* Loader */}
        {!videoLoaded && (
          <div className="flex items-center justify-center w-full h-[100vh] text-gray-900">
            <div>
              <h1 className="text-xl md:text-7xl font-bold flex items-center">
                L
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="animate-spin"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.6695 15.9999H10.3295L8.95053 17.8969L9.5044 19.6031C10.2897 19.8607 11.1286 20 12 20C12.8714 20 13.7103 19.8607 14.4956 19.6031L15.0485 17.8969L13.6695 15.9999ZM5.29354 10.8719L4.00222 11.8095L4 12C4 13.7297 4.54894 15.3312 5.4821 16.6397L7.39254 16.6399L8.71453 14.8199L7.68654 11.6499L5.29354 10.8719ZM18.7055 10.8719L16.3125 11.6499L15.2845 14.8199L16.6065 16.6399L18.5179 16.6397C19.4511 15.3312 20 13.7297 20 12L19.997 11.81L18.7055 10.8719ZM12 9.536L9.656 11.238L10.552 14H13.447L14.343 11.238L12 9.536ZM14.2914 4.33299L12.9995 5.27293V7.78993L15.6935 9.74693L17.9325 9.01993L18.4867 7.3168C17.467 5.90685 15.9988 4.84254 14.2914 4.33299ZM9.70757 4.33329C8.00021 4.84307 6.53216 5.90762 5.51261 7.31778L6.06653 9.01993L8.30554 9.74693L10.9995 7.78993V5.27293L9.70757 4.33329Z"></path>
                </svg>{" "}
                ading . . .
              </h1>
            </div>
          </div>
        )}

        {/*  Video Background */}
        <motion.video
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className="w-full h-full object-cover"
        />

        {/* Content Overlay */}
        <div className="absolute top-0 left-0 w-full h-full z-10 text-white">
          {/* Banner Text */}
          <div className="absolute top-5 left-5 md:top-38 md:left-10 md:space-y-8 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 0.2, ease: "backInOut" }}
              viewport={{ once: true }}
              className="md:text-5xl text-3xl font-bold bg-gradient-to-br from-green-800 to-green-300 py-2 bg-clip-text text-transparent"
            >
              Study Together. Grow Smarter.
            </motion.h1>
            <motion.p
              className="text-lg md:text-left text-zinc-500"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Join{" "}
              <span className="uppercase font-thin underline underline-offset-4 text-green-300">
                Study Bond
              </span>{" "}
              – a collaborative platform <br className="hidden md:block" />
              where friends share, submit, and grade assignments together.
            </motion.p>
          </div>
          <Link to="/assignments">
            <motion.button
              initial={{ opacity: 0, y: 50, scale: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute bottom-54 md:bottom-58 lg:bottom-75 backdrop-blur-md md:p-4 p-2 shadow-[0_0_35px_#0dac17c3] rounded-[30px_0_30px_0px] cursor-pointer left-1/2 text-sm md:text-md transform -translate-x-1/2 text-green-400 font-semibold animate-pulse hover:text-white hover:bg-green-600"
            >
              Get Started
            </motion.button>
          </Link>
          <button
            onClick={() => window.scrollTo({ top: 1045, behavior: "smooth" })}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer"
          >
            <TbArrowDownToArc
              size={30}
              className="animate-bounce bg-blend-screen backdrop-blur-md text-[#196b11fb]"
            />
          </button>
          {/* Social Icons */}
          {/* <div className="absolute bottom-90 right-10 hidden md:flex">
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {[
              FaLinkedinIn,
              FaFacebook,
              IoLogoInstagram,
              FaTwitter,
              FaTelegramPlane,
            ].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                variants={itemVariants}
                className="bg-zinc-700 p-[6px] rounded-full border-[1.5px] border-[#37c386]"
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </motion.ul>
        </div> */}
          {/* Mobile Social Icons */}
          {/* <div className="absolute bottom-5 left-2 md:hidden">
          <h2 className="text-2xl mb-3 font-thin">Social Contact</h2>
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            className="flex gap-3"
          >
            {[
              FaLinkedinIn,
              FaFacebook,
              IoLogoInstagram,
              FaTwitter,
              FaTelegramPlane,
            ].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                variants={itemVariants}
                className="bg-zinc-700 p-[6px] rounded-full"
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </motion.ul>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
