// sections/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">Your Photo</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Creative Developer & Problem Solver</h3>
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate full-stack developer with 5+ years of experience creating digital 
              solutions that make a difference. I specialize in React, Node.js, and modern web 
              technologies.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Name:</h4>
                <p className="text-gray-600">John Doe</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Email:</h4>
                <p className="text-gray-600">john@example.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Location:</h4>
                <p className="text-gray-600">New York, USA</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Availability:</h4>
                <p className="text-gray-600">Open to work</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Download CV
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;