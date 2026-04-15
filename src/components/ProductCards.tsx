"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    name: "Desayunos",
    description: "Empeza el dia con energia",
    gradient: "from-[#1B2A4A] to-[#0F1D35]",
  },
  {
    name: "Sopas",
    description: "Tradicion en cada cucharada",
    gradient: "from-[#C8A882] to-[#a8885a]",
  },
  {
    name: "Jugos Naturales",
    description: "Frescura tropical del Valle",
    gradient: "from-[#2D4A7A] to-[#1B2A4A]",
  },
  {
    name: "Brunch",
    description: "Para compartir en familia",
    gradient: "from-[#0F1D35] to-[#0A1428]",
  },
];

const fadeIn = { opacity: 0 };
const fadeUp = { opacity: 0, y: 30 };
const visible = { opacity: 1, y: 0 };
const visibleFade = { opacity: 1 };
const fontDisplay = { fontFamily: "var(--font-display)" };
const fontBody = { fontFamily: "var(--font-body)" };
const viewOnce = { once: true, margin: "-100px" };
const viewAlways = { once: true };

export default function ProductCards() {
  return (
    <section id="menu" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={fadeIn}
          whileInView={visibleFade}
          transition= duration: 0.6 
          viewport={viewOnce}
          className="mb-16 text-center"
        >
          <h2
            className="mb-4 text-4xl font-bold text-[#1a1a1a] md:text-5xl lg:text-6xl"
            style={fontDisplay}
          >
            Nuestras{" "}
            <span className="italic text-[#C8A882]">delicias</span>
          </h2>
          <p className="mx-auto max-w-xl text-base text-[#1a1a1a]/60 md:text-lg">
            Descubri todo lo que tenemos para vos. Cada plato, preparado con
            los mejores ingredientes y mucho amor.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={fadeUp}
              whileInView={visible}
              transition= duration: 0.6, delay: index * 0.1 
              viewport={viewOnce}
              className="perspective"
            >
              <div className="flip-card h-[340px] w-full cursor-pointer md:h-[380px]">
                <div className="flip-card-inner">
                  <div className="flip-card-front overflow-hidden rounded-2xl">
                    <div
                      className={`flex h-full w-full flex-col items-center justify-end bg-gradient-to-b ${product.gradient} p-8`}
                    >
                      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-white/20">
                        <span
                          className="text-2xl font-bold text-white"
                          style={fontDisplay}
                        >
                          {product.name.charAt(0)}
                        </span>
                      </div>
                      <h3
                        className="text-xl font-bold text-white md:text-2xl"
                        style={fontBody}
                      >
                        {product.name}
                      </h3>
                      <div className="mt-3 h-0.5 w-12 bg-white/30" />
                    </div>
                  </div>

                  <div className="flip-card-back overflow-hidden rounded-2xl">
                    <div className="flex h-full w-full flex-col items-center justify-center bg-[#1B2A4A] p-8 text-center">
                      <h3
                        className="mb-3 text-2xl font-bold text-white md:text-3xl"
                        style={fontBody}
                      >
                        {product.name}
                      </h3>
                      <p className="mb-6 text-sm text-white/70">
                        {product.description}
                      </p>
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#C8A882] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#b89872]">
                        Ver mas
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={fadeIn}
          whileInView={visibleFade}
          transition= duration: 0.6, delay: 0.4 
          viewport={viewAlways}
          className="mt-14 text-center"
        >
          <Link
            href="#menu"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#1B2A4A] px-8 py-3.5 text-sm font-semibold text-[#1B2A4A] transition-all hover:bg-[#1B2A4A] hover:text-white"
          >
            Ver los productos
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
