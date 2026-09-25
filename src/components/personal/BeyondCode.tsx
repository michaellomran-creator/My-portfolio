"use client";

import { useState } from "react";
import {
  Gauge,
  Camera,
  ExternalLink,
  ChevronRight,
  Maximize2,
  Calendar,
  Layers,
  Sparkles,
  Timer,
  Compass,
  Zap,
  Flag,
} from "lucide-react";
import {
  photographyData,
  photographyCategories,
  PhotographyCategory,
  PhotographItem,
} from "@/data/photography";
import {
  f1DriverData,
  f1Circuits,
  f1Insights,
  f1RaceWeekendStages,
  f1EngineeringPillars,
  f1OfficialLinks,
} from "@/data/f1";
import { PhotoLightbox } from "./PhotoLightbox";

export function BeyondCode() {
  // Photography State
  const [selectedCategory, setSelectedCategory] = useState<PhotographyCategory>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  // Formula 1 Interactive State
  const [activeCircuitId, setActiveCircuitId] = useState<string>("spa");
  const [activeInsightId, setActiveInsightId] = useState<string>("strategy");
  const [activeWeekendStageCode, setActiveWeekendStageCode] = useState<string>("QUALIFYING");

  // Dynamic calculations for photography
  const totalPhotographs = photographyData.length;
  const filteredPhotos =
    selectedCategory === "All"
      ? photographyData
      : photographyData.filter((p) => p.category === selectedCategory);

  const featuredPhoto =
    photographyData.find((p) => p.isFeatured) || photographyData[0];

  // Secondary editorial selection (first 4 non-featured or subset)
  const secondaryPhotos = photographyData
    .filter((p) => p.id !== featuredPhoto.id)
    .slice(0, 4);

  // Open lightbox handler
  const openLightboxAt = (photoId: string) => {
    const idx = photographyData.findIndex((p) => p.id === photoId);
    if (idx !== -1) {
      setActivePhotoIndex(idx);
      setLightboxOpen(true);
    }
  };

  const activeCircuit =
    f1Circuits.find((c) => c.id === activeCircuitId) || f1Circuits[0];
  const activeInsight =
    f1Insights.find((i) => i.id === activeInsightId) || f1Insights[0];
  const activeWeekendStage =
    f1RaceWeekendStages.find((s) => s.code === activeWeekendStageCode) ||
    f1RaceWeekendStages[3];

  return (
    <section
      id="personal"
      className="py-24 bg-space-950 border-t border-space-700/40 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative z-10">
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-space-800/80">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono-tech text-xs text-cyber-cyan uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse"></span>
              08 // DIMENSIONS BEYOND CODE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">
              Beyond the code, these are the things I keep coming back to.
            </h2>
          </div>
          <div className="md:text-right max-w-sm">
            <p className="text-sm font-mono-tech text-text-secondary leading-relaxed">
              Curiosity, precision, creativity, and an appreciation for the details.
            </p>
            <div className="mt-3 flex flex-wrap md:justify-end gap-2 text-[10px] font-mono-tech">
              <span className="px-2 py-0.5 rounded bg-space-900 border border-rose-500/30 text-rose-300">
                F1: PRECISION • STRATEGY • PERFORMANCE
              </span>
              <span className="px-2 py-0.5 rounded bg-space-900 border border-cyber-cyan/30 text-cyber-cyan">
                PHOTO: OBSERVATION • CREATIVITY • PERSPECTIVE
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MAIN TWO-COLUMN EXPERIENCES (F1 & PHOTOGRAPHY)            */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* ======================================================= */}
          {/* COLUMN 1: FORMULA 1 & PERFORMANCE (6 Cols)             */}
          {/* ======================================================= */}
          <div className="lg:col-span-6 space-y-8 flex flex-col">
            {/* F1 Header Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-space-900 via-space-850 to-space-900 border border-space-700/70 shadow-lg space-y-4 relative overflow-hidden group">
              {/* Top Row: Typographic F1 Motorsport Identity Treatment & Precision Discipline */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-space-950/90 border border-rose-500/30 shadow-[0_0_12px_rgba(244,63,94,0.12)]">
                  {/* Subtle motorsport precision / motion indicator */}
                  <div className="flex items-end gap-0.5 -skew-x-12" aria-hidden="true">
                    <span className="w-0.5 h-2 rounded-[1px] bg-rose-500/40" />
                    <span className="w-0.5 h-2.5 rounded-[1px] bg-rose-500/70" />
                    <span className="w-0.5 h-3 rounded-[1px] bg-rose-500" />
                  </div>
                  {/* Clean typographic F1 label */}
                  <span className="font-mono-tech font-black text-xs tracking-tight text-text-primary">
                    F<span className="text-rose-400">1</span>
                  </span>
                  <span className="w-px h-3 bg-space-800" aria-hidden="true" />
                  <span className="font-mono-tech text-[10px] text-rose-300/80 uppercase tracking-widest font-semibold">
                    F1 // PERSONAL INTEREST
                  </span>
                </div>

                <div className="px-2.5 py-1 rounded bg-space-950 border border-space-800 text-[10px] font-mono-tech text-text-muted">
                  PRECISION DISCIPLINE
                </div>
              </div>

              {/* Motorsport Precision Category Tag */}
              <div className="flex items-center gap-2.5 pt-0.5">
                <div className="p-1.5 rounded-lg bg-rose-500/15 border border-rose-500/30 text-rose-400">
                  <Gauge className="w-3.5 h-3.5" />
                </div>
                <span className="font-mono-tech text-xs text-rose-400 uppercase tracking-widest font-semibold">
                  MOTORSPORT / PRECISION
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-text-primary tracking-tight">
                  Formula 1 & Performance
                </h3>
                <p className="mt-2.5 text-sm text-text-secondary leading-relaxed">
                  A serious Formula 1 fan fascinated by the speed, strategy, precision,
                  and constant pursuit of improvement that define the sport. I enjoy
                  following the technical side of racing, the decisions behind every lap,
                  and the small details that can change an entire race.
                </p>
              </div>
            </div>

            {/* Favorite Driver Card: Sir Lewis Hamilton */}
            <div className="p-6 rounded-2xl bg-space-900/90 border border-rose-500/25 shadow-[0_0_25px_rgba(239,68,68,0.06)] space-y-5 relative overflow-hidden">
              {/* Subtle watermarked #44 */}
              <div className="absolute -bottom-6 -right-3 font-mono-tech text-8xl font-black text-rose-500/5 select-none pointer-events-none">
                44
              </div>

              <div className="flex items-center justify-between border-b border-space-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  <span className="font-mono-tech text-[11px] text-text-muted uppercase tracking-wider">
                    FAVORITE DRIVER
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-rose-950/60 border border-rose-500/40 text-[11px] font-mono-tech font-bold text-rose-300">
                  {f1DriverData.driverNumber}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-xl font-bold text-text-primary">
                    {f1DriverData.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1 text-xs font-mono-tech">
                    <span className="text-rose-400 font-semibold">
                      {f1DriverData.currentTeam}
                    </span>
                    <span className="text-text-muted">•</span>
                    <span className="text-text-secondary">
                      {f1DriverData.championships}
                    </span>
                  </div>
                </div>

                <a
                  href={f1DriverData.officialProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-space-950 hover:bg-space-800 border border-space-700/80 text-xs font-mono-tech text-text-secondary hover:text-rose-400 transition-colors self-start sm:self-auto"
                >
                  <span>Official Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Verified Stable Career Statistics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                {f1DriverData.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-space-950/80 border border-space-800/80 flex flex-col justify-between"
                  >
                    <span className="text-[10px] font-mono-tech text-text-muted uppercase tracking-tight">
                      {stat.label}
                    </span>
                    <span className="text-xl sm:text-2xl font-bold font-mono-tech text-rose-300 mt-1">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Favorite Circuits: Spa-Francorchamps & Marina Bay */}
            <div className="p-6 rounded-2xl bg-space-900/90 border border-space-700/70 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-space-800 pb-3">
                <div className="flex items-center gap-2">
                  <Flag className="w-4 h-4 text-cyber-cyan" />
                  <span className="font-mono-tech text-xs text-text-primary uppercase tracking-wider font-semibold">
                    CIRCUITS I KEEP COMING BACK TO
                  </span>
                </div>

                {/* Circuit selector tabs */}
                <div className="flex items-center gap-1.5 p-1 rounded-lg bg-space-950 border border-space-800 self-start sm:self-auto">
                  {f1Circuits.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setActiveCircuitId(c.id)}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono-tech transition-colors ${
                        activeCircuitId === c.id
                          ? "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                          : "text-text-muted hover:text-text-primary"
                      }`}
                    >
                      {c.name.split(" ")[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Circuit Detail Card */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h5 className="text-lg font-bold text-text-primary">
                        {activeCircuit.name}
                      </h5>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-mono-tech font-semibold uppercase ${
                          activeCircuit.isFavorite
                            ? "bg-rose-500/20 border border-rose-500/50 text-rose-300"
                            : "bg-cyan-500/20 border border-cyan-500/50 text-cyan-300"
                        }`}
                      >
                        {activeCircuit.badge}
                      </span>
                    </div>
                    <span className="text-xs font-mono-tech text-text-muted">
                      {activeCircuit.grandPrix}
                    </span>
                  </div>

                  <p className="text-xs text-text-secondary sm:text-right max-w-xs italic">
                    {activeCircuit.distinction}
                  </p>
                </div>

                {/* Official F1 Circuit Map & technical metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center p-4 rounded-xl bg-space-950/90 border border-space-800">
                  {/* Official Formula 1 Circuit Map Image */}
                  <div className="sm:col-span-7 flex flex-col items-center justify-center p-3 rounded-lg bg-space-950 border border-space-800/60">
                    <img
                      key={activeCircuit.id}
                      src={activeCircuit.mapImageUrl}
                      alt={activeCircuit.mapImageAlt}
                      className="w-full h-40 sm:h-48 object-contain select-none"
                      draggable={false}
                      loading="lazy"
                    />
                    <span className="text-[10px] font-mono-tech text-text-muted mt-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan/60"></span>
                      Official Formula 1 Circuit Map
                    </span>
                  </div>

                  {/* Circuit Specs */}
                  <div className="sm:col-span-5 grid grid-cols-2 sm:grid-cols-1 gap-2 text-xs font-mono-tech border-t sm:border-t-0 sm:border-l border-space-800 pt-3 sm:pt-0 sm:pl-4">
                    <div className="p-2 rounded bg-space-900/60 border border-space-800">
                      <span className="text-[10px] text-text-muted block">LENGTH</span>
                      <span className="text-text-primary font-bold">
                        {activeCircuit.lengthKm}
                      </span>
                    </div>
                    <div className="p-2 rounded bg-space-900/60 border border-space-800">
                      <span className="text-[10px] text-text-muted block">TURNS</span>
                      <span className="text-text-primary font-bold">
                        {activeCircuit.turns} Turns
                      </span>
                    </div>
                    <div className="p-2 rounded bg-space-900/60 border border-space-800">
                      <span className="text-[10px] text-text-muted block">RACE DISTANCE</span>
                      <span className="text-text-primary font-bold">
                        {activeCircuit.laps} Laps
                      </span>
                    </div>
                    <div className="p-2 rounded bg-space-900/60 border border-space-800">
                      <span className="text-[10px] text-text-muted block">KEY TRAIT</span>
                      <span className="text-cyber-cyan font-medium text-[11px]">
                        {activeCircuit.nightRace
                          ? "Night Street Circuit"
                          : "High Elevation Changes"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Circuit Comparison Strip */}
                <div className="p-3 rounded-lg bg-space-950/70 border border-space-850 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono-tech text-text-muted">
                  <span className="text-text-secondary">CIRCUIT COMPARISON:</span>
                  <div className="flex items-center gap-4">
                    <span className="text-rose-300">
                      SPA: 7.004 KM • 19 TURNS • 44 LAPS
                    </span>
                    <span className="text-space-600">|</span>
                    <span className="text-cyan-300">
                      MARINA BAY: 4.927 KM • 62 LAPS
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive: What Keeps Me Watching */}
            <div className="p-6 rounded-2xl bg-space-900/90 border border-space-700/70 space-y-4">
              <div className="flex items-center justify-between border-b border-space-800 pb-3">
                <span className="font-mono-tech text-xs text-text-primary uppercase tracking-wider font-semibold">
                  WHAT KEEPS ME WATCHING
                </span>
                <span className="text-[10px] font-mono-tech text-cyber-cyan">
                  SELECT A TOPIC
                </span>
              </div>

              {/* Topic Selector Pills */}
              <div className="flex flex-wrap gap-2">
                {f1Insights.map((insight) => {
                  const isActive = activeInsightId === insight.id;
                  return (
                    <button
                      key={insight.id}
                      onClick={() => setActiveInsightId(insight.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono-tech transition-all ${
                        isActive
                          ? "bg-rose-500/20 border border-rose-500/50 text-rose-300 shadow-[0_0_12px_rgba(244,63,94,0.15)]"
                          : "bg-space-950 border border-space-800 text-text-muted hover:text-text-secondary hover:border-space-700"
                      }`}
                    >
                      {insight.title}
                    </button>
                  );
                })}
              </div>

              {/* Selected Topic Explanation Reveal */}
              <div className="p-4 rounded-xl bg-space-950/90 border-l-2 border-rose-500 text-sm text-text-secondary leading-relaxed transition-all">
                <span className="font-mono-tech text-xs text-rose-400 uppercase tracking-wider font-semibold block mb-1">
                  {activeInsight.title}
                </span>
                &quot;{activeInsight.summary}&quot;
              </div>
            </div>

            {/* Race Weekend Timeline */}
            <div className="p-6 rounded-2xl bg-space-900/90 border border-space-700/70 space-y-4">
              <div className="flex items-center justify-between border-b border-space-800 pb-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-cyber-cyan" />
                  <span className="font-mono-tech text-xs text-text-primary uppercase tracking-wider font-semibold">
                    RACE WEEKEND
                  </span>
                </div>
                <span className="text-[10px] font-mono-tech text-text-muted">
                  CLICK STAGE TO INSPECT
                </span>
              </div>

              {/* Timeline Flow */}
              <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                {f1RaceWeekendStages.map((stage) => {
                  const isCurrent = activeWeekendStageCode === stage.code;
                  return (
                    <button
                      key={stage.code}
                      onClick={() => setActiveWeekendStageCode(stage.code)}
                      className={`p-2 sm:p-2.5 rounded-lg text-center transition-all flex flex-col items-center justify-center ${
                        isCurrent
                          ? "bg-cyber-cyan/20 border border-cyber-cyan/50 text-cyber-cyan shadow-cyber-sm"
                          : "bg-space-950 border border-space-800 text-text-muted hover:text-text-primary hover:border-space-700"
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-mono-tech font-bold">
                        {stage.code}
                      </span>
                      <span className="text-[9px] font-mono-tech truncate hidden sm:block mt-0.5">
                        {stage.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Stage Detail */}
              <div className="p-3.5 rounded-xl bg-space-950/70 border border-space-800 text-xs font-mono-tech text-text-secondary flex items-start gap-2.5">
                <Timer className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                <div>
                  <span className="text-text-primary font-bold">
                    {activeWeekendStage.name}:
                  </span>{" "}
                  {activeWeekendStage.detail}
                </div>
              </div>
            </div>

            {/* Engineering Connection: Why It Clicks With Me */}
            <div className="p-6 rounded-2xl bg-space-900/90 border border-space-700/70 space-y-4">
              <div className="border-b border-space-800 pb-3">
                <span className="font-mono-tech text-xs text-text-primary uppercase tracking-wider font-semibold">
                  WHY IT CLICKS WITH ME
                </span>
                <p className="mt-1 text-xs text-text-muted">
                  Qualities I appreciate in Formula 1 and also value when designing and building software.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {f1EngineeringPillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-space-950/80 border border-space-800 space-y-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                      <span className="font-mono-tech text-xs font-bold text-rose-300">
                        {pillar.title}
                      </span>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {pillar.connection}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Explore F1 Official Links */}
            <div className="p-4 rounded-xl bg-space-900/60 border border-space-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono-tech">
              <span className="text-text-muted uppercase text-[11px]">
                EXPLORE F1 (OFFICIAL):
              </span>
              <div className="flex flex-wrap gap-2">
                {f1OfficialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-space-950 hover:bg-space-800 border border-space-800 hover:border-space-700 text-text-secondary hover:text-cyber-cyan transition-colors"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-3 h-3 text-text-muted" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ======================================================= */}
          {/* COLUMN 2: PHOTOGRAPHY & VISUAL STORYTELLING (6 Cols)   */}
          {/* ======================================================= */}
          <div className="lg:col-span-6 space-y-8 flex flex-col">
            {/* Photography Header & Personal Reflection */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-space-900 via-space-850 to-space-900 border border-space-700/70 shadow-lg space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-cyber-cyan/15 border border-cyber-cyan/30 text-cyber-cyan">
                    <Camera className="w-4 h-4" />
                  </div>
                  <span className="font-mono-tech text-xs text-cyber-cyan uppercase tracking-widest font-semibold">
                    PHOTOGRAPHY / VISUALS
                  </span>
                </div>

                {/* Dynamic count badge (automatically updates when photos added) */}
                <div className="px-2.5 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-[10px] font-mono-tech text-cyber-cyan font-bold tracking-wider">
                  {totalPhotographs} PHOTOGRAPHS
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-text-primary tracking-tight">
                  Photography & Visual Storytelling
                </h3>
                <p className="mt-2.5 text-sm text-text-secondary leading-relaxed">
                  &quot;I enjoy photography because it makes me slow down and notice
                  details, perspectives, light, and moments that are easy to overlook.&quot;
                </p>
              </div>

              {/* Category Filter Pills (Subtle & Configurable) */}
              <div className="pt-2 flex flex-wrap items-center gap-1.5 border-t border-space-800/80">
                <span className="text-[10px] font-mono-tech text-text-muted mr-1">
                  FILTER:
                </span>
                {photographyCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono-tech transition-colors ${
                      selectedCategory === cat
                        ? "bg-cyber-cyan/20 border border-cyber-cyan/50 text-cyber-cyan font-semibold"
                        : "bg-space-950 border border-space-800 text-text-muted hover:text-text-primary"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Curated Editorial Album: Hero Featured Photograph */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-tech text-text-muted uppercase tracking-wider">
                  FEATURED WORK
                </span>
                <span className="text-[11px] font-mono-tech text-cyber-cyan flex items-center gap-1">
                  Click any image to view album
                </span>
              </div>

              <div
                onClick={() => openLightboxAt(featuredPhoto.id)}
                className="group relative rounded-2xl overflow-hidden border border-space-700/80 bg-space-900 cursor-pointer shadow-xl transition-all duration-300 hover:border-cyber-cyan/50"
              >
                {/* Hero Image Container */}
                <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden relative">
                  <img
                    src={featuredPhoto.src}
                    alt={featuredPhoto.title}
                    loading="eager"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-space-950/90 via-space-950/20 to-transparent pointer-events-none" />

                  {/* Top-Right Quick Expand Icon */}
                  <div className="absolute top-3 right-3 p-2 rounded-lg bg-space-950/80 border border-space-750 text-text-secondary group-hover:text-cyber-cyan backdrop-blur-sm transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between">
                    <div>
                      <span className="text-[10px] font-mono-tech text-cyber-cyan uppercase tracking-wider block mb-0.5">
                        CURATED HERO • {featuredPhoto.category || "ORIGINAL"}
                      </span>
                      <h4 className="text-xl font-bold text-text-primary drop-shadow-md">
                        {featuredPhoto.title}
                      </h4>
                    </div>
                    <span className="text-xs font-mono-tech text-text-muted group-hover:text-cyber-cyan transition-colors flex items-center gap-1">
                      View Fullscreen <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Editorial Showcase (Asymmetric Multi-Image Rhythm) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-tech text-text-muted uppercase tracking-wider">
                  EDITORIAL SELECTIONS
                </span>
                <span className="text-[10px] font-mono-tech text-text-muted">
                  PERSONAL ARCHIVE
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {secondaryPhotos.map((photo) => (
                  <div
                    key={photo.id}
                    onClick={() => openLightboxAt(photo.id)}
                    className="group relative rounded-xl overflow-hidden border border-space-700/60 bg-space-900 cursor-pointer shadow-md transition-all hover:border-cyber-cyan/40"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden relative">
                      <img
                        src={photo.src}
                        alt={photo.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-space-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                      <div className="absolute bottom-0 inset-x-0 p-3">
                        <h5 className="text-xs font-semibold text-text-primary truncate">
                          {photo.title}
                        </h5>
                        {photo.category && (
                          <span className="text-[9px] font-mono-tech text-text-muted block truncate">
                            {photo.category}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Complete Archive Contact Sheet & Browser */}
            <div className="p-5 rounded-2xl bg-space-900/90 border border-space-700/70 space-y-4">
              <div className="flex items-center justify-between border-b border-space-800 pb-3">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyber-cyan" />
                  <span className="font-mono-tech text-xs text-text-primary uppercase tracking-wider font-semibold">
                    COMPLETE ARCHIVE ({filteredPhotos.length})
                  </span>
                </div>
                <span className="text-[10px] font-mono-tech text-text-muted">
                  BROWSE ALL 23 PHOTOGRAPHS
                </span>
              </div>

              {/* Rhythmic miniature contact sheet */}
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {filteredPhotos.map((photo, idx) => (
                  <div
                    key={photo.id}
                    onClick={() => openLightboxAt(photo.id)}
                    title={photo.title}
                    className="group relative aspect-square rounded-lg overflow-hidden border border-space-800/80 bg-space-950 cursor-pointer hover:border-cyber-cyan/60 transition-all hover:scale-105"
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-space-950/40 group-hover:bg-transparent transition-colors" />
                    <span className="absolute bottom-1 right-1 px-1 rounded bg-space-950/90 text-[8px] font-mono-tech text-text-muted">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center">
                <button
                  onClick={() => openLightboxAt(filteredPhotos[0]?.id || featuredPhoto.id)}
                  className="w-full py-2.5 rounded-xl bg-space-950 hover:bg-space-800 border border-space-750 text-xs font-mono-tech text-cyber-cyan hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Open Interactive Lightbox Viewer (All {totalPhotographs} Photos)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <PhotoLightbox
        photos={photographyData}
        currentIndex={activePhotoIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setActivePhotoIndex(newIdx)}
      />
    </section>
  );
}
