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
            I&apos;m a <span className="about-highlight">full-stack developer</span> focused on building
            useful products end to end: responsive interfaces, scalable APIs, mobile apps, dashboards,
            and <span className="about-highlight">AI-powered workflows</span> that feel simple for real users.
          </motion.p>
          <motion.p 
            className="about-text mt-6"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            My work sits at the intersection of product thinking and execution. I care about clear
            UI, dependable engineering, fast iteration, and shipping software that looks professional
            the moment someone opens it.
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
          A practical stack for shipping complete web, mobile, backend, and AI products.
        </p>
        <div className="flex justify-center w-full relative z-10">
          <TechSkills />
        </div>
      </div>
    </section>
  );
}
