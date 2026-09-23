"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-neon-blue via-cyber-cyan to-glow-purple transition-all duration-75 ease-out shadow-[0_0_8px_rgba(0,229,255,0.7)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
