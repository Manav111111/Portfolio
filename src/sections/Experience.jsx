import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Lead frontend development for multiple client projects using React, TypeScript, and modern web technologies.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "GraphQL"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description: "Developed and maintained web applications for various clients using MERN stack.",
      technologies: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Junior Web Developer",
      company: "Startup XYZ",
      period: "2019 - 2020",
      description: "Built responsive websites and collaborated with design team to implement UI/UX designs.",
      technologies: ["JavaScript", "HTML/CSS", "PHP", "WordPress"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-2 w-0.5 h-full bg-blue-200"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-4 h-4 bg-blue-600 rounded-full -translate-x-1.5"></div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                    <p className="text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                  <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
