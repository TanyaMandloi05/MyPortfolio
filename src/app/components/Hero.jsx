"use client";
import React from "react";
import BlurText from "../../animations/Blurtext";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-start md:items-center  text-center px-4 bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-700 rounded-full blur-[150px] opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-700 rounded-full blur-[150px] opacity-30"></div>
        <div className="absolute bottom-10 left-1/4 w-[300px] h-[300px] bg-fuchsia-700 rounded-full blur-[150px] opacity-20"></div>
      </div>
      <BlurText
        text="Hi, I'm Tanya Mandloi"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-4xl sm:text-6xl font-bold text-purple-400 mb-8"
      />

      <BlurText
        text="A passionate full-stack developer creating amazing digital experiences with modern technologies and creative solutions."
        delay={40}
        animateBy="words"
        direction="left"
        className="text-gray-400 text-xl sm:text-2xl max-w-2xl mb-8 md:ml-8"
      />
      <div className="flex gap-4 mb-[150]">
        <motion.button
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="px-2 py-2 sm:px-6 sm:py-3 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-600 transition cursor-pointer"
        >
          View My Work
        </motion.button>

        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="px-2 py-2 sm:px-6 sm:py-3 border border-purple-500 text-purple-500 rounded-lg font-medium hover:bg-purple-500 hover:text-white cursor-pointer transition"
        >
          Get In Touch
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
