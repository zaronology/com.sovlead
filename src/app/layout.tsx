import { Inter, Cinzel, Lora } from "next/font/google";
import { JsonLd, JsonWebLd } from "@/components/global/JsonLd";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import "@/assets/css/globals.css";

import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cinzel",
  display: "swap",
});

export const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  referrer: "origin-when-cross-origin",
  other: {
    subject: "Leadership systems for people responsible for outcomes",
    topic:
      "Authority, Decision Making, Responsibility, Boundaries, Accountability",
    summary:
      "Leadership systems for people who carry responsibility for outcomes at work, at home, and in the world.",
    classification: "Business/Leadership/Personal Authority",
    target: "People responsible for outcomes",
    coverage: "Global",
    distribution: "Global",
    rating: "General",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sovereign Leadership",
    url: "https://sovlead.com",
    logo: "https://sovlead.com/sl-logo-icon.png",
    description:
      "Leadership systems for people responsible for outcomes — in business, family, and life.",
    audience: {
      "@type": "Audience",
      audienceType: "People responsible for outcomes",
      description:
        "Individuals who carry responsibility for revenue, teams, families, and the continuity of the systems they lead.",
    },
    defined_term: {
      "@type": "DefinedTerm",
      "@id": "https://sovlead.com/#leaders-who-own-the-outcome",
      name: "Leaders Who Own the Outcome",
      description:
        "Leaders who carry ownership for forward motion and consequence—financially, relationally, and socially—without outsourcing responsibility when pressure rises.",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sovereign Leadership",
    url: "https://sovlead.com",
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${cinzel.variable} ${lora.variable}`}
    >
      <body className="font-sans bg-white text-blue antialiased text-pure">
        <JsonLd data={organizationJsonLd} />
        <JsonWebLd data={websiteJsonLd} />
        <main id="main-content">
          <Navbar />
          {children}
          <Footer />
        </main>
        <GoogleAnalytics gaId="G-VV1XDZNCLC" />
      </body>
    </html>
  );
}
