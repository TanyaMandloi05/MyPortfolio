import React from "react";
import { CiMail, CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="relative bg-black min-h-screen flex flex-col items-center justify-center px-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-700 rounded-full blur-[150px] opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-700 rounded-full blur-[150px] opacity-30"></div>
        <div className="absolute bottom-10 left-1/4 w-[300px] h-[300px] bg-fuchsia-700 rounded-full blur-[150px] opacity-20"></div>
      </div>

     <h1 className="text-4xl font-bold mb-6 py-4 bg-gradient-to-r from-purple-800 to-purple-200 bg-clip-text text-transparent" >Get in Touch</h1>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full">
        <div className="flex flex-col">
            <h1 className="text-2xl text-white mb-4">Let's connect !</h1>
          <p className="mb-6 leading-relaxed text-gray-500 text-xl">
            I’m always excited to connect, collaborate, and explore new opportunities. 
            Whether it’s a project, an idea, or a potential role, feel free to reach out. 
            I’m eager to learn, grow, and contribute to meaningful work, and I’d love to hear from you!
          </p>
          <div className="flex gap-4 mt-4">
            <a className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent border border-purple-400 hover:bg-purple-400 text-white text-2xl">
              <CiMail />
            </a>
            <a className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent border border-purple-400 hover:bg-purple-400 text-white text-2xl">
              <CiLinkedin />
            </a>
            <a className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent border border-purple-400 hover:bg-purple-400 text-white text-2xl">
              <FaGithub />
            </a>
            <a className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent border border-purple-400 hover:bg-purple-400 text-white text-2xl">
              <BsTwitterX />
            </a>
          </div>
        </div>

        <div className="bg-[#111] p-8 rounded-2xl shadow-lg border border-white/10">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-lg bg-transparent border border-gray-500 text-white focus:outline-none focus:border-purple-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-lg bg-transparent border border-gray-500 text-white focus:outline-none focus:border-purple-400"
            />
            <textarea
              rows={6}
              placeholder="Your Message"
              className="p-4 rounded-lg bg-transparent border border-gray-500 text-white focus:outline-none focus:border-purple-400"
            ></textarea>
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
