import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { title, description, icon: Icon, features } = service;
  
  return (
    <div className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* SVG Background Pattern */}
      <div 
        className="absolute inset-0 opacity-80" 
        style={{
          backgroundImage: 'url(/blob1.svg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          objectFit: 'cover'
        }}
      />
      
      {/* Card Content */}
      <div className="relative z-10"> {/* Make content appear above background */}
        <div className="flex items-center mb-4">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="ml-3 text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={feature.id} className="flex items-center text-gray-600">
              <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;