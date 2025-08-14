import React from "react";
import { FaJava } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { GrMysql } from "react-icons/gr";

const Skills = () => {
  return (
    <section className=" bg-black  relative">
      <div className=" flex-row flex-wrap sm:flex-col justify-center items-center min-h-screen">
        <h1 className="text-center text-4xl py-12 bg-gradient-to-r from-purple-800 to-purple-200 bg-clip-text text-transparent font-bold">
          Skills and technologies
        </h1>
        <div className="flex justify-center items-center gap-12">
          <div className="card w-80 h-80 border border-purple-400 ring  hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] ring-purple-400  rounded-md">
            <h2 className="text-center mt-8 text-white text-lg underline underline-offset-6">
              Programming Languages
            </h2>
            <div className="flex items-center mt-8">
              <span className="text-4xl text-white ml-4">
                <FaJava />
              </span>
              <p className="text-white ml-2 mt-4">Java</p>
            </div>

            <div className="flex items-center mt-4">
              <span className="text-4xl text-white ml-4">
                <TbBrandJavascript />
              </span>
              <p className="text-white ml-4">Javascript</p>
            </div>
          </div>

          <div className="card w-80 h-80 border border-purple-400 ring  hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] ring-purple-400  rounded-md">
            <h2 className="text-center mt-8 text-white text-lg underline underline-offset-6">
              Frontend
            </h2>
            <div className="flex flex-wrap mt-8">
              <div className="flex items-center ">
                <span className="text-4xl text-white ml-4">
                  <FaHtml5 />
                </span>
                <p className="text-white ml-2">Html</p>
              </div>

              <div className="flex items-center ">
                <span className="text-4xl text-white ml-4">
                  <FaCss3Alt />
                </span>
                <p className="text-white ml-4">Css</p>
              </div>

              <div className="flex items-center mt-4">
                <span className="text-4xl text-white ml-4">
                  <FaBootstrap />
                </span>
                <p className="text-white ml-4">Bootstrap</p>
              </div>

              <div className="flex items-center mt-4">
                <span className="text-4xl text-white ml-4">
                  <RiTailwindCssFill />
                </span>
                <p className="text-white ml-4">tailwind</p>
              </div>

              <div className="flex items-center mt-4">
                <span className="text-4xl text-white ml-4">
                  <FaReact />
                </span>
                <p className="text-white ml-4">React</p>
              </div>
            </div>
          </div>
          <div className="card w-80 h-80 border border-purple-400 ring  hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] ring-purple-400  rounded-md">
            <h2 className="text-center mt-8 text-white text-lg underline underline-offset-6">
              Backend
            </h2>
            <div className="flex items-center mt-8">
              <span className="text-4xl text-white ml-4">
                <FaNodeJs />
              </span>
              <p className="text-white ml-2 mt-4">Node js</p>
            </div>

            <div className="flex items-center mt-4">
              <p className="text-white ml-4">Express js</p>
            </div>

            <div className="flex items-center mt-4">
              <p className="text-white ml-4">Rest Apis</p>
            </div>
          </div>

          <div className="card w-80 h-80 border border-purple-400 ring  hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] ring-purple-400  rounded-md">
            <h2 className="text-center mt-8 text-white text-lg underline underline-offset-6">
              Database
            </h2>
            <div className="flex items-center mt-8">
              <span className="text-4xl text-white ml-4">
                <DiMongodb />
              </span>
              <p className="text-white ml-2 mt-4">Mongo db</p>
            </div>

            <div className="flex items-center mt-4">
              <span className="text-4xl text-white ml-4">
                <GrMysql />
              </span>
              <p className="text-white ml-4">My sql</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
