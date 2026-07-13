"use client";

import { useState } from "react";
import products from "@/data/products.json";
import ProductCard from "./ProductCard";

const categories = [
  { id: "todos", label: "Todos" },
  { id: "juguetes", label: "Juguetes" },
  { id: "geles", label: "Geles & aceites" },
  { id: "bienestar", label: "Bienestar" },
  { id: "combos", label: "Combos" },
];

export default function ProductGrid() {
  const [active, setActive] = useState("todos");

  const visible =
    active === "todos"
      ? products
      : products.filter((product) => product.category === active);

  return (
    <section id="catalogo" className="scroll-mt-20 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-rose">
            Catálogo
          </p>
          <h2 className="mt-4 font-serif text-3xl text-cream sm:text-4xl">
            Productos seleccionados
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-mist">
            Todo nuevo, sellado y de excelente calidad. Ideal para uso personal
            o para regalar.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActive(category.id)}
              className={`cursor-pointer rounded-full px-4 py-2 text-xs font-medium transition ${
                active === category.id
                  ? "bg-brand text-night"
                  : "border border-white/10 text-mist hover:border-white/25 hover:text-cream"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
