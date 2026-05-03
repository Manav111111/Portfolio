"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";

const heroTexts = ["Full-Stack Products", "AI-Powered Apps", "Mobile Experiences"];

export default function Banner(): React.JSX.Element {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect hook
  useEffect(() => {
    const currentText = heroTexts[currentTextIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting) {
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex]);


  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <section id="home" className="hero-section px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left side - Text content */}
          <motion.div
            className="flex-1 space-y-6 text-center lg:text-left order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >

            {/* Role Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium" style={{ background: "rgba(245, 158, 11, 0.08)", borderColor: "rgba(245, 158, 11, 0.2)", color: "var(--accent-dark)" }}>
                <span className="status-dot"></span>
                Freelance Full-Stack Developer
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <h1 className="hero-title font-bold leading-[1.12] bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Full-stack developer building web, mobile, and AI products.
              </h1>
            </motion.div>

            {/* Typing Effect */}
            <motion.div variants={itemVariants}>
              <p className="text-xl lg:text-2xl font-medium text-gray-800">
                I turn ideas into{" "}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, var(--accent-dark), var(--secondary))" }}>
                  {displayedText}
                </span>
                <span className="animate-pulse" style={{ color: "var(--accent-dark)" }}>|</span>
              </p>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={itemVariants}>
              <p className="text-lg text-gray-600 mx-auto lg:mx-0 max-w-[520px]">
                I help founders, students, and teams ship production-ready applications with clean interfaces, reliable backends, and practical AI features.
              </p>
            </motion.div>

            {/* Tech Tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="hero-tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                </svg>
                Web Dev
              </span>
              <span className="hero-tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
                App Dev
              </span>
              <span className="hero-tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" /><path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.58 3.25 3.93" /><path d="M12 18v4" /><path d="M8 22h8" /><circle cx="12" cy="14" r="4" />
                </svg>
                AI / ML
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#projects" className="hero-btn hero-btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                </svg>
                View Projects
              </a>
              <a href="#contact" className="hero-btn hero-btn-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-portrait-shell flex-shrink-0 order-1 lg:order-2"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="hero-image-container animate-float animate-border-glow overflow-hidden relative mx-auto lg:mx-0">
              <Image
                src="/assets/me-real.jpg"
                alt="Manav Gupta - Full Stack AI Developer"
                fill
                sizes="(max-width: 640px) 78vw, (max-width: 1024px) 340px, 380px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
