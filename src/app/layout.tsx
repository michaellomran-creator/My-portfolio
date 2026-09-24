import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mikiyas Birhanu — Software Developer | AI & Cybersecurity",
  description:
    "Portfolio of Mikiyas Birhanu, an IT graduate from Bahir Dar University (Ethiopia), practical software developer building explainable AI systems, workflow automation, and defensive cybersecurity solutions.",
  keywords: [
    "Mikiyas Birhanu",
    "Software Developer",
    "AI Engineer",
    "Cybersecurity",
    "Automation",
    "Bahir Dar University",
    "BiT",
    "Ethiopia",
    "Python",
    "TypeScript",
    "Rule-Based AI",
  ],
  authors: [{ name: "Mikiyas Birhanu" }],
  creator: "Mikiyas Birhanu",
  metadataBase: new URL("https://my-portfolio-tau-nine-66.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://my-portfolio-tau-nine-66.vercel.app",
    title: "Mikiyas Birhanu — Software Developer | AI & Cybersecurity",
    description:
      "IT graduate from Bahir Dar University building practical software, explainable AI systems, and defensive cybersecurity solutions.",
    siteName: "Mikiyas Birhanu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mikiyas Birhanu — Software Developer | AI & Cybersecurity",
    description:
      "IT graduate from Bahir Dar University building practical software, explainable AI systems, and defensive cybersecurity solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#060E18",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-space-950 text-text-primary antialiased min-h-screen selection:bg-neon-blue selection:text-white">
        {children}
      </body>
    </html>
  );
}
