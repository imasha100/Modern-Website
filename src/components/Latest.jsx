import React from 'react';


import mobileAppMarketingImage from '../assets/latest1.jpg';
import dashboardManagementImage from '../assets/latest2.jpg';
import fitnessAppPromotionImage from '../assets/latest3.jpg';

const projects = [
  {
    image: mobileAppMarketingImage,
    title: 'Mobile app marketing',
    description: 'We turn hard ideas into powerful digital solutions that connect.',
  },
  {
    image: dashboardManagementImage,
    title: 'Dashboard management',
    description: 'We turn hard ideas into powerful digital solutions that connect.',
  },
  {
    image: fitnessAppPromotionImage,
    title: 'Fitness app promotion',
    description: 'We turn hard ideas into powerful digital solutions that connect.',
  },
];

const ProjectCard = ({ project }) => (
  <div className="flex-shrink-0 w-full md:w-1/3 p-4">
    <div className="bg-white rounded-lg shadow-lg  cursor-pointer overflow-hidden border border-gray-200 transform hover:scale-105 transition-transform duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-52 object-cover"
      />
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  </div>
);

const OurLatestWorkSection = () => {
  return (
    <div className="py-16 bg-gray-50 font-sans px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our latest work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our portfolio of innovative digital projects that showcase
            creativity, performance, and results.
          </p>
        </div>

        
        <div className="flex flex-wrap justify-center -m-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurLatestWorkSection;
