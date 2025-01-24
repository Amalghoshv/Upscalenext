'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      ref={ref}
      id="about" 
      className="py-16 bg-white"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-black"
          variants={itemVariants}
        >
          About Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="space-y-4"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-gray-900">Our Story</h3>
            <div className="flex justify-between items-center gap-2">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ 
                  scale: 1, 
                  opacity: 1,
                  transition: { 
                    duration: 0.5,
                    delay: 0.2
                  }
                }}
              >
                <img src="./images/growth.png" alt="grow-img" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    duration: 0.5,
                    delay: 0.3
                  }
                }}
              >
                <p className="text-gray-600">
                  Founded by young tech enthusiasts, we bring fresh perspectives to
                  ERPNext solutions. Our innovative approach combines technical expertise
                  with modern business understanding.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-4"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
            <div className="flex justify-between items-center">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ 
                  scale: 1, 
                  opacity: 1,
                  transition: { 
                    duration: 0.5,
                    delay: 0.2
                  }
                }}
              >
                <img src="./images/goal.png" alt="goal-img" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    duration: 0.5,
                    delay: 0.3
                  }
                }}
              >
                <p className="text-gray-600">
                  We are dedicated to transforming businesses through cutting-edge
                  ERPNext solutions, making enterprise resource planning accessible
                  and efficient for companies of all sizes.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;