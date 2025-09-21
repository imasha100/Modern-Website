// src/LogoSection.jsx

import React from 'react';
import Teams from '../assets/teams.png';
import Google from '../assets/Google.png';
import Microsoft from '../assets/microsoft.png';
import Zoom from '../assets/Zoom.png';

const LogoSection = () => {
  return (
    <div className="mb-3 flex flex-col items-center">
      {/* Title */}
      <span className="text-2xl font-semibold text-gray-900 mb-0">
        Trusted By Leading Companies
      </span>

      {/* Logos */}
      <div className="flex justify-center items-center py-2 px-4 space-x-10 sm:space-x-16 md:space-x-20 overflow-x-auto">
        <img src={Teams} alt="Teams Logo" className="w-30 h-20" />
        <img src={Google} alt="Google Logo" className="w-30 h-20" />
        <img src={Microsoft} alt="Microsoft Logo" className="w-50 h-40" />
        <img src={Zoom} alt="Zoom Logo" className="w-30 h-20" />
      </div>
    </div>
  );
};

export default LogoSection;
