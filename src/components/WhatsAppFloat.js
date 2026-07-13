import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-brand text-night shadow-lg shadow-brand/30 transition hover:scale-105 hover:bg-rose"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}
