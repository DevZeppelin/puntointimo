import Image from "next/image";
import { SITE, waLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer id="contacto" className="scroll-mt-20 border-t border-white/5 px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/logo.jpg"
              alt={`Logo de ${SITE.name}`}
              width={44}
              height={44}
              className="rounded-full"
            />
            <div>
              <p className="font-serif text-lg text-cream">{SITE.name}</p>
              <p className="text-xs uppercase tracking-[0.25em] text-rose">
                {SITE.motto}
              </p>
            </div>
          </div>

          <div className="text-sm text-mist">
            <p>
              WhatsApp:{" "}
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream transition hover:text-brand"
              >
                {SITE.phoneDisplay}
              </a>
            </p>
            <p className="mt-1">Gran Mendoza, Argentina · Envíos a todo el país</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 border-t border-white/5 pt-8 text-center text-xs text-mist/70 sm:flex-row sm:justify-between">
          <p>
            <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-mist/40 align-middle text-[10px] font-bold">
              18+
            </span>
            Sitio exclusivo para mayores de 18 años.
          </p>
          <p>
            © {new Date().getFullYear()} {SITE.name}. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
