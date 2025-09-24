import React from 'react';
import { FaUser, FaEnvelope } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <div className="py-16 bg-white font-sans px-4 md:px-8 lg:px-16">
      <div className="max-w-xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          Reach out to us
        </h2>
        <p className="text-lg text-gray-600">
          Ready to grow your brand? Let's connect and build something exceptional together.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-gray-50 p-8 md:p-12 lg:p-16 rounded-3xl shadow-xl">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
           
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Your name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors duration-300"
                />
                <FaUser className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

           
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email id
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors duration-300"
                />
                <FaEnvelope className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>

          
          <div className="mb-8">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Enter your message"
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors duration-300 resize-none"
            ></textarea>
          </div>

          
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-indigo-500 cursor-pointer text-xl text-white font-semibold py-3 px-8 rounded-full hover:bg-purple-500 transition-colors duration-300 shadow-md flex items-center space-x-2"
            >
              <span>Submit</span>
              <span className="text-2xl">&rarr;</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;