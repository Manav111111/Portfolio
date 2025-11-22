// sections/Skills.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiReact, 
  SiJavascript, 
  SiNodedotjs, 
  SiPython, 
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiFigma,
  SiTypescript,
  SiNextdotjs,
  SiAmazonaws,
  SiDocker,
  SiGraphql
} from 'react-icons/si';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: 'React', icon: SiReact, color: '#61DAFB', description: 'Building interactive UIs' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', description: 'Type-safe development' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', description: 'Modern ES6+ features' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', description: 'Server-side runtime' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000', description: 'React framework' },
    { name: 'Python', icon: SiPython, color: '#3776AB', description: 'Backend & scripting' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', description: 'NoSQL database' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', description: 'Utility-first CSS' },
    { name: 'Git', icon: SiGit, color: '#F05032', description: 'Version control' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E', description: 'UI/UX design' },
    { name: 'AWS', icon: SiAmazonaws, color: '#FF9900', description: 'Cloud services' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED', description: 'Containerization' },
    { name: 'GraphQL', icon: SiGraphql, color: '#E10098', description: 'API query language' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.15,
      y: -10,
      zIndex: 10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Stack
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies I use to bring ideas to life with precision and creativity
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 max-w-6xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="relative"
            >
              <motion.div
                className="group cursor-pointer"
              >
                <div 
                  className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-300 hover:shadow-2xl"
                  style={{
                    boxShadow: hoveredSkill === skill.name 
                      ? `0 20px 40px -10px ${skill.color}40` 
                      : '0 8px 25px -5px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <skill.icon 
                    size={32} 
                    style={{ color: skill.color }}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                <motion.p 
                  className="text-center mt-4 text-sm font-medium text-gray-700"
                  initial={false}
                  animate={{
                    color: hoveredSkill === skill.name ? skill.color : '#374151'
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {skill.name}
                </motion.p>
              </motion.div>

              {/* Description Tooltip */}
              <AnimatePresence>
                {hoveredSkill === skill.name && (
                  <motion.div
                    variants={descriptionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-32"
                  >
                    <div className="bg-gray-900 text-white text-xs rounded-lg py-2 px-3 text-center">
                      {skill.description}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Sequential Animation Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 text-sm italic">
            Hover over technologies to explore
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;