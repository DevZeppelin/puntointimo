export const SITE = {
  name: "Punto Íntimo",
  tagline: "Bienestar íntimo & placer consciente",
  motto: "Placer · Calidad · Discreción",
  phoneDisplay: "261 513-9104",
  whatsapp: "5492615139104",
};

export function waLink(message) {
  const text = message || `Hola ${SITE.name} 👋 Quiero hacer una consulta.`;
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function waProductLink(productName) {
  return waLink(
    `Hola ${SITE.name} 👋 Quiero consultar precio y stock de: ${productName}`
  );
}
