import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  tech: string[];
  highlights?: string[];
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Virtual Course – Online Learning Platform",
    description: "A modern MERN stack learning platform with secure authentication, integrated payments, and role-based access for students and instructors.",
    image: "/projects/project-1-v2.png",
    link: "https://lms-4-97qt.onrender.com/",
    github: "https://github.com/",
    tech: ["React", "Node.js", "MongoDB", "Razorpay", "OAuth"],
    highlights: ["Authentication & OAuth", "Payment Integration", "Scalable Backend"],
  },
  {
    id: 2,
    title: "Code Veda 2.0 – Hackathon Platform",
    description: "A futuristic hackathon platform blending ancient Vedic wisdom with modern technology, featuring immersive UI and event management.",
    link: "https://codeveda2.vercel.app/",
    image: "/projects/project-2-v2.png",
    github: "https://github.com/",
    tech: ["Next.js", "TypeScript", "Vercel", "Figma"],
    highlights: ["Immersive Design", "Event Management", "Community Driven"],
  },
  {
    id: 3,
    title: "AI Chat Application",
    description: "Real-time AI-powered chat app with intelligent responses, built for speed and reliability.",
    image: "/projects/project-3.png",
    github: "https://github.com/",
    tech: ["Next.js", "OpenAI", "WebSockets"],
    highlights: ["Real-time Chat", "AI Responses", "Modern UI"],
  },
  {
    id: 4,
    title: "E-Commerce Dashboard",
    description: "Full-featured dashboard for product management, sales analytics, and user monitoring at scale.",
    image: "/projects/project-4.jpg",
    github: "https://github.com/",
    tech: ["React", "Node.js", "Chart.js", "MongoDB"],
    highlights: ["Sales Analytics", "Product Management", "Data Visualization"],
  },
  {
    id: 5,
    title: "Real Estate Platform",
    description: "Property booking and listing platform with detailed galleries, pricing, and tour scheduling.",
    image: "/projects/project-5.png",
    github: "https://github.com/",
    tech: ["React", "Firebase", "Maps API"],
    highlights: ["Property Listings", "Tour Scheduling", "Image Galleries"],
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <div className="flex justify-center">
            <h2 className="section-heading text-white">Featured Projects</h2>
          </div>
          <p className="section-subheading mt-6">
            A selection of projects that showcase my expertise in full-stack development and AI integration.
          </p>
        </div>
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <div key={project.id} className="mb-28 last:mb-0">
              <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isEven ? "lg:grid-flow-dense" : ""
                }`}>
                {/* Text Content */}
                <div className={`${isEven ? "lg:col-start-2" : ""}`}>
                  <p className="text-[#8B5CF6] text-xs mb-3 font-bold tracking-[0.2em] uppercase">
                    Featured Project
                  </p>
                  <h3 className="text-2xl lg:text-[1.85rem] font-bold text-white mb-5 leading-tight" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                    {project.title}
                  </h3>
                  
                  {/* Description Card */}
                  <div className="relative z-10 mb-5">
                    <div className={`glass-card p-5 lg:p-6 ${isEven ? "lg:ml-[-15%]" : "lg:w-[calc(100%+15%)]"}`}>
                      <p className="text-[#9CA3AF] text-[1rem] leading-[1.75]">
                        {project.description}
                      </p>
                      
                      {/* Highlights */}
                      {project.highlights && (
                        <div className="mt-4 flex flex-col gap-1.5">
                          {project.highlights.map((h) => (
                            <div key={h} className="flex items-center gap-2.5 text-[0.92rem] text-[#E5E7EB]">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#22C55E] flex-shrink-0">
                                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              {h}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span key={t} className="project-badge">{t}</span>
                    ))}
                  </div>
                  
                  {/* Action Links */}
                  <div className="flex flex-wrap gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn project-link-primary"
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
                        className="project-link-btn project-link-secondary"
                        aria-label="Visit project GitHub"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Source Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Image Content */}
                <div className={`${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="project-image-wrapper p-2 lg:p-3">
                    <div className="relative w-full h-full rounded-lg overflow-hidden bg-[#111827]" style={{ minHeight: "350px" }}>
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
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
