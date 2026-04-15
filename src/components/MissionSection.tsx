"use client";

import { motion } from "framer-motion";

const fontDisplay = { fontFamily: "var(--font-display)" };
const slideLeft = { opacity: 0, x: -40 };
const slideRight = { opacity: 0, x: 40, scale: 0.95 };
const visibleSlide = { opacity: 1, x: 0 };
const visibleScale = { opacity: 1, x: 0, scale: 1 };
const slowTransition = { duration: 0.8 };
const viewOnce = { once: true, margin: "-100px" };

export default function MissionSection() {
  return (
    <section id="nosotros" className="bg-[#FAF5EE] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={slideLeft}
            whileInView={visibleSlide}
            transition={slowTransition}
            viewport={viewOnce}
          >
            <p
              className="mb-6 text-lg italic text-[#1B2A4A] md:text-xl"
              style={fontDisplay}
            >
              Nuestra mision
            </p>
            <h2
              className="mb-8 text-3xl font-bold leading-tight text-[#1a1a1a] md:text-4xl lg:text-5xl"
              style={fontDisplay}
            >
              Celebramos el buen comer
            </h2>
            <p className="text-base leading-relaxed text-[#1a1a1a]/70 md:text-lg">
              A traves de desayunos artesanales y recetas de la abuela,
              combinamos ingredientes frescos del Valle del Cauca con tecnicas
              tradicionales para crear la experiencia perfecta que nutre
              momentos que importan. Cada plato es una celebracion de nuestra
              tierra, preparado con el amor y la dedicacion que nos caracteriza
              desde el primer dia.
            </p>
          </motion.div>

          <motion.div
            initial={slideRight}
            whileInView={visibleScale}
            transition={slowTransition}
            viewport={viewOnce}
            className="flex items-center justify-center"
          >
            <div
              className="relative flex h-64 w-64 items-center justify-center md:h-80 md:w-80"
              style= animation: "spin-slow 20s linear infinite" 
            >
              <svg viewBox="0 0 300 300" className="h-full w-full">
                <defs>
                  <path
                    id="circlePath"
                    d="M 150, 150 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
                  />
                </defs>
                <circle
                  cx="150"
                  cy="150"
                  r="140"
                  fill="none"
                  stroke="#1B2A4A"
                  strokeWidth="2"
                  opacity="0.3"
                />
                <text
                  fill="#1B2A4A"
                  fontSize="16"
                  fontWeight="600"
                  letterSpacing="6"
                >
                  <textPath href="#circlePath" startOffset="0%">
                    CELEBREMOS - EL BUEN COMER - LA QATRIE - CALI -
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="text-center"
                  style= animation: "spin-slow 20s linear infinite reverse" 
                >
                  <span
                    className="block text-3xl font-bold text-[#1B2A4A] md:text-4xl"
                    style={fontDisplay}
                  >
                    LQ
                  </span>
                  <span className="mt-1 block text-xs tracking-widest text-[#1B2A4A]/60 uppercase">
                    est. 2024
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
