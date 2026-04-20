"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header(): React.JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`header-nav ${isScrolled ? "scrolled" : ""}`}>
        <nav className="px-6 py-4">
          <div className="container mx-auto max-w-6xl flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-bold transition-colors tracking-tight"
              style={{ color: "var(--foreground)" }}
            >
              <span className="bg-gradient-to-r from-[#F59E0B] to-[#F97316] bg-clip-text text-transparent font-extrabold text-2xl">MG</span>
            </Link>

            {/* Desktop Navigation */}
            <ul className="desktop-nav flex items-center gap-8 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.href} className="m-0 p-0">
                  <Link
                    href={link.href}
                    className="nav-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {/* <li className="m-0 p-0">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Resume
                </a>
              </li> */}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span style={isMobileMenuOpen ? { transform: "rotate(45deg) translateY(7px)" } : {}} />
              <span style={isMobileMenuOpen ? { opacity: 0 } : {}} />
              <span style={isMobileMenuOpen ? { transform: "rotate(-45deg) translateY(-7px)" } : {}} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={handleNavClick}
          >
            {link.label}
          </Link>
        ))}
        {/* <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn mt-4">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Resume
        </a> */}
      </div>
    </>
  );
}
