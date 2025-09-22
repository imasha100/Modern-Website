import React from "react";
import { FaChartLine, FaPaintBrush, FaCode, FaHeadset } from "react-icons/fa"; 

const Help = () => {
  return (
    <div className="mb-12 flex flex-col items-center text-center px-4">
      
      <span className="text-4xl font-bold text-gray-900 mb-2">
        How Can We Help?
      </span>

      <span className="text-lg text-gray-600 mb-12 max-w-2xl">
        From strategy to execution, we craft digital solutions that move your business forward.
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
       
        <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-2xl transition flex flex-col items-center cursor-pointer border-b-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 mb-4">
            <FaChartLine className="text-green-600 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Advertising</h3>
          <p className="text-gray-600 text-sm text-center">
            We turn bold ideas into powerful digital solutions that connect engage...
          </p>
        </div>

        
        <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-2xl transition flex flex-col items-center cursor-pointer border-b-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 mb-4">
            <FaPaintBrush className="text-blue-600 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Content marketing</h3>
          <p className="text-gray-600 text-sm text-center">
            We turn bold ideas into powerful digital solutions that connect engage and...
          </p>
        </div>

        
        <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-2xl transition flex flex-col items-center cursor-pointer border-b-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-100 mb-4">
            <FaCode className="text-purple-600 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Content writing</h3>
          <p className="text-gray-600 text-sm text-center">
            We turn bold ideas into powerful digital solutions that connect...
          </p>
        </div>

        
        <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-2xl transition flex flex-col items-center cursor-pointer border-b-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-100 mb-4">
            <FaHeadset className="text-red-600 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Social media</h3>
          <p className="text-gray-600 text-sm text-center">
            We turn bold ideas into powerful digital solutions that connect engage...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
