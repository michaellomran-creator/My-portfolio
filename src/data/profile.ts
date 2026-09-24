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
  roleTitle: "Software Developer • AI & Automation Enthusiast • Aspiring Cybersecurity Professional",
  tagline: "I build software, explore AI, and solve problems with technology.",
  shortBio:
    "Information Technology graduate from Bahir Dar University building practical software while engineering explainable AI systems, automated workflows, and robust security practices. Focused on real systems that deliver tangible value.",
  location: "Ethiopia (Addis Ababa / Bahir Dar)",
  email: contactConfig.email.address,
  githubUrl: contactConfig.github.url,
  linkedinUrl: contactConfig.linkedin.url,
  contact: contactConfig,
  status: {
    badge: "CURRENTLY BUILDING",
    currentFocus: "AI • Automation • Software • Cybersecurity",
    availability: "Open to Software Engineering, AI & Technical Roles",
  },
  cvPath: "/assets/Mikiyas_Birhanu_Resume.pdf",
  about: {
    lead: "I am an IT graduate and practical software developer driven by how digital systems operate under the hood.",
    paragraphs: [
      "Instead of settling for surface-level tutorials, I believe in learning by constructing functional systems. My work spans building full-stack web applications, architecting rule-based intelligent decision systems, and exploring network security patterns.",
      "My final-year capstone project at Bahir Dar University addressed an acute real-world challenge: guiding pre-engineering students toward computing versus classical engineering tracks using transparent, explainable decision matrices rather than opaque black-box models.",
      "I am deliberately disciplined with my technical path: developing rock-solid foundations in modern software architecture, exploring pragmatic AI & automation, and sharpening defensive cybersecurity instincts.",
    ],
    highlights: [
      {
        label: "Graduation Background",
        value: "B.Sc. in Information Technology",
        detail: "Bahir Dar Institute of Technology (BiT)",
      },
      {
        label: "Core Engineering Ethos",
        value: "Pragmatism & Clean Architecture",
        detail: "Working code beats abstract speculation",
      },
      {
        label: "Current Specialization",
        value: "AI Systems & Automation",
        detail: "Decision engines, API workflows & pipelines",
      },
      {
        label: "Security Focus",
        value: "Defensive & Systems Security",
        detail: "Network analysis, vulnerability assessment",
      },
    ],
  },
  beyondCode: {
    f1: {
      title: "Formula 1 & Precision Engineering",
      quote: "To finish first, first you must finish.",
      description:
        "Fascinated by aerodynamic telemetry, millisecond pit stop synchronization, and the fusion of high-frequency sensor data with tactical race strategy under extreme constraints.",
      traits: ["Real-time Telemetry", "Iterative Optimization", "Fail-safe Reliability"],
    },
    photography: {
      title: "Visual Framing & Observation",
      description:
        "Composition, geometry, and lighting discipline. Viewing software interface design and system architecture through the same lens of balance, contrast, and intentional focus.",
      metadataTags: ["ISO 100", "35mm Prime", "f/1.8 Aperture", "1/500s Shutter"],
    },
  },
};
