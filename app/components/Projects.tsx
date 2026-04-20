"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const techIconMap: Record<string, string> = {
  "React": "devicon:react",
  "React.js": "devicon:react",
  "React Native": "devicon:react",
  "Node.js": "devicon:nodejs",
  "MongoDB": "devicon:mongodb",
  "Firebase": "devicon:firebase",
  "Firebase Auth": "devicon:firebase",
  "Razorpay": "logos:razorpay", 
  "Three.js": "devicon:threejs",
  "Vite": "devicon:vite",
  "Figma": "devicon:figma",
};

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  download?: string;
  tech: string[];
  highlights?: string[];
}


const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Course Marketplace Platform",
    description: "MERN-based platform for buying and selling courses with secure authentication and payment integration.",
    image: "/projects/project-1-v2.png",
    link: "https://lms-4-97qt.onrender.com/",
    github: "https://github.com/Manav111111/VirtualCourses",
    tech: ["React", "Node.js", "MongoDB", "Razorpay", "Firebase Auth"],
    highlights: [
      "Google Authentication (Firebase)",
      "Razorpay Payment Integration",
      "Role-Based Access Control",
    ],
  },
  {
    id: 2,
    title: "Code Veda 2.0 – Hackathon Website",
    description: "Official hackathon website with event details, schedules, and immersive UI for community engagement.",
    link: "https://codeveda2.vercel.app/",
    image: "/projects/project-2-v2.png",
    github: "https://github.com/AyushChoudhary6/Code-Veda-2.0",
    tech: ["React.js", "Three.js", "Vite", "Figma"],
    highlights: [
      "3D Interactive UI (Three.js)",
      "Hackathon Event Management",
      "Responsive Design",
    ],
  },
  {
    id: 3,
    title: "Grocery E-Commerce Admin Panel",
    description: "Admin dashboard for managing products, orders, and analytics of a grocery e-commerce application.",
    image: "/projects/project-3.png",
    link: "https://velocity-pro.web.app/",
    github: "https://github.com/Manav111111/velocity-adminpanel",
    tech: ["React", "Node.js", "MongoDB", "Firebase"],
    highlights: [
      "Product & Inventory Management",
      "Order Tracking System",
      "Backend Integration",
    ],
  },
  {
    id: 5,
    title: "VELOCITY -Grocery Mobile App",
    description: "Cross-platform mobile app for grocery shopping with real-time data and smooth user experience.",
    image: "/projects/project-4.jpg",
    github: "https://github.com/Manav111111/velocity",
    download: "https://drive.google.com/file/d/1tWlZucr3lS2LeKcAAD0t9hqn1xro5f-a/view?usp=drivesdk",
    tech: ["React Native", "Firebase", "Node.js"],
    highlights: [
      "Mobile-first UI",
      "Real-time Data Sync",
      "Cart & Order Management",
    ],
  },
  {
    id: 4,
    title: "Premium Shoe E-Commerce Website",
    description: "Modern e-commerce platform with premium UI for showcasing and selling footwear.",
    image: "/projects/project-5.png",
    link: "https://github.com/Manav111111/bloom-app",
    github: "https://github.com/Manav111111/bloom-app",
    tech: ["React", "Firebase", "Node.js"],
    highlights: [
      "Premium UI/UX",
      "Product Showcase",
      "Firebase Hosting",
    ],
  },
];
export default function Projects(): React.JSX.Element {
  return (
    <section id="projects" className="py-32 px-6" style={{ background: "linear-gradient(180deg, #FFFBF0 0%, #FAFAFA 50%, #FFFBF0 100%)" }}>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <div className="flex justify-center">
            <h2 className="section-heading">Featured Projects</h2>
          </div>
          <p className="section-subheading mt-6">
            A selection of projects that showcase my expertise in full-stack development and AI integration.
          </p>
        </div>
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <motion.div 
              key={project.id} 
              className="sticky mb-[15vh] last:mb-0"
              style={{ top: `calc(12vh + ${index * 30}px)`, zIndex: index }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-[#FAFAFA] rounded-[2.5rem] shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-200/60 relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 lg:p-10">
                {/* Image Content - Always first on mobile */}
                <div className={`order-1 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="project-image-wrapper p-2 lg:p-3">
                    <div className="relative w-full h-full rounded-lg overflow-hidden bg-[#F9FAFB]" style={{ minHeight: "350px" }}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Text Content - Always second on mobile */}
                <div className={`order-2 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <p className="text-xs mb-3 font-bold tracking-[0.2em] uppercase" style={{ color: "var(--accent-dark)" }}>
                    Featured Project
                  </p>
                  <h3 className="text-2xl lg:text-[1.85rem] font-bold mb-5 leading-tight" style={{ fontFamily: "var(--font-space-grotesk), sans-serif", color: "var(--foreground)" }}>
                    {project.title}
                  </h3>

                  {/* Description Card */}
                  <div className="relative z-10 mb-5">
                    <div className={`glass-card p-5 lg:p-6 ${isEven ? "lg:mr-[-15%]" : "lg:w-[calc(100%+15%)]"}`}>
                      <p className="text-[1rem] leading-[1.75]" style={{ color: "var(--text-muted)" }}>
                        {project.description}
                      </p>

                      {/* Highlights */}
                      {project.highlights && (
                        <div className="mt-4 flex flex-col gap-1.5">
                          {project.highlights.map((h) => (
                            <div key={h} className="flex items-center gap-2.5 text-[0.92rem]" style={{ color: "var(--foreground)" }}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#22C55E] flex-shrink-0">
                                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              {h}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2.5 mb-5">
                    {project.tech.map((t) => {
                      const iconName = techIconMap[t];
                      return (
                        <span key={t} className="project-badge flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all hover:bg-[var(--accent-glow)]" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
                          {iconName && <Icon icon={iconName} width={16} height={16} />}
                          {t}
                        </span>
                      );
                    })}
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-wrap gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn project-link-primary transition-transform hover:scale-105"
                        aria-label="Visit project live demo"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                        Live Demo
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn project-link-secondary transition-transform hover:scale-105"
                        aria-label="Visit project GitHub"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Source Code
                      </a>
                    )}

                    {project.download && (
                      <a
                        href={project.download}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn project-link-primary transition-transform hover:scale-105"
                        aria-label="Download App"
                        style={{ background: "#22C55E", color: "white", borderColor: "#22C55E" }}
                      >
                        <Icon icon="lucide:download" width={16} height={16} />
                        Download App
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
