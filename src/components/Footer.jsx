import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


import Logo from '../assets/logo1.png'; 

const FullFooter = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 font-sans">
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="flex flex-col space-y-4">
            
            <div className="flex items-center space-x-2">
              <img src={Logo} alt="Agency Logo" className="h-20 w-auto" /> 
            </div>
            <p className="text-xl font-semibold leading-relaxed">
              From strategy to execution, we craft digital solutions that move your business forward.
            </p>
            <ul className="flex space-x-4 text-lg text-blue-900 font-semibold">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Our work</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Testimonial</a></li>
            </ul>
          </div>

          
          <div className="col-span-1 md:col-span-2 flex flex-col items-start md:items-end">
            <h3 className="text-white text-lg font-semibold mb-2">Subscribe to our newsletter</h3>
            <p className="text-lg text-white mb-4 max-w-sm text-left">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <form className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-w-0 p-3 bg-gray-700 text-white placeholder-gray-400 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-r-md cursor-pointer hover:bg-purple-500 transition-colors duration-300 focus:outline-none"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      
      <div className="bg-gray-900 border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-16 space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            Copyright 2025 © agency.ai - All Right Reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <FaFacebookF className="text-lg" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <FaTwitter className="text-lg" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <FaInstagram className="text-lg" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <FaLinkedinIn className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FullFooter;