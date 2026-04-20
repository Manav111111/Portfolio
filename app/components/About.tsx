"use client";

import { motion } from "framer-motion";
import TechSkills from "./TechSkills";

export default function About(): React.JSX.Element {
  return (
    <section id="about" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Title Group */}
        <motion.div 
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          <motion.h2 
            className="section-heading"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            About Me
          </motion.h2>
        </motion.div>

        {/* Paragraphs */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.p 
            className="about-text"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            I&apos;m a passionate <span className="about-highlight">Full Stack Developer</span> who loves
            building intelligent, scalable applications. From crafting beautiful web interfaces to
            developing mobile apps and integrating <span className="about-highlight">AI models</span>,
            I bring ideas to life with clean code and modern design.
          </motion.p>
          <motion.p 
            className="about-text mt-6"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            Currently freelancing and building <span className="about-highlight">AI-powered applications</span> that
            solve real-world problems. Always exploring the intersection of technology and creativity.
          </motion.p>
        </motion.div>
        
        {/* Skills Section Title */}
        <motion.div 
          className="mt-24 text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          <motion.h2 
            className="section-heading"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            Skills &amp; Technologies
          </motion.h2>
        </motion.div>

        <p className="section-subheading mb-10 text-center">
          Technologies I work with across web, mobile, and AI development.
        </p>
        <div className="flex justify-center w-full relative z-10">
          <TechSkills />
        </div>
      </div>
    </section>
  );
}
