import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  // TODO: reemplazar por el dominio real al publicar
  metadataBase: new URL("https://puntointimo.vercel.app"),
  title: `${SITE.name} — ${SITE.tagline}`,
  description:
    "Sex shop boutique en Mendoza. Juguetes, lubricantes y bienestar íntimo. Productos nuevos y sellados, entrega discreta en paquete neutro y envío gratis en Gran Mendoza. Consultá por WhatsApp.",
  keywords: [
    "sex shop Mendoza",
    "juguetes íntimos",
    "lubricantes",
    "bienestar íntimo",
    "envío discreto",
  ],
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "Productos seleccionados, atención personalizada y entrega 100% discreta. Envío gratis en Gran Mendoza. Consultá sin compromiso por WhatsApp.",
    type: "website",
    locale: "es_AR",
    siteName: SITE.name,
    images: [{ url: "/brand/og.png", width: 633, height: 433 }],
  },
  other: {
    rating: "adult",
  },
};

export const viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
