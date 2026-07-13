"use client";

import { useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "@/lib/site";

const STORAGE_KEY = "pi-age-verified";

const subscribe = () => () => {};

export default function AgeGate() {
  const [dismissed, setDismissed] = useState(false);
  // En el servidor se asume verificado para no renderizar el modal en el HTML;
  // el cliente relee sessionStorage apenas hidrata.
  const verified = useSyncExternalStore(
    subscribe,
    () => sessionStorage.getItem(STORAGE_KEY) === "1",
    () => true
  );
  const visible = !verified && !dismissed;

  function accept() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setDismissed(true);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-night/90 px-6 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Verificación de edad"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="w-full max-w-sm rounded-2xl border border-white/10 bg-ink p-8 text-center shadow-2xl shadow-brand/10"
          >
            <Image
              src="/brand/logo.jpg"
              alt={`Logo de ${SITE.name}`}
              width={72}
              height={72}
              className="mx-auto rounded-full"
            />
            <h2 className="mt-5 font-serif text-2xl text-cream">
              ¿Sos mayor de 18?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-mist">
              Este sitio contiene productos para adultos. Para continuar,
              confirmá que tenés al menos 18 años.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <button
                onClick={accept}
                className="cursor-pointer rounded-full bg-brand px-6 py-3 text-sm font-semibold text-night transition hover:bg-rose"
              >
                Sí, soy mayor de 18
              </button>
              <a
                href="https://www.google.com"
                className="rounded-full border border-white/15 px-6 py-3 text-sm text-mist transition hover:border-white/30 hover:text-cream"
              >
                No, salir del sitio
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
