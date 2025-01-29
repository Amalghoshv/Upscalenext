'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { UsersRound } from 'lucide-react';
import {Radar} from 'lucide-react';
import { FastForward } from 'lucide-react';
import { Split } from 'lucide-react';

const WhyUs = () => {
  const whyUsItems = [
    { 
      title: 'Expert Team', 
      description: 'Young, dynamic professionals with deep ERPNext expertise',
      icon: UsersRound 
    }, 
    { 
      title: 'Innovation First', 
      description: 'Cutting-edge solutions using the latest technologies' ,
      icon: Radar
    }, 
    { 
      title: 'Quick Support', 
      description: '24/7 support and maintenance for your systems',
      icon: FastForward 
    }, 
    { 
      title: 'Custom Solutions', 
      description: 'Tailored implementations for your specific needs' ,
      icon: Split
    }
  ];

  return (
    <section className="py-16 bg-white" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Delivering exceptional ERPNext solutions with unmatched expertise
          </p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {whyUsItems.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    duration: 0.5,
                    ease: "easeOut"
                  }
                }
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-4">
                <item.icon className="w-8 h-8 text-blue-800 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;