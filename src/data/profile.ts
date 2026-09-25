import { ContactConfig } from "@/types";

export const contactConfig: ContactConfig = {
  github: {
    username: "michaellomran-creator",
    url: "https://github.com/michaellomran-creator",
    label: "github.com/michaellomran-creator",
  },
  linkedin: {
    url: "https://www.linkedin.com/in/mikiyas-birhanu-845690385",
    label: "linkedin.com/in/mikiyas-birhanu-845690385",
  },
  email: {
    address: "michaellomran@gmail.com",
    mailto: "mailto:michaellomran@gmail.com",
  },
};

export const profileData = {
  name: "Mikiyas Birhanu",
  roleTitle: "IT Graduate • Software Developer • Web & Decision Systems",
  tagline: "I build software, explore intelligent decision systems, and solve problems with technology.",
  shortBio:
    "Information Technology graduate from Bahir Dar University building practical software projects and exploring explainable decision systems, modern web development, and defensive cybersecurity fundamentals.",
  location: "Ethiopia (Addis Ababa / Bahir Dar)",
  email: contactConfig.email.address,
  githubUrl: contactConfig.github.url,
  linkedinUrl: contactConfig.linkedin.url,
  contact: contactConfig,
  status: {
    badge: "CURRENTLY BUILDING",
    currentFocus: "Web Development • Decision Systems • Cybersecurity",
    availability: "Open to Software Developer & Technical Roles",
  },
  cvPath: "/assets/Mikiyas_Birhanu_Resume.pdf",
  about: {
    lead: "I'm an IT graduate and software developer interested in building practical software and exploring AI, automation, and cybersecurity.",
    paragraphs: [
      "Rather than settling for surface-level tutorials, I believe in deepening my understanding by building functional projects. My work centers on implementing clean web applications, developing rule-based decision logic, and exploring core networking and security concepts.",
      "For my final-year capstone project at Bahir Dar University, I developed an explainable rule-based career guidance system to assist pre-engineering students in evaluating Computing versus Engineering divisions using transparent criteria rather than opaque models.",
      "I am actively growing my technical capabilities: solidifying my frontend and backend foundations, practicing task automation, and learning how systems operate from the ground up.",
    ],
    highlights: [
      {
        label: "Graduation Background",
        value: "B.Sc. in Information Technology",
        detail: "Bahir Dar Institute of Technology (BiT)",
      },
      {
        label: "Engineering Ethos",
        value: "Pragmatic & Clean Code",
        detail: "Working software beats abstract speculation",
      },
      {
        label: "Technical Focus",
        value: "Decision Systems & Web Dev",
        detail: "Rule-based logic & responsive interfaces",
      },
      {
        label: "Security Interest",
        value: "Cybersecurity Fundamentals",
        detail: "Network analysis, protocols & defensive concepts",
      },
    ],
  },
  beyondCode: {
    f1: {
      title: "Formula 1 & Precision Engineering",
      quote: "To finish first, first you must finish.",
      description:
        "Fascinated by aerodynamic efficiency, millisecond pit stop synchronization, and the fusion of real-time sensor data with tactical race strategy under extreme constraints.",
      traits: ["Tactical Strategy", "Iterative Optimization", "Fail-safe Reliability"],
    },
    photography: {
      title: "Visual Framing & Observation",
      description:
        "Composition, geometry, and lighting discipline. Viewing software interface design and system architecture through the same lens of balance, contrast, and intentional focus.",
      metadataTags: ["ISO 100", "35mm Prime", "f/1.8 Aperture", "1/500s Shutter"],
    },
  },
};
