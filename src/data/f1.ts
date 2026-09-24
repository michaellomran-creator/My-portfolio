export interface F1DriverProfile {
  name: string;
  driverNumber: string;
  currentTeam: string;
  teamColor: string;
  championships: string;
  officialProfileUrl: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export interface F1Circuit {
  id: string;
  name: string;
  grandPrix: string;
  lengthKm: string;
  turns: number;
  laps: number;
  badge: string;
  distinction: string;
  isFavorite: boolean;
  nightRace?: boolean;
  mapImageUrl: string;
  mapImageAlt: string;
  drsZones?: string;
  elevationChange?: string;
}

export interface F1Insight {
  id: string;
  title: string;
  summary: string;
}

export interface F1WeekendStage {
  code: string;
  name: string;
  detail: string;
}

export interface F1EngineeringPillar {
  title: string;
  connection: string;
}

export interface F1OfficialLink {
  label: string;
  url: string;
  source: string;
}

export const f1DriverData: F1DriverProfile = {
  name: "Sir Lewis Hamilton",
  driverNumber: "#44",
  currentTeam: "Ferrari",
  teamColor: "#EF4444", // Scuderia red accent
  championships: "7× World Champion",
  officialProfileUrl: "https://www.formula1.com/en/drivers/lewis-hamilton.html",
  stats: [
    { label: "Grand Prix Wins", value: "106" },
    { label: "Pole Positions", value: "104" },
    { label: "Podiums", value: "207" },
    { label: "World Championships", value: "7" },
  ],
};

export const f1Circuits: F1Circuit[] = [
  {
    id: "spa",
    name: "Spa-Francorchamps",
    grandPrix: "Belgian Grand Prix",
    lengthKm: "7.004 km",
    turns: 19,
    laps: 44,
    badge: "MY FAVORITE",
    distinction: "The longest circuit on the active Formula 1 calendar",
    isFavorite: true,
    elevationChange: "102.2 m elevation delta",
    drsZones: "2 DRS Zones",
    mapImageUrl: "/assets/f1/spa_official_circuit.webp",
    mapImageAlt: "Official Formula 1 Circuit Map - Circuit de Spa-Francorchamps (2026)",
  },
  {
    id: "singapore",
    name: "Marina Bay Street Circuit",
    grandPrix: "Singapore Grand Prix",
    lengthKm: "4.927 km",
    turns: 19,
    laps: 62,
    badge: "ONE OF MY FAVORITES",
    distinction: "First night race in Formula 1 history (inaugurated 2008)",
    isFavorite: false,
    nightRace: true,
    drsZones: "4 DRS Zones",
    mapImageUrl: "/assets/f1/singapore_official_circuit.webp",
    mapImageAlt: "Official Formula 1 Circuit Map - Marina Bay Street Circuit (2026, 19 turns)",
  },
];

export const f1Insights: F1Insight[] = [
  {
    id: "strategy",
    title: "RACE STRATEGY",
    summary:
      "Watching a race unfold through tyre choices, pit timing, traffic, and changing conditions is one of the most interesting parts of F1.",
  },
  {
    id: "engineering",
    title: "ENGINEERING",
    summary:
      "The performance of the car is only one part of what makes the sport fascinating; development and setup decisions can completely change a weekend.",
  },
  {
    id: "qualifying",
    title: "QUALIFYING",
    summary:
      "The pressure of extracting everything from a lap when the margin is tiny.",
  },
  {
    id: "tyres",
    title: "TYRE MANAGEMENT",
    summary:
      "Strategy becomes especially interesting when pace, degradation, weather, and track position collide.",
  },
  {
    id: "overtakes",
    title: "OVERTAKES",
    summary:
      "The combination of timing, confidence, braking, and preparation behind a successful pass.",
  },
  {
    id: "battles",
    title: "DRIVER BATTLES",
    summary:
      "The human side of the sport: two drivers solving the same problem differently.",
  },
];

export const f1RaceWeekendStages: F1WeekendStage[] = [
  {
    code: "FP1",
    name: "Practice 1",
    detail: "Initial balance verification, baseline aerodynamic correlation, and circuit grip evaluation.",
  },
  {
    code: "FP2",
    name: "Practice 2",
    detail: "Representative long-run race pace simulations and qualifying simulations under peak circuit conditions.",
  },
  {
    code: "FP3",
    name: "Practice 3",
    detail: "Final setup refinement, tyre warmup calibration, and low-fuel single-lap qualifying preparation.",
  },
  {
    code: "QUALIFYING",
    name: "Qualifying (Q1-Q3)",
    detail: "Three-session knockout extracting peak single-lap pace on the absolute limit of grip and risk.",
  },
  {
    code: "RACE",
    name: "Grand Prix",
    detail: "Lights out to chequered flag: pit-stop execution, tyre management, traffic navigating, and racecraft.",
  },
];

export const f1EngineeringPillars: F1EngineeringPillar[] = [
  {
    title: "PRECISION",
    connection:
      "Operating where milliseconds determine victory mirrors the rigor of writing high-reliability, performance-conscious code.",
  },
  {
    title: "STRATEGY",
    connection:
      "Weighing short-term trade-offs against race-distance outcomes parallels designing scalable, maintainable software architectures.",
  },
  {
    title: "OPTIMIZATION",
    connection:
      "Iterative telemetry-driven adjustments echo the process of profiling systems, identifying bottlenecks, and refining algorithms.",
  },
  {
    title: "CONTINUOUS IMPROVEMENT",
    connection:
      "Deploying updates every race weekend reflects the modern engineering mindset of constant testing, learning, and compounding gains.",
  },
];

export const f1OfficialLinks: F1OfficialLink[] = [
  {
    label: "Formula 1",
    url: "https://www.formula1.com",
    source: "Official Championship Portal",
  },
  {
    label: "Spa-Francorchamps",
    url: "https://www.spa-francorchamps.be",
    source: "Circuit de Spa-Francorchamps",
  },
  {
    label: "Singapore GP",
    url: "https://singaporegp.sg",
    source: "Marina Bay Street Circuit",
  },
  {
    label: "Lewis Hamilton Profile",
    url: "https://www.formula1.com/en/drivers/lewis-hamilton.html",
    source: "Official Driver Profile",
  },
];
