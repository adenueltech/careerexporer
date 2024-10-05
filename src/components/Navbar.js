import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-900 p-4 text-white fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold"><span style={{color:'orange'}}>A</span>de's-<span style={{color:'orange'}}>T</span>ech</div>

        {/* Hamburger Icon for Mobile Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Links for larger screens */}
        <ul className="hidden md:flex space-x-8">
          <li className="group">
            <a href="home" className="relative pb-2 hover:text-gray-400">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li className="group">
            <a href="#services" className="relative pb-2 hover:text-gray-400">
              Services
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li className="group">
            <a href="#about" className="relative pb-2 hover:text-gray-400">
              About
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li className="group">
            <a href="#contact" className="relative pb-2 hover:text-gray-400">
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-gray-900 z-40 overflow-y-auto">
          <ul className="flex flex-col space-y-8 p-8">
            <li className="group">
              <a href="#home" onClick={toggleMenu} className="text-white text-xl">
                Home
              </a>
            </li>
            <li className="group">
              <a href="#services" onClick={toggleMenu} className="text-white text-xl">
                Services
              </a>
            </li>
            <li className="group">
              <a href="#about" onClick={toggleMenu} className="text-white text-xl">
                About
              </a>
            </li>
            <li className="group">
              <a href="#contact" onClick={toggleMenu} className="text-white text-xl">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


