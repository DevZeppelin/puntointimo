"use client";

import { motion } from "framer-motion";
import { SITE, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

const badges = [
  "Envío gratis en Gran Mendoza",
  "Paquete neutro y discreto",
  "Compra 100% confidencial",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-36 sm:px-8 sm:pt-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(236,72,153,0.18),transparent)]"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-xs uppercase tracking-[0.35em] text-rose"
        >
          {SITE.motto}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mt-6 font-serif text-4xl leading-tight text-cream sm:text-6xl"
        >
          Descubrí una nueva forma de{" "}
          <em className="text-brand not-italic sm:italic">disfrutar</em> y
          cuidarte
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg"
        >
          {SITE.tagline}. Productos seleccionados, nuevos y sellados, con
          atención personalizada y 100% discreta.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#catalogo"
            className="w-full rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-night transition hover:bg-rose sm:w-auto"
          >
            Ver catálogo
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-sm font-medium text-cream transition hover:border-brand hover:text-brand sm:w-auto"
          >
            <WhatsAppIcon />
            Consultar por WhatsApp
          </a>
        </motion.div>

        <motion.ul
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {badges.map((badge) => (
            <li
              key={badge}
              className="flex items-center gap-2 text-xs text-mist"
            >
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-brand" />
              {badge}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
