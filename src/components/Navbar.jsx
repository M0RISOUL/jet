import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      {/* Left section: Avatar + Name */}
      <div className="flex items-center gap-4">
        {/* Circle with initials */}
        <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
          JB
        </div>
        {/* Name */}
        <h1 className="text-xl font-semibold text-transparent bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-yellow-400 bg-clip-text animate-gradient bg-[length:300%_300%]">
          Jet Boy Abordaje
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="space-x-6 font-medium">
        {/* white text + lighter blue on hover */}
        <Link to="/"        className="text-black hover:underline">Home</Link>
        <Link to="/about"   className="text-black hover:underline">About</Link>
        <Link to="/projects" className="text-black hover:underline">Projects</Link>
        <Link to="/contact" className="text-black hover:underline">Contact</Link>
      </nav>
    </header>
  );
}
