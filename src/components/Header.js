"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SITE, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

const links = [
  { href: "#catalogo", label: "Catálogo" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-night/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/brand/logo.jpg"
            alt={`Logo de ${SITE.name}`}
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
          <span className="font-serif text-lg tracking-wide text-cream">
            {SITE.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-mist transition hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-night transition hover:bg-rose"
        >
          <WhatsAppIcon />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
