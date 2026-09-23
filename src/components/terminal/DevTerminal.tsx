"use client";

import { useState, useRef, useEffect } from "react";
import { X, Terminal as TerminalIcon, Maximize2, Minimize2, CornerDownLeft } from "lucide-react";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { skillCategories } from "@/data/skills";

interface DevTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

export function DevTerminal({ isOpen, onClose }: DevTerminalProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-text-muted">
          <p className="text-cyber-cyan font-bold">Mikiyas Birhanu — Developer Telemetry Terminal v1.0.4</p>
          <p>Type <span className="text-text-primary font-semibold">&apos;help&apos;</span> to see available system commands.</p>
        </div>
      ),
    },
  ]);
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const terminalBottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "`" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const rawCmd = input.trim().toLowerCase();
    setInput("");

    if (!rawCmd) return;

    if (rawCmd === "clear") {
      setHistory([]);
      return;
    }

    let output: React.ReactNode = null;

    switch (rawCmd) {
      case "help":
        output = (
          <div className="space-y-1 text-text-secondary">
            <p className="text-cyber-cyan">Available commands:</p>
            <p><span className="text-text-primary font-semibold">whoami</span> — Display engineer identity & positioning</p>
            <p><span className="text-text-primary font-semibold">projects</span> — List engineered systems & case studies</p>
            <p><span className="text-text-primary font-semibold">skills</span> — Enumerate technical stack and domains</p>
            <p><span className="text-text-primary font-semibold">f1</span> — Display telemetry insights & precision ethos</p>
            <p><span className="text-text-primary font-semibold">now</span> — Query current technical initiatives</p>
            <p><span className="text-text-primary font-semibold">cat cv.txt</span> — Read plain-text curriculum vitae snapshot</p>
            <p><span className="text-text-primary font-semibold">contact</span> — Get direct channels & communication endpoints</p>
            <p><span className="text-text-primary font-semibold">clear</span> — Wipe terminal viewport</p>
          </div>
        );
        break;

      case "whoami":
        output = (
          <div className="space-y-1.5 text-text-secondary">
            <p className="text-cyber-cyan font-bold">{profileData.name}</p>
            <p>{profileData.roleTitle}</p>
            <p className="text-text-muted">{profileData.tagline}</p>
            <p className="text-xs text-text-muted">Education: Bahir Dar University (BiT) • B.Sc. in IT</p>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-2">
            <p className="text-cyber-cyan">Key Projects in Registry:</p>
            {projectsData.map((p, idx) => (
              <div key={idx} className="border-l-2 border-space-600 pl-3 py-0.5">
                <p className="text-text-primary font-semibold">[{p.category}] {p.title}</p>
                <p className="text-xs text-text-muted">{p.shortDescription}</p>
                <p className="text-[11px] text-cyber-cyan">Status: {p.status}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-2">
            <p className="text-cyber-cyan">Loaded Skill Categories:</p>
            {skillCategories.map((c, idx) => (
              <div key={idx} className="space-y-0.5">
                <span className="text-text-primary font-semibold text-xs">{c.title}:</span>
                <p className="text-xs text-text-muted">
                  {c.skills.map((s) => s.name).join(" • ")}
                </p>
              </div>
            ))}
          </div>
        );
        break;

      case "f1":
        output = (
          <div className="space-y-1.5 text-text-secondary border-l-2 border-rose-500 pl-3">
            <p className="text-rose-400 font-bold font-mono-tech">&gt; F1_TELEMETRY_ENGINE</p>
            <p className="italic text-text-primary">&quot;{profileData.beyondCode.f1.quote}&quot;</p>
            <p className="text-xs">{profileData.beyondCode.f1.description}</p>
            <p className="text-[11px] text-cyber-cyan">
              Vectors: {profileData.beyondCode.f1.traits.join(" // ")}
            </p>
          </div>
        );
        break;

      case "now":
        output = (
          <div className="space-y-1 text-text-secondary">
            <p className="text-cyber-cyan font-bold">&gt; STATUS: CURRENTLY_BUILDING</p>
            <p>{profileData.status.currentFocus}</p>
            <p className="text-xs text-text-muted">Availability: {profileData.status.availability}</p>
          </div>
        );
        break;

      case "cat cv.txt":
      case "cat resume.txt":
        output = (
          <div className="p-3 bg-space-950 rounded border border-space-800 space-y-2 text-xs">
            <p className="text-cyber-cyan font-bold">CURRICULUM VITAE SUMMARY</p>
            <p>Candidate: {profileData.name}</p>
            <p>Degree: B.Sc. in Information Technology, Bahir Dar University (BiT)</p>
            <p>Core Areas: Python, TypeScript, Rule-Based AI, Web Architecture, Network Security</p>
            <p>Capstone: AI-Powered Career Guidance System (Pre-Engineering Stream Placement)</p>
            <p className="text-text-muted">For complete PDF format, click &apos;Download CV&apos; on the main page.</p>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-text-secondary">
            <p className="text-cyber-cyan font-bold">COMMUNICATION CHANNELS:</p>
            <p>Email: <a href={`mailto:${profileData.email}`} className="text-text-primary underline">{profileData.email}</a></p>
            <p>GitHub: <a href={profileData.githubUrl} target="_blank" rel="noreferrer" className="text-text-primary underline">{profileData.githubUrl}</a></p>
            <p>LinkedIn: <a href={profileData.linkedinUrl} target="_blank" rel="noreferrer" className="text-text-primary underline">{profileData.linkedinUrl}</a></p>
          </div>
        );
        break;

      case "sudo":
      case "sudo rm -rf /":
        output = <p className="text-rose-400">Permission denied: guest privileges active.</p>;
        break;

      default:
        output = (
          <p className="text-rose-400">
            command not recognized: &apos;{rawCmd}&apos;. Type &apos;help&apos; for list of commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: rawCmd, output }]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-space-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={`relative w-full bg-space-950 border border-space-600/70 rounded-xl shadow-2xl overflow-hidden flex flex-col font-mono-tech ${
          isExpanded ? "max-w-5xl h-[85vh]" : "max-w-2xl h-[480px]"
        }`}
      >
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-space-900 border-b border-space-750 select-none">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 cursor-pointer" />
            <div
              className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
            />
            <span className="ml-2 text-xs text-text-muted flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyber-cyan" />
              <span>mikiyas@dev-workstation:~</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 rounded text-text-muted hover:text-text-primary"
            >
              {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button onClick={onClose} className="p-1 rounded text-text-muted hover:text-text-primary">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-4 overflow-y-auto space-y-3 text-xs bg-space-950 cursor-text leading-relaxed"
        >
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-text-muted">
                <span className="text-cyber-cyan">$</span>
                <span className="text-text-primary">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}

          {/* Prompt line */}
          <form onSubmit={handleCommand} className="flex items-center gap-2 pt-1">
            <span className="text-cyber-cyan font-bold">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent border-none text-text-primary focus:outline-none caret-cyber-cyan text-xs"
              autoFocus
              spellCheck={false}
            />
          </form>

          <div ref={terminalBottomRef} />
        </div>
      </div>
    </div>
  );
}
