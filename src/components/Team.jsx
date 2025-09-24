import React from 'react';


import haleyCarter from '../assets/p1.jpg';
import jamesWeber from '../assets/p2.jpg';
import jessicaMorgan from '../assets/p3.jpg';
import ashleyBennett from '../assets/p4.jpg';
import emilyParker from '../assets/p5.jpeg';
import ryanMitchell from '../assets/p6.jpg';
import meganBrooks from '../assets/p7.jpeg';
import amberFoster from '../assets/p8.jpeg';

const teamMembers = [
  { name: 'Haley Carter', role: 'CEO & Founder', image: haleyCarter },
  { name: 'James Weber', role: 'Ads Manager', image: jamesWeber },
  { name: 'Jessica Morgan', role: 'Vice President', image: jessicaMorgan },
  { name: 'Ashley Bennett', role: 'Marketing & Sales', image: ashleyBennett },
  { name: 'Emily Parker', role: 'Content Marketer', image: emilyParker },
  { name: 'Ryan Mitchell', role: 'Content Writer', image: ryanMitchell },
  { name: 'Megan Brooks', role: 'Performance Manager', image: meganBrooks },
  { name: 'Amber Foster', role: 'Senior Artist', image: amberFoster },
];

const TeamMemberCard = ({ member }) => (
  <div className="flex flex-col items-center p-4">
    <img
      src={member.image}
      alt={member.name}
      className="w-24 h-24 rounded-full object-cover mb-2 border-2 border-white shadow-md"
    />
    <h3 className="text-xl font-semibold text-purple-950">{member.name}</h3>
    <p className="text-lg text-gray-500">{member.role}</p>
  </div>
);

const TeamSection = () => {
  return (
    <div className="py-16 bg-white font-sans px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Meet the Team
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            A passionate team of digital experts dedicated to your brand's success.
          </p>
        </div>

        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 justify-items-center">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
