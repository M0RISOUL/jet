import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ──────── TOP BAR (sticky) ──────── */}
      <header className="bg-white text-black sticky top-0 w-full flex justify-between items-center px-6 py-4 shadow-md z-50">
        {/* Logo / Name */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500">
            <img
              src="/JA.jpg"
              alt="Jet Boy Abordaje"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-xl font-semibold text-transparent bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-yellow-400 bg-clip-text animate-gradient bg-[length:300%_300%]">
            Jet Boy Abordaje
          </h1>
        </div>

        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex gap-8 font-medium">
          <Link to="/"        className="hover:underline">Home</Link>
          <Link to="/about"   className="hover:underline">About</Link>
          <Link to="/projects" className="hover:underline">Projects</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden text-2xl"
          aria-label="Open menu"
        >
          <HiMenu />
        </button>
      </header>

      {/* ──────── BACKDROP (mobile) ──────── */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ──────── SIDEBAR (mobile) ──────── */}
      <aside
        className={`fixed top-0 left-0 h-full w-56 bg-white text-black flex flex-col gap-8 px-6 pt-24 shadow-lg z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-2xl"
          aria-label="Close menu"
        >
          <HiX />
        </button>

        <Link to="/"        onClick={() => setOpen(false)} className="text-lg font-medium hover:text-blue-600">Home</Link>
        <Link to="/about"   onClick={() => setOpen(false)} className="text-lg font-medium hover:text-blue-600">About</Link>
        <Link to="/projects" onClick={() => setOpen(false)} className="text-lg font-medium hover:text-blue-600">Projects</Link>
        <Link to="/contact" onClick={() => setOpen(false)} className="text-lg font-medium hover:text-blue-600">Contact</Link>
      </aside>
    </>
  );
}
