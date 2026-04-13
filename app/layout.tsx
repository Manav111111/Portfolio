import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Manav Gupta - Full Stack AI Developer",
  description: "Full Stack Developer specializing in Web Development, App Development, and AI-powered applications. Freelancing and building intelligent solutions.",
  keywords: [
    "Manav Gupta",
    "Full Stack Developer",
    "AI Developer",
    "Web Developer",
    "App Developer",
    "React Developer",
    "Next.js Developer",
    "Freelancer",
    "AI Applications",
    "Portfolio",
  ],
  authors: [{ name: "Manav Gupta" }],
  creator: "Manav Gupta",
  publisher: "Manav Gupta",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Manav Gupta - Full Stack AI Developer",
    description: "Full Stack Developer specializing in Web Development, App Development, and AI-powered applications.",
    siteName: "Manav Gupta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manav Gupta - Full Stack AI Developer",
    description: "Full Stack Developer specializing in Web Development, App Development, and AI-powered applications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
