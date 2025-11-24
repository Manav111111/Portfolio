
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';

const Home = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const socialIcons = [
    { icon: Github, href: "#", brandColor: "#333" },
    { icon: Linkedin, href: "#", brandColor: "#0077B5" },
    { icon: Twitter, href: "#", brandColor: "#1DA1F2" },
    { icon: Mail, href: "#", brandColor: "#EA4335" }
  ];

  return (
    <section
      id="home"
      className="
        min-h-screen relative overflow-hidden pt-20
        bg-[url('/assets/white-bg.png')]
        bg-cover bg-center bg-no-repeat
      "
    >
      {/* Removed all colored blob backgrounds */}

      <div className="relative z-10 container mx-auto px-6 h-screen flex items-center justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-6xl"
        >
          {/* Animated Profile Image */}
          <motion.div variants={itemVariants} className="mb-12 relative">
            <motion.div
              className="relative mx-auto w-32 h-32"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: rotation }}
                transition={{ duration: 0 }}
                style={{
                  background: `conic-gradient(from 0deg, #3B82F6, #8B5CF6, #EC4899, #3B82F6)`,
                  padding: '3px'
                }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center relative overflow-hidden">

                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{ rotate: -rotation * 2 }}
                    transition={{ duration: 0 }}
                    style={{
                      background: `conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.3), transparent)`
                    }}
                  />

                  {/* Pulsing dots */}
                  <motion.div className="absolute top-2 left-1/2 w-1 h-1 bg-blue-500 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div className="absolute bottom-2 left-1/2 w-1 h-1 bg-purple-500 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                  <motion.div className="absolute left-2 top-1/2 w-1 h-1 bg-cyan-500 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: .5 }}
                  />
                  <motion.div className="absolute right-2 top-1/2 w-1 h-1 bg-pink-500 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                  />

                  <div className="relative z-10">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold text-2xl">JD</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -inset-2 rounded-full opacity-0 blur-xl"
                whileHover={{ opacity: 0.3, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                style={{ background: 'linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899)' }}
              />
            </motion.div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gray-900"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              JOHN DOE
            </span>
          </motion.h1>

          <motion.div variants={itemVariants} className="relative inline-block mb-8">
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-2 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Full Stack Developer & UI/UX Designer
            </motion.p>
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          >
            Crafting digital experiences that blend innovative design
            with cutting-edge technology. I build scalable solutions
            that drive business growth and user engagement.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-semibold shadow-xl"
            >
              <span className="relative z-10 flex items-center">
                Explore My Work <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-2xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-all bg-white/80 backdrop-blur-sm"
            >
              Download CV
            </motion.button>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-6 mb-16">
            {socialIcons.map(({ icon: Icon, href, brandColor }, index) => (
              <motion.a
                key={index}
                href={href}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center transition-all shadow-sm border border-gray-200"
                style={{ color: brandColor }}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Home;
