import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { title, description, icon: Icon, features } = service;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        ease: "easeOut" 
      }}
      viewport={{ once: true }}
      className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* SVG Background Pattern */}
      <div
        className="absolute inset-0 opacity-80 service-card-background"
        style={{
          backgroundImage: 'url(/blob1.svg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          objectFit: 'cover'
        }}
      />
      
      {/* Card Content */}
      <div className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ 
            delay: 0.2, 
            duration: 0.5 
          }}
          className="flex items-center mb-4"
        >
          <div className="p-2 bg-blue-50 rounded-lg">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="ml-3 text-xl font-semibold text-gray-900">{title}</h3>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ 
            delay: 0.3, 
            duration: 0.5 
          }}
          className="text-gray-600 mb-4"
        >
          {description}
        </motion.p>
        
        <motion.ul 
          initial="hidden"
          whileInView="visible"
          className="space-y-2"
        >
          {features.map((feature, index) => (
            <motion.li 
              key={feature.id}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    delay: 0.4 + index * 0.1,
                    duration: 0.5 
                  }
                }
              }}
              className="flex items-center text-gray-600"
            >
              <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
              <span>{feature.text}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};
export default ServiceCard;