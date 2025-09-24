
import React from "react";
import { MoonIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo1.png'; 

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white ">
      
      <div className="flex items-center space-x-2">
        <img src={logo} alt="agency.ai logo" className="w-40 h-40 object-contain" /> 
        
      </div>

      
      <ul className="hidden md:flex space-x-6  text-gray-700 font-medium text-xl">
        <li className="hover:text-gray-900 cursor-pointer">Home</li>
        <li className="hover:text-gray-900 cursor-pointer">Services</li>
        <li className="hover:text-gray-900 cursor-pointer">Our work</li>
        <li className="hover:text-gray-900 cursor-pointer">Testimonial</li>
      </ul>

      
      <div className="flex items-center space-x-4">
        
        <button className="p-2 rounded-full bg-blue-300 hover:bg-purple-300 cursor-pointer">
          <MoonIcon className="w-5 h-5 text-gray-700" />
        </button>

        
        <button className="bg-blue text-white px-4 py-2 rounded-full bg-purple-600 cursor-pointer hover:bg-blue-500 transition text-xl">
          Connect 
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
