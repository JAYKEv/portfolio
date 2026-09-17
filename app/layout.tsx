import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LenisProvider } from "@/components/LenisProvider";
import { DottedGlowBackground } from "@/components/DottedGlowBackground";
import { content } from "@/lib/content";
import { cn } from "@/lib/utils";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jaykumarkevadiya.netlify.app"),
  title: {
    default: `${content.personal.name} | ${content.personal.role}`,
    template: `%s | ${content.personal.name}`,
  },
  description: content.personal.subtext,
  keywords: [
    "Jaykumar Kevadiya",
    "Software Engineer",
    "Full-Stack Developer",
    "Backend Developer",
    "Distributed Systems",
    "React",
    "Node.js",
    "Python",
    "Toronto",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${content.personal.name} | ${content.personal.role}`,
    description: content.personal.subtext,
    type: "website",
    locale: "en_CA",
    siteName: content.personal.name,
    url: "https://jaykumarkevadiya.netlify.app",
  },
  twitter: {
    card: "summary_large_image",
    title: `${content.personal.name} | ${content.personal.role}`,
    description: content.personal.subtext,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
  },
};

const themeScript = `try { const saved = localStorage.getItem('theme'); const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches; const isDark = saved ? saved === 'dark' : prefersDark; document.documentElement.classList.toggle('dark', isDark); } catch (error) {}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(serif.variable, mono.variable, sans.variable, "font-sans")}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="relative min-h-screen bg-[rgb(var(--background))] font-sans text-[rgb(var(--foreground))] antialiased selection:bg-[rgb(var(--accent)/0.25)]">
        <ThemeProvider>
          <LenisProvider>
            <DottedGlowBackground />
            <div className="relative z-10 flex min-h-screen flex-col">
              {children}
            </div>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
