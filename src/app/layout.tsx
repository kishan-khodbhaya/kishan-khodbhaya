import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://kishan-khodbhaya.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kishan Khodbhaya — AI Automation Engineer & Python Backend Developer",
    template: "%s | Kishan Khodbhaya",
  },
  description:
    "AI Automation Engineer & Python Backend Developer specializing in multi-agent systems, voice AI, n8n workflows, and production REST APIs. Building intelligent automation infrastructure that replaces manual operations.",
  keywords: [
    "AI Automation Engineer",
    "Python Backend Developer",
    "Multi-Agent Systems",
    "n8n Automation",
    "Voice AI",
    "WhatsApp Automation",
    "REST API Developer",
    "AI Agent Orchestration",
    "Flask Developer",
    "FastAPI",
    "LLM Integration",
    "Pinecone",
    "Gemini AI",
    "Production Systems Engineer",
  ],
  authors: [{ name: "Kishan Khodbhaya", url: siteUrl }],
  creator: "Kishan Khodbhaya",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Kishan Khodbhaya — Portfolio",
    title: "Kishan Khodbhaya — AI Automation Engineer & Python Backend Developer",
    description:
      "Building AI-driven automation systems — multi-agent orchestration, voice AI pipelines, and production backend infrastructure.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kishan Khodbhaya — AI Automation Engineer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kishan Khodbhaya — AI Automation Engineer",
    description:
      "Building AI-driven automation systems — multi-agent orchestration, voice AI, and production infrastructure.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kishan Khodbhaya",
              url: siteUrl,
              jobTitle: "AI Automation Engineer & Python Backend Developer",
              description:
                "Building AI-driven automation systems — multi-agent orchestration, voice AI pipelines, and production backend infrastructure.",
              sameAs: [
                "https://github.com/kishan-khodbhaya",
                "https://linkedin.com/in/kishan-khodbhaya",
              ],
              knowsAbout: [
                "AI Agent Orchestration",
                "Python",
                "Flask",
                "FastAPI",
                "n8n",
                "Multi-Agent Systems",
                "Voice AI",
                "REST API Development",
                "WhatsApp Automation",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrains.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
