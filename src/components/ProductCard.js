"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { waProductLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export default function ProductCard({ product, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-ink transition-colors duration-300 hover:border-brand/40"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[11px] uppercase tracking-[0.2em] text-rose">
          {product.tagline}
        </p>
        <h3 className="mt-2 font-serif text-xl text-cream">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-mist">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="text-xs text-mist">Consultá precio y stock</span>
          <a
            href={waProductLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-2 rounded-full bg-brand/10 px-4 py-2 text-xs font-semibold text-brand transition hover:bg-brand hover:text-night"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            Consultar
          </a>
        </div>
      </div>
    </motion.article>
  );
}
