"use client";

import { motion } from "framer-motion";
import { SITE, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_110%,rgba(236,72,153,0.15),transparent)]"
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto max-w-2xl text-center"
      >
        <h2 className="font-serif text-3xl leading-snug text-cream sm:text-5xl">
          Consultá sin compromiso
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-mist sm:text-base">
          Escribinos por WhatsApp y te asesoramos. Agendanos para recibir
          promos privadas y descuentos exclusivos.
        </p>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex items-center gap-3 rounded-full bg-brand px-9 py-4 text-sm font-semibold text-night transition hover:bg-rose"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Escribir al {SITE.phoneDisplay}
        </a>
        <p className="mt-5 text-xs text-mist">
          Pedidos con anticipación · Stock limitado
        </p>
      </motion.div>
    </section>
  );
}
