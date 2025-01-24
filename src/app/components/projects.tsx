'use client';
import React, { FC } from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  tech: string[];
  bg: string;
}

const Projects: FC = () => {
  const projects: Project[] = [
    {
      title: 'Logistics Management',
      description: 'Managed logistics operations with custom ERPNext modules',
      tech: ['ERPNext', 'Custom Modules', 'API Integration'],
      bg:'/logistics.svg' 
    },
    {
      title: 'HR & Payroll System with Biometrics',
      description: 'Integrated HR and payroll system with biometric attendance',
      tech: ['ERPNext', 'HR', 'Payroll', 'Biometrics'],
      bg:'/fingerprint.svg'
    },
    {
      title: 'Retail Management System',
      description: 'Developed a custom retail management system for a chain of stores',
      tech: ['ERPNext', 'Sales', 'Custom Reports'],
      bg:'/retail.svg' 
    },
    {
      title: 'KSA ZATCA Integration - Phase 1 & 2',
      description: 'Integrated ERPNext with KSA ZATCA for VAT compliance',
      tech: ['ERPNext', 'Tax', 'Custom Reports'],
      bg:'/integration.svg' 
    },
    {
      title: 'Customized Themes - ERPNext',
      description: 'Developed custom themes for ERPNext for a better user experience',
      tech: ['ERPNext', 'Theme', 'Customization'],
      bg:'/themes.svg' 
    },
    {
      title: 'Property Management System',
      description: 'Developed a custom property management system for a real estate company',
      tech: ['ERPNext', 'Dashboard', 'Customization'],
      bg:'/property.svg' 
    }
  ];

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  // Individual project card animation
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.section 
      id="projects" 
      className="py-16 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-black"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-white p-6 rounded-lg shadow-md flex flex-col h-full overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Background Image with Responsive Styling */}
              <div 
                className="absolute inset-0 bg-no-repeat 
                           md:bg-right-bottom 
                           md:bg-[length:47%]
                           sm:bg-[length:25%]
                           max-sm:bg-[length:27%]
                           max-md:bg-contain max-md:bg-bottom-right
                           opacity-50 group-hover:opacity-100 
                           transition-opacity duration-300 ease-in-out 
                           mix-blend-multiply" 
                style={{
                  backgroundImage: `url(${project.bg})`,
                  backgroundPositionX: 'calc(100% - 10px)', // Adjust horizontal position for larger screens
                  backgroundPositionY: 'calc(100% - 10px)'  // Adjust vertical position for larger screens
                }} 
              />
                
                {/* Content with Full Opacity */}
                <div className="relative z-10 h-full flex flex-col">
                  <motion.h3 
                    className="text-xl font-semibold mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 mb-4 flex-grow"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {project.description}
                  </motion.p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: 0.4 + (i * 0.1), 
                          duration: 0.5 
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
export default Projects;