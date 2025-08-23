"use client";
import { motion } from "framer-motion";
import Carousel from "../../animations/Carousel";
import Image from "next/image";
const Project = () => {
  return (
    <div className="bg-black relative" id="project">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-700 rounded-full blur-[150px] opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-700 rounded-full blur-[150px] opacity-30"></div>
        <div className="absolute bottom-10 left-1/4 w-[300px] h-[300px] bg-fuchsia-700 rounded-full blur-[150px] opacity-20"></div>
      </div>

      <div className=" flex-row flex-wrap sm:flex-col justify-center items-center ">
        <h1 className="text-center text-4xl py-12 bg-gradient-to-r from-purple-800 to-purple-200 bg-clip-text text-transparent font-bold">
          Projects
        </h1>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
               viewport={{ once: true }}
              className="card w-[350] h-[500] sm:w-[400px] sm:h-[500px] border border-purple-400 ring hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] ring-purple-400 rounded-xl overflow-hidden flex flex-col bg-[#0a0a0a]"
            >
              <img
                src="/handyhub6.png"
                alt=""
                className="w-[430px] p-2 rounded-t-xl m-auto"
              />

              <div className="flex flex-col flex-1 p-6 text-white justify-between">
                <div>
                  <h2 className="text-2xl font-bold">HandyHub</h2>
                  <p className="text-gray-400 text-sm mt-2">
                    Built a full-stack e-commerce platform for buying and
                    selling handmade products, featuring secure local
                    authentication with Passport.js, product listing management
                    with MongoDB, cart and wishlist functionality, and
                    Cloudinary integration for image uploads.
                  </p>
                  <p className="mt-3 text-purple-400 text-sm">
                    Node.js, Express.js, MongoDB, Passport.js, Bootstrap, CSS,
                    EJS
                  </p>
                </div>

                <div className="flex gap-4 mt-4">
                  <a
                    href="https://handyhub-1.onrender.com/"
                    className="flex-1 px-4 py-2 text-center border border-purple-500 text-purple-500 rounded-lg font-medium hover:bg-purple-500 hover:text-white transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/TanyaMandloi05/HandyHub"
                    className="flex-1 px-4 py-2 text-center border border-purple-500 text-purple-500 rounded-lg font-medium hover:bg-purple-500 hover:text-white transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
               viewport={{ once: true }}
              className="card  w-[350] h-[500] sm:w-[400px] sm:h-[500px] border border-purple-400 ring hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] ring-purple-400 rounded-xl overflow-hidden flex flex-col bg-[#0a0a0a]"
            >
              <img
                src="/wanderlust1.png"
                alt=""
                className="w-[430px] p-2 rounded-t-xl m-auto"
              />

              <div className="flex flex-col flex-1 p-6 text-white justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Wanderlust</h2>
                  <p className="text-gray-400 text-sm mt-2">
                    Built a travel listing platform with secure local
                    authentication via Passport.js, full CRUD functionality for
                    properties using Express and MongoDB, Cloudinary integration
                    for image uploads, and a responsive UI built with EJS and
                    Bootstrap.
                  </p>
                  <p className="mt-3 text-purple-400 text-sm">
                    Node.js, Express.js, MongoDB, Passport.js, Bootstrap, CSS,
                    EJS, Cloudinary
                  </p>
                </div>

                <div className="flex gap-4 mt-4">
                  <a
                    href="https://wanderlust-6u0o.onrender.com/listings"
                    className="flex-1 px-4 py-2 text-center border border-purple-500 text-purple-500 rounded-lg font-medium hover:bg-purple-500 hover:text-white transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/TanyaMandloi05/WanderLust"
                    className="flex-1 px-4 py-2 text-center border border-purple-500 text-purple-500 rounded-lg font-medium hover:bg-purple-500 hover:text-white transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
               viewport={{ once: true }}
              className="card  w-[350] h-[500] sm:w-[400px] sm:h-[500px] border border-purple-400 ring hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] ring-purple-400 rounded-xl overflow-hidden flex flex-col bg-[#0a0a0a]"
            >
              <img
                src="/syncChat.png"
                alt=""
                className="w-[430px] p-2 rounded-t-xl m-auto"
              />

              <div className="flex flex-col flex-1 p-6 text-white justify-between">
                <div>
                  <h2 className="text-2xl font-bold">SyncChat</h2>
                  <p className="text-gray-400 text-sm mt-2">
                    Built a full-stack real-time chat app with user search, live
                    typing indicators, instant message delivery, and controls
                    for deleting single messages or entire chats. Integrated
                    secure authentication with Clerk and designed a responsive,
                    user-friendly interface with a searchable sidebar.
                  </p>
                  <p className="mt-3 text-purple-400 text-sm">
                    React.js, Node.js, Express.js, MongoDB, Socket.io
                  </p>
                </div>

                <div className="flex gap-4 mt-4">
                  <a
                    href="https://sync-chat-project.netlify.app/"
                    className="flex-1 px-4 py-2 text-center border border-purple-500 text-purple-500 rounded-lg font-medium hover:bg-purple-500 hover:text-white transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/Sync-Chat/Sync-Chat"
                    className="flex-1 px-4 py-2 border text-center border-purple-500 text-purple-500 rounded-lg font-medium hover:bg-purple-500 hover:text-white transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
               viewport={{ once: true }}
              className="card  w-[350] h-[500] sm:w-[400px] sm:h-[500px] border border-purple-400 ring hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] ring-purple-400 rounded-xl overflow-hidden flex flex-col bg-[#0a0a0a]"
            >
              <img
                src="/portfolio1.png"
                alt=""
                className="w-[430px] p-2 rounded-t-xl m-auto"
              />

              <div className="flex flex-col flex-1 p-6 text-white justify-between">
                <div>
                  <h2 className="text-2xl font-bold">First Portfolio</h2>
                  <p className="text-gray-400 text-sm mt-2">
                    Designed my first responsive portfolio to showcase my
                    skills. Used Font Awesome for icons and integrated Web3Forms
                    for the contact form.
                  </p>
                  <p className="mt-3 text-purple-400 text-sm">
                    HTML, CSS, JavaScript.
                  </p>
                </div>

                <div className="flex gap-4 mt-4">
                  <a
                    href="https://myyppoorrttffoolliioo.netlify.app/"
                    className="flex-1 px-4 text-center py-2 border border-purple-500 text-purple-500 rounded-lg font-medium hover:bg-purple-500 hover:text-white transition"
                  >
                    Live Demo
                  </a>
                  <button className="flex-1 px-4 py-2 border border-purple-500 text-purple-500 rounded-lg font-medium hover:bg-purple-500 hover:text-white transition">
                    GitHub
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
               viewport={{ once: true }}
              className="card  w-[350] h-[500] sm:w-[400px] sm:h-[500px] border border-purple-400 ring hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] ring-purple-400 rounded-xl overflow-hidden flex flex-col bg-[#0a0a0a]"
            >
              <img
                src="/Zerodha.png"
                alt=""
                className="w-[430px] p-2 rounded-t-xl m-auto"
              />

              <div className="flex flex-col flex-1 p-6 text-white justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Zerodha Clone</h2>
                  <p className="text-gray-400 text-sm mt-2">
                    Developed a responsive clone of the Zerodha trading platform
                    with React.js. Focused on recreating the clean UI and smooth
                    navigation, styled with Bootstrap, and enhanced with Font
                    Awesome icons for visuals.
                  </p>
                  <p className="mt-3 text-purple-400 text-sm">
                    React, bootstrap.
                  </p>
                </div>

                <div className="flex gap-4 mt-4">
                  <button className="flex-1 px-4  border border-purple-500 text-purple-500 rounded-lg font-medium hover:bg-purple-500 hover:text-white transition">
                    Live Demo
                  </button>
                  <a
                    href="https://github.com/TanyaMandloi05/Zerodha"
                    className="flex-1 px-4 py-2 border border-purple-500 text-purple-500 rounded-lg font-medium hover:bg-purple-500 hover:text-white text-center transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
