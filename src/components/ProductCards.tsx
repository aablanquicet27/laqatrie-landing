"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    name: "Desayunos",
    description: "Empezá el día con energía",
    gradient: "from-[#2B6E63] to-[#1D4E46]",
  },
  {
    name: "Sopas",
    description: "Tradición en cada cucharada",
    gradient: "from-[#D4A574] to-[#b8895a]",
  },
  {
    name: "Jugos Naturales",
    description: "Frescura tropical del Valle",
    gradient: "from-[#4a9e8f] to-[#2B6E63]",
  },
  {
    name: "Brunch",
    description: "Para compartir en familia",
    gradient: "from-[#1D4E46] to-[#0f2e29]",
  },
];

export default function ProductCards() {
  return (
    <section id="menu" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2
            className="mb-4 text-4xl font-bold text-[#1a1a1a] md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Nuestras{" "}
            <span className="italic text-[#D4A574]">delicias</span>
          </h2>
          <p className="mx-auto max-w-xl text-base text-[#1a1a1a]/60 md:text-lg">
            Descubrí todo lo que tenemos para vos. Cada plato, preparado con
            los mejores ingredientes y mucho amor.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="perspective"
            >
              <div className="flip-card h-[340px] w-full cursor-pointer md:h-[380px]">
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-front overflow-hidden rounded-2xl">
                    <div
                      className={`flex h-full w-full flex-col items-center justify-end bg-gradient-to-b ${product.gradient} p-8`}
                    >
                      {/* Decorative circle */}
                      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-white/20">
                        <span
                          className="text-2xl font-bold text-white"
                          style={{
                            fontFamily: "var(--font-playfair), serif",
                          }}
                        >
                          {product.name.charAt(0)}
                        </span>
                      </div>
                      <h3
                        className="text-xl font-bold text-white md:text-2xl"
                        style={{
                          fontFamily: "var(--font-playfair), serif",
                        }}
                      >
                        {product.name}
                      </h3>
                      <div className="mt-3 h-0.5 w-12 bg-white/30" />
                    </div>
                  </div>

                  {/* Back */}
                  <div className="flip-card-back overflow-hidden rounded-2xl">
                    <div className="flex h-full w-full flex-col items-center justify-center bg-[#2B6E63] p-8 text-center">
                      <h3
                        className="mb-3 text-2xl font-bold text-white md:text-3xl"
                        style={{
                          fontFamily: "var(--font-playfair), serif",
                        }}
                      >
                        {product.name}
                      </h3>
                      <p className="mb-6 text-sm text-white/70">
                        {product.description}
                      </p>
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#D4A574] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#c49564]">
                        Ver más
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <Link
            href="#menu"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#2B6E63] px-8 py-3.5 text-sm font-semibold text-[#2B6E63] transition-all hover:bg-[#2B6E63] hover:text-white"
          >
            Ver los productos
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
