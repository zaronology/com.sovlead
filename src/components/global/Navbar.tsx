"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/images/SL-logo-horizontial-w.webp";

type NavItem = { label: string; href: string };

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  // { label: "Authority Systems", href: "/authority" },
  { label: "Insights", href: "/insights" },
  // { label: "The Foundry", href: "/the-foundry" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  // Close on Escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Close when clicking outside drawer
  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (!open) return;
      const target = e.target as Node;
      if (drawerRef.current && !drawerRef.current.contains(target)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [open]);

  // Prevent background scroll when open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close drawer if user resizes up to desktop (1024px for standard Tailwind 'lg')
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* 1. OUTER WRAPPER: Full width background */}
      <header className="sticky top-0 z-50 w-full border-b border-rust/20 bg-blue backdrop-blur">
        {/* 2. INNER WRAPPER: Matches the exact 'container px-6' as the rest of the site */}
        <div className="mx-auto container px-6 flex h-[80px] items-center justify-between">
          {/* Logo aligned to the absolute left grid line */}
          <Link href="/" className="inline-flex items-center">
            <div className="relative w-[180px] h-[40px]">
              <Image
                src={logoImg}
                alt="Sovereign Leadership Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop nav (>= 1024px) */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-bold uppercase tracking-wider text-pure/80 hover:text-rust transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger (< 1024px) aligned to the absolute right grid line */}
          <button
            type="button"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-pure/20 text-pure hover:bg-pure/10 transition"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <HamburgerIcon />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div ref={drawerRef} className="h-full flex flex-col">
          <div className="flex h-[80px] items-center justify-between border-b border-gray-100 px-6">
            <Link
              href="/"
              className="text-sm font-bold tracking-widest uppercase text-blue"
              onClick={() => setOpen(false)}
            >
              Sovereign Leadership
            </Link>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-blue hover:bg-gray-50 transition"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <XIcon />
            </button>
          </div>

          <nav className="flex flex-col gap-2 p-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-4 py-3 text-base font-bold uppercase tracking-wider text-blue/80 hover:bg-gray-50 hover:text-blue transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}

function HamburgerIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M6 6l12 12" />
      <path d="M18 6l-12 12" />
    </svg>
  );
}
