"use client";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

const About = () => {
  return (
    <section className="bg-black relative py-20 overflow-hidden" id="about">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-700 rounded-full blur-[150px] opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-700 rounded-full blur-[150px] opacity-30"></div>
        <div className="absolute bottom-10 left-1/4 w-[300px] h-[300px] bg-fuchsia-700 rounded-full blur-[150px] opacity-20"></div>
      </div>

      <div className="flex flex-col items-center justify-center gap-12 relative  min-h-screen">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center bg-gradient-to-r from-purple-800 to-purple-200 bg-clip-text text-transparent font-bold text-4xl"
        >
          About me
        </motion.h1>

        <div className="flex flex-col sm:flex-row justify-start justify-center items-center gap-12 sm:gap-24">
          <motion.img
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src="/Tanya.jpg"
            className="h-80 w-80 rounded-full object-cover"
            alt="Tanya"
          />

          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:items-start"
          >
            <p className="w-96 text-gray-400 text-xl">
              I’m an Integrated MCA student at Acropolis Institute of Technology and Research (CGPA 7.89).I specialize in full-stack web development and like experimenting with new tools and frameworks. I started with C and I’m steadily building my skills through coursework and practice. If you’re looking for someone who’s eager to learn, grow, and contribute, I’d be excited to connect!
            </p>

            <div className="mt-8">
              <a href="https://www.linkedin.com/in/tanyamandloi/">
                <button className="text-white text-xl bg-[#0077B5] p-3 rounded-full border-2 border-white hover:shadow-md hover:shadow-[#0077B5] hover:cursor-pointer transition mr-2">
                  <FaLinkedin />
                </button>
              </a>

              <a href="https://github.com/TanyaMandloi05">
                <button className="text-white text-xl bg-[#2b3137] p-3 rounded-full border-2 border-white hover:shadow-sm hover:shadow-white hover:cursor-pointer transition mr-2">
                  <BsGithub />
                </button>
              </a>

              <a href="https://leetcode.com/u/TanyaMandloi/">
                <button className="text-white text-xl bg-[#FFA500] p-3 rounded-full border-2 border-white hover:shadow-md hover:shadow-[#FFA500] hover:cursor-pointer transition mr-2">
                  <SiLeetcode />
                </button>
              </a>

              <a href="https://www.geeksforgeeks.org/user/tanyamandfmmo/">
                <button className="text-white text-xl bg-[#2F8D46] p-3 rounded-full border-2 border-white hover:shadow-md hover:shadow-[#2F8D46] hover:cursor-pointer transition mr-2">
                  <SiGeeksforgeeks />
                </button>
              </a>
            </div>
            <a href="https://drive.google.com/file/d/1HRAFD7QKdxDtDoNhJ83qlIQKWMNJRCOG/view?usp=sharing">
              <button className="px-6 py-3 w-28 sm:px-6 sm:py-3 border border-purple-500 text-purple-500 rounded-lg font-medium hover:bg-purple-500 hover:text-white hover:cursor-pointer transition mt-8 shadow-md hover:shadow-purple-500/50">
                Resume
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
