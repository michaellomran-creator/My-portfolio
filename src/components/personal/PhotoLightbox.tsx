"use client";

import { useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { PhotographItem } from "@/data/photography";

interface PhotoLightboxProps {
  photos: PhotographItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function PhotoLightbox({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: PhotoLightboxProps) {
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const totalPhotos = photos.length;
  const currentPhoto = photos[currentIndex] || photos[0];

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + totalPhotos) % totalPhotos);
  }, [currentIndex, totalPhotos, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % totalPhotos);
  }, [currentIndex, totalPhotos, onNavigate]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Touch gesture handling for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const diff = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 45; // px threshold

    if (diff > minSwipeDistance) {
      handleNext();
    } else if (diff < -minSwipeDistance) {
      handlePrev();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  if (!isOpen || !currentPhoto) return null;

  const formattedIndex = String(currentIndex + 1).padStart(2, "0");
  const formattedTotal = String(totalPhotos).padStart(2, "0");

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photography viewer"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-2 sm:p-6 transition-opacity duration-300 animate-fadeIn"
      onClick={onClose}
    >
      {/* Lightbox Container (stops click propagation so clicking inside image doesn't close) */}
      <div
        className="relative max-w-6xl w-full h-[90vh] max-h-[860px] flex flex-col justify-between items-center rounded-2xl bg-space-950/80 border border-space-700/60 p-4 sm:p-6 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top Header Bar */}
        <div className="w-full flex items-center justify-between pb-3 border-b border-space-800 text-xs font-mono-tech text-text-muted select-none">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse"></span>
            <span className="text-text-primary font-semibold tracking-wider">
              {currentPhoto.title || "Photograph"}
            </span>
            {currentPhoto.category && (
              <span className="hidden sm:inline px-2 py-0.5 rounded bg-space-900 border border-space-750 text-[10px] text-cyber-cyan">
                {currentPhoto.category}
              </span>
            )}
          </div>

          <div className="flex items-center gap-4">
            <div className="text-cyber-cyan font-bold tracking-widest">
              {formattedIndex} <span className="text-text-muted">/</span> {formattedTotal}
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-space-900 hover:bg-space-800 border border-space-700 text-text-muted hover:text-text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-cyber-cyan"
              aria-label="Close viewer (Escape)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Central Image Viewer Area */}
        <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden my-3 group">
          <img
            key={currentPhoto.src}
            src={currentPhoto.src}
            alt={currentPhoto.title || "Personal photograph"}
            className="max-h-full max-w-full object-contain rounded-lg shadow-lg select-none transition-transform duration-300"
            draggable={false}
          />

          {/* Navigation Overlay Buttons (Desktop & Tablet) */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-space-900/80 hover:bg-space-800 border border-space-700/80 text-text-secondary hover:text-cyber-cyan backdrop-blur-sm transition-all shadow-lg focus:outline-none focus:ring-1 focus:ring-cyber-cyan"
            aria-label="Previous photograph (Left Arrow)"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-space-900/80 hover:bg-space-800 border border-space-700/80 text-text-secondary hover:text-cyber-cyan backdrop-blur-sm transition-all shadow-lg focus:outline-none focus:ring-1 focus:ring-cyber-cyan"
            aria-label="Next photograph (Right Arrow)"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Footer Info & Keyboard Guide */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between pt-2 border-t border-space-800 text-[11px] font-mono-tech text-text-muted gap-2">
          <div className="flex items-center gap-3">
            <span className="text-text-secondary">
              Personal Collection • Mikiyas Birhanu
            </span>
            {currentPhoto.location && (
              <span className="text-text-muted">| {currentPhoto.location}</span>
            )}
          </div>

          <div className="flex items-center gap-4 text-[10px] text-text-muted/80">
            <span className="hidden sm:inline">Use [←] and [→] to navigate</span>
            <span>[ESC] to close</span>
            <span className="sm:hidden">Swipe left/right</span>
          </div>
        </div>
      </div>
    </div>
  );
}
