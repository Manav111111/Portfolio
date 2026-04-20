"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  date: string;
  description: string;
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 2,
    title: "Freelance Developer",
    company: "Self-Employed",
    date: "2024 — Present",
    description: "Served 10+ clients and successfully delivered 15+ projects, providing tailored web applications, mobile apps, and AI-powered software solutions.",
    tags: ["React", "Node.js", "Firebase", "React Native", "Figma", "AWS"],
  },
];

function AnimatedCounter({ from = 0, to, label, suffix = "" }: { from?: number, to: number, label: string, suffix?: string }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 2, ease: "easeOut" });
    }
  }, [count, inView, to]);
  
  return (
    <div ref={ref} className="stat-card glass-card">
      <div className="stat-number">
        <motion.span>{rounded}</motion.span>{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <div className="flex justify-center">
            <h2 className="section-heading">Work Experience</h2>
          </div>
          <p className="section-subheading mt-6">
            My career journey building digital products and intelligent systems.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <AnimatedCounter to={15} label="Projects" suffix="+" />
          <AnimatedCounter to={10} label="Clients" suffix="+" />
          <AnimatedCounter to={2} label="Years Exp" suffix="+" />
          <AnimatedCounter to={5} label="AI Models" suffix="+" />
        </div>

        {/* Timeline */}
        <div className="timeline-container mb-24">
          <div className="timeline-line"></div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1], delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.15 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <span className="timeline-date">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {exp.date}
                </span>
                <h3 className="timeline-title">{exp.title}</h3>
                <p className="text-sm font-semibold mb-3" style={{ color: "var(--accent-dark)" }}>{exp.company}</p>
                <p className="timeline-desc">{exp.description}</p>
                <div className="timeline-tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="timeline-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements & Hackathons */}
        <div className="text-center mb-12">
          <div className="flex justify-center">
            <h3 className="section-heading" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>Achievements &amp; Hackathons</h3>
          </div>
          <p className="section-subheading mt-6">
            Recognized for building high-quality solutions under pressure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Trophy - Hackathon Winner */}
          <motion.div 
            className="achievement-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="achievement-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
            </div>
            <div className="achievement-number">2×</div>
            <div className="achievement-title">Hackathon Winner</div>
            <p className="achievement-desc">
              Won 2 hackathons with innovative solutions, demonstrating strong technical execution and creative problem-solving.
            </p>
          </motion.div>

          {/* Medal - Finalist */}
          <motion.div 
            className="achievement-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="achievement-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
              </svg>
            </div>
            <div className="achievement-number">10+</div>
            <div className="achievement-title">Hackathon Finalist</div>
            <p className="achievement-desc">
              Recognized as a finalist in 10+ hackathons, consistently building impactful prototypes within tight deadlines.
            </p>
          </motion.div>

          {/* Lightning - Under Pressure */}
          <motion.div 
            className="achievement-card md:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="achievement-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <div className="achievement-number">48hr</div>
            <div className="achievement-title">Rapid Prototyping</div>
            <p className="achievement-desc">
              Capable of delivering full-stack MVPs in under 48 hours — from ideation to deployment with polished UI.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
