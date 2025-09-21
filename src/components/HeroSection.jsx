// HeroSection.jsx
import React from "react";
import heroImage from "../assets/hero.jpg"; 
import person1 from "../assets/p1.jpg";
import person2 from "../assets/p2.jpg";
import person3 from "../assets/p3.jpg";


const HeroSection = () => {
  return (
    <section className="w-full bg-white flex flex-col items-center py-16 px-6">
      {/* People summary */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex -space-x-3">
          {[person1, person2, person3].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Person ${index + 1}`}
              className="h-10 w-10 rounded-full border-2 border-white shadow-sm"
            />
          ))}
        </div>
        <span className="text-gray-800 text-sm">Trusted by 10k+ people</span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4">
        Turning imagination into{" "}
        <span className="text-blue-600">digital</span> impact.
      </h1>

      {/* Subtext */}
      <p className="text-center text-xl text-gray-800 max-w-2xl mb-10">
        Creating meaningful connections and turning big ideas into interactive
        digital experiences.
      </p>

      {/* Hero Image */}
      <div className="w-full max-w-5xl">
        <img
          src={heroImage}
          alt="Two people looking at laptop"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
