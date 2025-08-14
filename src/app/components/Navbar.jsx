"use client";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#100f12] shadow-md shadow-black/30">
       <div
    className={`flex items-center h-20 px-8 ${
      isOpen ? "justify-end" : "justify-between"
    }`}
  >
    {!isOpen && (
      <h1 className="bg-gradient-to-r from-purple-800 to-purple-400  bg-clip-text text-transparent font-bold text-2xl">
        MyPortfolio
      </h1>
    )}

        <ul className="hidden md:flex gap-8 font-semibold text-white ">
          <li  className="hover:text-purple-800 hover:tracking-wider cursor-pointer"><a href="#home">Home</a></li>
          <li className="hover:text-purple-800 hover:tracking-wider cursor-pointer"><a href="#about">About</a></li>
          <li className="hover:text-purple-800 hover:tracking-wider cursor-pointer"><a href="#skills">Skills</a></li>
          <li className="hover:text-purple-800 hover:tracking-wider cursor-pointer"><a href="#project">Projects</a></li>
          <li className="hover:text-purple-800 hover:tracking-wider cursor-pointer"><a href="#contact">Contact</a></li>
        </ul>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(true)}
        >
          <FaBars />
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-64  bg-[#100f12] text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden border-l border-white/30`}
      >
        <div className="flex justify-between items-center p-6">
          <h1 className="text-purple-500 font-bold">My Portfolio</h1>
          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <ul className="flex flex-col items-center gap-6 font-semibold mt-10">
          <li className="hover:text-purple-400 cursor-pointer">Home</li>
          <li className="hover:text-purple-400 cursor-pointer">About</li>
          <li className="hover:text-purple-400 cursor-pointer">Projects</li>
          <li className="hover:text-purple-400 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
