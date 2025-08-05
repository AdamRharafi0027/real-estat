"use client";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri"; 
import { IoCloseCircle } from "react-icons/io5";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-500">
          Dream<span className="text-gray-800">Home</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#home" className="hover:text-orange-500 transition">Home</a>
          <a href="#listings" className="hover:text-orange-500 transition">Listings</a>
          <a href="#about" className="hover:text-orange-500 transition">About</a>
          <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-orange-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-orange-600 transition"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <IoCloseCircle className="w-6 h-6 text-gray-800" /> : <RiMenu3Line className="w-6 h-6 text-gray-800" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 pt-2 space-y-2 text-gray-700 font-medium shadow">
          <a href="#home" className="block hover:text-orange-500" onClick={toggleMenu}>Home</a>
          <a href="#listings" className="block hover:text-orange-500" onClick={toggleMenu}>Listings</a>
          <a href="#about" className="block hover:text-orange-500" onClick={toggleMenu}>About</a>
          <a href="#contact" className="block hover:text-orange-500" onClick={toggleMenu}>Contact</a>
          <a
            href="#contact"
            className="block mt-3 bg-orange-500 text-white px-4 py-2 rounded-lg font-medium text-center hover:bg-orange-600 transition"
            onClick={toggleMenu}
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}
