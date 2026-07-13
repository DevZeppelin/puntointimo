"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Entrega discreta",
    text: "Tu pedido llega en paquete neutro, sin logos ni referencias. Compra 100% confidencial, de principio a fin.",
  },
  {
    title: "Envíos",
    text: "Envío gratis en Gran Mendoza (consultar zonas) y envíos a todo el país. Pedidos con anticipación.",
  },
  {
    title: "Calidad garantizada",
    text: "Productos nuevos, sellados y 100% originales de marcas reconocidas como Sexitive y Pretty Love.",
  },
  {
    title: "Atención personalizada",
    text: "Te asesoramos sin compromiso por WhatsApp para que elijas lo que mejor va con vos.",
  },
];

export default function ValueProps() {
  return (
    <section id="nosotros" className="scroll-mt-20 bg-ink/60 px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-rose">
            Nosotros
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-snug text-cream sm:text-4xl">
            Una nueva forma de bienestar
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-mist">
            En Punto Íntimo creemos en el placer consciente: productos elegidos
            con cuidado, información clara y una experiencia de compra tan
            discreta como vos la necesités. También tenemos balas vibratorias,
            copas menstruales Real Cup, preservativos y accesorios — consultanos
            por el stock completo.
          </p>

          <dl className="mt-10 grid gap-8 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title}>
                <dt className="flex items-center gap-2 text-sm font-semibold text-cream">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-brand"
                  />
                  {pillar.title}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-mist">
                  {pillar.text}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl border border-white/5"
        >
          <Image
            src="/brand/stock.png"
            alt="Productos reales de Punto Íntimo: vibradores, lubricantes, copas menstruales y preservativos, todos nuevos y sellados"
            width={976}
            height={629}
            className="h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-night/60 via-transparent to-transparent"
          />
          <p className="absolute bottom-4 left-5 text-xs uppercase tracking-[0.2em] text-cream/80">
            Stock real · Productos sellados
          </p>
        </motion.div>
      </div>
    </section>
  );
}
