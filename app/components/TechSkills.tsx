"use client";

import { Icon } from "@iconify/react";
import { motion, Variants } from "framer-motion";

const skills = [
  {
    title: "Web Development",
    color: "var(--accent-dark)",
    gradient: "from-[var(--accent)] to-[var(--secondary)]",
    items: [
      { label: "Next.js", icon: "devicon:nextjs" },
      { label: "React", icon: "devicon:react" },
      { label: "Node.js", icon: "devicon:nodejs" },
      { label: "Express", icon: "devicon:express" },
      { label: "TypeScript", icon: "devicon:typescript" },
      { label: "PostgreSQL", icon: "devicon:postgresql" },
      { label: "MongoDB", icon: "devicon:mongodb" },
      { label: "AWS", icon: "devicon:amazonwebservices-wordmark" },
      { label: "Vercel", icon: "devicon:vercel" },
      { label: "Docker", icon: "devicon:docker" },
      { label: "Git", icon: "devicon:git" },
      { label: "GitHub", icon: "devicon:github" },
    ],
  },
  {
    title: "Mobile App Dev",
    color: "#F59E0B", // Tailwind Amber/Orange
    gradient: "from-[#F59E0B] to-[#F97316]",
    items: [
      { label: "React Native", icon: "devicon:react" },
      { label: "Expo", icon: "simple-icons:expo" },
      { label: "Firebase", icon: "devicon:firebase" },
      { label: "Supabase", icon: "devicon:supabase" },
      { label: "REST APIs", icon: "carbon:api" },
      { label: "Android Studio", icon: "devicon:androidstudio" },
      { label: "Play Store", icon: "logos:google-play" },
      { label: "App Store", icon: "devicon:apple" },
    ],
  },
  {
    title: "AI / Machine Learning",
    color: "#10B981", // Tailwind Emerald/Green
    gradient: "from-[#10B981] to-[#059669]",
    items: [
      { label: "Python", icon: "devicon:python" },
      { label: "TensorFlow", icon: "devicon:tensorflow" },
      { label: "PyTorch", icon: "devicon:pytorch" },
      { label: "Scikit-learn", icon: "devicon:scikitlearn" },
      { label: "Computer Vision", icon: "carbon:machine-learning-vision" },
      { label: "NLP", icon: "carbon:string-text" },
      { label: "LangChain", icon: "simple-icons:langchain" },
      { label: "RAG Systems", icon: "carbon:machine-learning" },
      { label: "Jupyter", icon: "devicon:jupyter" },
      { label: "Hugging Face", icon: "noto:hugging-face" },
      { label: "OpenAI", icon: "simple-icons:openai" },
      { label: "Google Colab", icon: "devicon:googlecolab" },
    ],
  },
];

export default function TechSkills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } },
  };

  return (
    <div className="w-full">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        {skills.map((section) => (
          <motion.div variants={cardVariants} key={section.title} className="glass-card p-8 lg:p-10 flex flex-col h-full rounded-[2rem] relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white">
            <div className={`absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r ${section.gradient} opacity-90`} />
            <h3 className="text-sm font-bold tracking-widest uppercase mb-7 relative z-10" style={{ color: section.color }}>
              {section.title}
            </h3>
            <div className="flex flex-wrap gap-3 relative z-10">
              {section.items.map((item) => (
                <span 
                  key={item.label} 
                  className="inline-flex items-center gap-2 px-4 py-2 text-[0.85rem] font-medium rounded-full bg-gray-50 text-gray-600 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 border border-gray-100 hover:bg-white"
                >
                  {item.icon && (
                    <Icon icon={item.icon} className="w-[1.1rem] h-[1.1rem] flex-shrink-0 opacity-80" />
                  )}
                  {item.label}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
