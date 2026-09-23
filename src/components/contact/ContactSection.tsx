"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, Send, CheckCircle2, Copy, Sparkles, MapPin, ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate secure client submission handling
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-space-950 border-t border-space-700/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono-tech text-xs text-cyber-cyan uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-cyber-cyan"></span>
              09 // Final Milestone
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-primary">
              Let&apos;s build something useful.
            </h2>
          </div>
          <p className="text-xs font-mono-tech text-text-muted max-w-xs">
            Open to software engineering roles, intelligent automation projects, and technical collaboration.
          </p>
        </div>

        {/* 2-Column Layout: Direct Details / Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Direct Channels (5 cols) */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-2xl bg-space-850/80 border border-space-600/30 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="font-mono-tech text-xs text-cyber-cyan uppercase tracking-wider">
                  Direct Communication
                </span>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Whether you are a recruiter, technical founder, or engineering team lead seeking someone who understands system mechanics from the ground up, I welcome direct outreach.
                </p>
              </div>

              {/* Copyable Email Box */}
              <div className="p-4 rounded-xl bg-space-900 border border-space-700/60 space-y-2">
                <span className="text-[11px] font-mono-tech text-text-muted uppercase">Direct Email:</span>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono-tech text-xs sm:text-sm text-text-primary select-all">
                    {profileData.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-space-800 hover:bg-space-750 text-text-muted hover:text-cyber-cyan transition-colors"
                    title="Copy Email"
                  >
                    {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && (
                  <p className="text-[11px] font-mono-tech text-emerald-400">
                    Copied to clipboard!
                  </p>
                )}
              </div>

              {/* Verified Profiles */}
              <div className="space-y-3">
                <span className="text-[11px] font-mono-tech text-text-muted uppercase block">
                  Network Profiles:
                </span>
                <div className="flex flex-col gap-2 text-xs font-mono-tech">
                  <a
                    href={profileData.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-space-900 hover:bg-space-800 border border-space-700/50 flex items-center justify-between text-text-secondary hover:text-text-primary transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Linkedin className="w-4 h-4 text-neon-blue" />
                      <span>linkedin.com/in/mikiyas-birhanu</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={profileData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-space-900 hover:bg-space-800 border border-space-700/50 flex items-center justify-between text-text-secondary hover:text-text-primary transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Github className="w-4 h-4 text-cyber-cyan" />
                      <span>github.com/mikiyasbirhanu</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Geographical Base */}
            <div className="pt-6 border-t border-space-800 flex items-center gap-2 text-xs font-mono-tech text-text-muted">
              <MapPin className="w-3.5 h-3.5 text-cyber-cyan" />
              <span>Base: {profileData.location} (Remote Available)</span>
            </div>
          </div>

          {/* Interactive Form (7 cols) */}
          <div className="lg:col-span-7 p-7 sm:p-8 rounded-2xl bg-space-850/80 border border-space-600/30">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
                <div className="p-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-text-primary font-mono-tech">Message Received</h3>
                <p className="text-sm text-text-secondary max-w-sm">
                  Thank you for reaching out. I review incoming communications regularly and will respond promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-lg bg-space-800 hover:bg-space-750 text-xs font-mono-tech text-cyber-cyan transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1 pb-2">
                  <h3 className="text-lg font-bold text-text-primary">Send Direct Transmission</h3>
                  <p className="text-xs font-mono-tech text-text-muted">
                    No spam or automated marketing — direct to Mikiyas&apos;s workspace.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono-tech text-text-secondary">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Vance"
                      className="w-full bg-space-900 border border-space-700 focus:border-cyber-cyan rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-text-primary placeholder:text-text-muted focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono-tech text-text-secondary">Your Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full bg-space-900 border border-space-700 focus:border-cyber-cyan rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-text-primary placeholder:text-text-muted focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono-tech text-text-secondary">Subject / Inquiry</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Engineering Role / Project Consultation / Collaboration"
                    className="w-full bg-space-900 border border-space-700 focus:border-cyber-cyan rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-text-primary placeholder:text-text-muted focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono-tech text-text-secondary">Message Details *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your context, project requirements, or opportunity..."
                    className="w-full bg-space-900 border border-space-700 focus:border-cyber-cyan rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-text-primary placeholder:text-text-muted focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-lg bg-neon-blue hover:bg-neon-blue/90 disabled:opacity-50 text-white font-medium text-xs font-mono-tech flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(31,106,225,0.3)]"
                >
                  {isSubmitting ? (
                    <span>Encrypting & Dispatching...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
