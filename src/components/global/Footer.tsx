import React from "react";
import Link from "next/link";
import Image from "next/image";
// Replace with your actual logo path
import logoImg from "@/assets/images/SL-logo-horizontial-w.webp";

const company_name = "Sovereign Leadership LLC";

interface FooterLink {
  label: string;
  href: string;
}

const navLinks: FooterLink[] = [
  { label: "The Program", href: "/program" },
  { label: "Our Story", href: "/about" },
  { label: "The Foundry", href: "/foundry" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks: FooterLink[] = [
  { label: "Articles", href: "/blog" },
  { label: "Workshops", href: "/workshops" },
  { label: "Case Studies", href: "/cases" },
  { label: "FAQ", href: "/faq" },
];

const disclosureLinks: FooterLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
  { label: "AI Integrity", href: "/ai-integrity" },
  { label: "Acceptable Use", href: "/acceptable-use-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-blue text-white/80 pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo & Description Column */}
          <div className="md:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src={logoImg}
                alt="Company Logo"
                width={260}
                className=""
              />
            </Link>
            <p className="text-sm md:text-base leading-relaxed max-w-sm">
              Sovereign Leadership is the ability to stay oriented under
              pressure, see clearly when everything's chaos, hold your direction
              when urgency pulls you off course, and discharge pressure instead
              of absorbing it.
            </p>
          </div>

          {/* Link Column 1 */}
          {/* <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Link Column 2 */}
          {/* <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">
              Resources
            </h4>
            <ul className="flex flex-col gap-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Divider */}
        <hr className="border-white/10 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-xs tracking-wide">
          <p>©2025 & beyond. {company_name}. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {disclosureLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors underline decoration-white/20 underline-offset-4"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
