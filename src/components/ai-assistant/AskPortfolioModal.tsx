"use client";

import { useState, useEffect, useRef } from "react";
import { Sparkles, X, Send, ArrowRight, CornerDownLeft, RotateCcw, ShieldCheck } from "lucide-react";
import { usePortfolioAI } from "./usePortfolioAI";

interface AskPortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AskPortfolioModal({ isOpen, onClose }: AskPortfolioModalProps) {
  const [inputValue, setInputValue] = useState("");
  const { messages, isTyping, queryAssistant, resetChat } = usePortfolioAI();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
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

  const suggestedQuestions = [
    "Tell me about Mikiyas's AI project.",
    "What technologies does he use?",
    "What is his educational background?",
    "How does he approach problem solving?",
    "How can I contact him?",
  ];

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim()) return;
    queryAssistant(inputValue);
    setInputValue("");
  };

  const handlePromptClick = (prompt: string) => {
    queryAssistant(prompt);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-space-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-space-900 border border-cyber-cyan/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] my-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ai-assistant-title"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-space-750 bg-space-850/90">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30">
              <Sparkles className="w-4 h-4 text-cyber-cyan" />
            </div>
            <div>
              <h2 id="ai-assistant-title" className="text-sm font-bold text-text-primary flex items-center gap-2">
                <span>Ask My Portfolio</span>
                <span className="px-2 py-0.2 rounded text-[10px] font-mono-tech bg-space-900 text-cyber-cyan border border-cyber-cyan/20">
                  Grounded Knowledge
                </span>
              </h2>
              <p className="text-[11px] font-mono-tech text-text-muted flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                Answers strictly from Mikiyas&apos;s verified records
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={resetChat}
              title="Reset Conversation"
              className="p-1.5 rounded-md hover:bg-space-800 text-text-muted hover:text-text-primary transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md hover:bg-space-800 text-text-muted hover:text-text-primary transition-colors"
              aria-label="Close Assistant"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Suggested Quick Prompts */}
        <div className="px-5 py-2.5 bg-space-950/60 border-b border-space-800 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-[11px] font-mono-tech text-text-muted shrink-0">Try:</span>
          {suggestedQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handlePromptClick(q)}
              className="px-2.5 py-1 rounded-full bg-space-850 hover:bg-space-800 border border-space-700/50 hover:border-cyber-cyan/40 text-[11px] font-mono-tech text-text-secondary hover:text-cyber-cyan whitespace-nowrap transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Chat Messages Log */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1 text-sm bg-space-900/60">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl p-4 space-y-2 leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-neon-blue text-white rounded-tr-sm"
                    : "bg-space-850 border border-space-700/50 text-text-secondary rounded-tl-sm shadow-md"
                }`}
              >
                <div className="whitespace-pre-wrap text-xs sm:text-sm">{msg.text}</div>

                {/* Related jump links */}
                {msg.relatedLinks && msg.relatedLinks.length > 0 && (
                  <div className="pt-2 mt-2 border-t border-space-700/50 flex flex-wrap gap-2">
                    {msg.relatedLinks.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.href}
                        onClick={onClose}
                        className="inline-flex items-center gap-1 text-xs font-mono-tech text-cyber-cyan hover:underline"
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <span className="text-[10px] font-mono-tech text-text-muted mt-1 px-1">{msg.timestamp}</span>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 p-3 max-w-fit rounded-xl bg-space-850 border border-space-700 text-xs font-mono-tech text-text-muted animate-pulse">
              <Sparkles className="w-3.5 h-3.5 text-cyber-cyan animate-spin" />
              <span>Synthesizing portfolio records...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSubmit} className="p-4 bg-space-850/90 border-t border-space-750 flex items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about Mikiyas's AI capstone, skills, background, or projects..."
            className="flex-1 bg-space-950 border border-space-700 focus:border-cyber-cyan rounded-xl px-4 py-2.5 text-xs sm:text-sm text-text-primary placeholder:text-text-muted focus:outline-none transition-colors"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isTyping}
            className="p-2.5 rounded-xl bg-neon-blue hover:bg-neon-blue/90 disabled:opacity-40 text-white transition-all shadow-sm"
            aria-label="Send Query"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
