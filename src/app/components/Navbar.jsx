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
    {/* Show heading only if sidebar is closed */}
    {!isOpen && (
      <h1 className="text-purple-500 font-bold">
        My Portfolio
      </h1>
    )}

        <ul className="hidden md:flex gap-8 font-semibold text-white">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(true)}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Sidebar */}
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
