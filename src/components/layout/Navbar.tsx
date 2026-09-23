"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, Sparkles, Menu, X, ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";

interface NavbarProps {
  onOpenAI: () => void;
  onOpenTerminal: () => void;
}

export function Navbar({ onOpenAI, onOpenTerminal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["hero", "about", "projects", "skills", "experience", "education", "now", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "About", href: "#about", id: "about" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Education", href: "#education", id: "education" },
    { label: "Now", href: "#now", id: "now" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "py-2.5 bg-space-950/85 backdrop-blur-md border-b border-space-600/30 shadow-lg shadow-black/20"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="#hero"
            className="group flex items-center gap-2.5 focus:outline-none focus:ring-1 focus:ring-cyber-cyan/50 rounded-sm"
          >
            <div className="w-8 h-8 rounded-sm bg-space-800 border border-cyber-cyan/30 flex items-center justify-center group-hover:border-cyber-cyan transition-colors shadow-sm shadow-cyber-cyan/10">
              <span className="font-mono-tech text-xs font-semibold text-cyber-cyan">MB</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-text-primary group-hover:text-cyber-cyan transition-colors">
                {profileData.name}
              </span>
              <span className="font-mono-tech text-[10px] tracking-wider text-text-muted uppercase">
                AI • Software • Security
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-space-850/60 p-1 rounded-full border border-space-600/20 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeSection === link.id
                    ? "bg-neon-blue/20 text-cyber-cyan border border-cyber-cyan/30 shadow-[0_0_10px_rgba(0,229,255,0.15)]"
                    : "text-text-muted hover:text-text-primary hover:bg-space-750/40"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs: AI, Terminal, Let's Talk */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Terminal Easter Egg Trigger */}
            <button
              onClick={onOpenTerminal}
              title="Open Developer Terminal (Ctrl+`)"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-space-850 hover:bg-space-750 border border-space-600/40 text-text-muted hover:text-cyber-cyan text-xs font-mono-tech transition-colors"
            >
              <Terminal className="w-3.5 h-3.5 text-cyber-cyan" />
              <span>&gt;_</span>
            </button>

            {/* "Ask My Portfolio" AI Assistant Trigger */}
            <button
              onClick={onOpenAI}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neon-blue/10 hover:bg-neon-blue/20 border border-neon-blue/40 text-text-primary text-xs font-medium transition-all shadow-[0_0_12px_rgba(31,106,225,0.15)] hover:shadow-[0_0_18px_rgba(31,106,225,0.3)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyber-cyan animate-pulse" />
              <span>Ask AI</span>
              <kbd className="hidden md:inline-block ml-1 px-1.5 py-0.5 text-[10px] font-mono-tech bg-space-900 border border-space-600/50 rounded text-text-muted">
                ⌘K
              </kbd>
            </button>

            {/* Primary "Let's Talk" CTA */}
            <a
              href="#contact"
              className="flex items-center gap-1 px-3.5 py-1.5 rounded-md bg-neon-blue hover:bg-neon-blue/90 text-white text-xs font-medium tracking-wide transition-all shadow-[0_0_15px_rgba(31,106,225,0.3)] hover:shadow-[0_0_22px_rgba(31,106,225,0.5)]"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenAI}
              aria-label="Ask AI Assistant"
              className="p-2 rounded-md bg-space-800 border border-neon-blue/40 text-cyber-cyan"
            >
              <Sparkles className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-md bg-space-850 border border-space-600/40 text-text-muted hover:text-text-primary"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-space-900/95 border-b border-space-600/40 px-4 pt-3 pb-6 mt-2 backdrop-blur-xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "bg-neon-blue/20 text-cyber-cyan border border-cyber-cyan/30"
                    : "text-text-muted hover:text-text-primary hover:bg-space-800"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-space-700/50 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-md bg-space-800 border border-space-600/40 text-text-muted hover:text-cyber-cyan font-mono-tech text-xs"
            >
              <Terminal className="w-4 h-4 text-cyber-cyan" />
              <span>Open Developer Terminal</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-md bg-neon-blue text-white font-medium text-xs shadow-md"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
