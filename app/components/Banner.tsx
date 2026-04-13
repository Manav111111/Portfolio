"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Banner(): React.JSX.Element {
  const texts = ["Full Stack Developer", "AI Builder", "Problem Solver"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isEmittingLight, setIsEmittingLight] = useState(false);

  // Typing effect hook
  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    if (!isDeleting) {
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50);
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
        setIsDeleting(false);
        setTypingSpeed(100);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed]);

  // Auto flip & light emission hook
  useEffect(() => {
    const flipInterval = setInterval(() => {
      setIsEmittingLight(true);
      
      setTimeout(() => {
        setIsFlipped((prev) => !prev);
        setIsEmittingLight(false);
      }, 600);
      
    }, 4000);
    
    return () => clearInterval(flipInterval);
  }, []);

  return (
    <section id="home" className="hero-section px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left side - Text content */}
          <div className="flex-1 space-y-6 text-center lg:text-left order-2 lg:order-1">
            
            {/* Role Badge */}
            <div className="animate-fade-in-up" style={{ opacity: 0, animationDelay: "0.1s", animationFillMode: "forwards" }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#A78BFA] text-sm font-medium">
                <span className="status-dot"></span>
                Available for Freelance
              </span>
            </div>

            {/* Name */}
            <div className="animate-fade-in-up" style={{ opacity: 0, animationDelay: "0.2s", animationFillMode: "forwards" }}>
              <h1 className="hero-name">
                MANAV<br />GUPTA
              </h1>
            </div>

            {/* Typing Effect */}
            <div className="animate-fade-in-up" style={{ opacity: 0, animationDelay: "0.3s", animationFillMode: "forwards" }}>
              <p className="text-xl lg:text-2xl text-[#E5E7EB] font-medium">
                I build scalable, high-performance{" "}
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] bg-clip-text text-transparent">
                  {displayedText}
                </span>
                <span className="text-[#8B5CF6] animate-pulse">|</span>
              </p>
            </div>

            {/* Subtitle */}
            <div className="animate-fade-in-up" style={{ opacity: 0, animationDelay: "0.4s", animationFillMode: "forwards" }}>
              <p className="hero-subtitle mx-auto lg:mx-0">
                Crafting intelligent web &amp; mobile applications powered by AI. From concept to deployment, I deliver premium digital experiences.
              </p>
            </div>

            {/* Tech Tags */}
            <div className="animate-fade-in-up flex flex-wrap gap-3 justify-center lg:justify-start" style={{ opacity: 0, animationDelay: "0.5s", animationFillMode: "forwards" }}>
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
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up flex flex-wrap gap-4 justify-center lg:justify-start" style={{ opacity: 0, animationDelay: "0.6s", animationFillMode: "forwards" }}>
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
            </div>
          </div>

          {/* Right side - Hero Image */}
          <div className="flex-shrink-0 order-1 lg:order-2 lg:mt-12 animate-fade-in-right" style={{ opacity: 0, animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <div 
              className="hero-image-container animate-float group"
              style={{ perspective: "1000px" }}
            >
              <div 
                className={`relative transition-transform duration-1000 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front (Cyberpunk) */}
                <div 
                  className={`hero-image-wrapper animate-border-glow relative transition-all duration-500 ${isEmittingLight && !isFlipped ? 'brightness-[1.3] shadow-[0_0_100px_rgba(139,92,246,0.9)] scale-[1.02]' : 'scale-100'}`}
                  style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                >
                  <Image
                    src="/assets/hero-character.jpg"
                    alt="Manav Gupta - Full Stack AI Developer"
                    fill
                    sizes="(max-width: 768px) 280px, 380px"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Back (Real Image) */}
                <div 
                  className={`hero-image-wrapper animate-border-glow absolute inset-0 transition-all duration-500 ${isEmittingLight && isFlipped ? 'brightness-[1.3] shadow-[0_0_100px_rgba(139,92,246,0.9)] scale-[1.02]' : 'scale-100'}`}
                  style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <Image
                    src="/assets/me-real.jpg"
                    alt="Manav Gupta - Real Photo"
                    fill
                    sizes="(max-width: 768px) 280px, 380px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
