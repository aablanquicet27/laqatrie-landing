"use client";

import { motion } from "framer-motion";

export default function MissionSection() {
  return (
    <section id="nosotros" className="bg-[#FFF8F0] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p
              className="mb-6 text-lg italic text-[#2B6E63] md:text-xl"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Nuestra misión
            </p>
            <h2
              className="mb-8 text-3xl font-bold leading-tight text-[#1a1a1a] md:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Celebramos el buen comer
            </h2>
            <p className="text-base leading-relaxed text-[#1a1a1a]/70 md:text-lg">
              A través de desayunos artesanales y recetas de la abuela,
              combinamos ingredientes frescos del Valle del Cauca con técnicas
              tradicionales para crear la experiencia perfecta que nutre
              momentos que importan. Cada plato es una celebración de nuestra
              tierra, preparado con el amor y la dedicación que nos caracteriza
              desde el primer día.
            </p>
          </motion.div>

          {/* Rotating sticker */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center justify-center"
          >
            <div
              className="relative flex h-64 w-64 items-center justify-center md:h-80 md:w-80"
              style={{ animation: "spin-slow 20s linear infinite" }}
            >
              {/* Circular badge */}
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
                  stroke="#2B6E63"
                  strokeWidth="2"
                  opacity="0.3"
                />
                <text
                  fill="#2B6E63"
                  fontSize="16"
                  fontWeight="600"
                  letterSpacing="6"
                >
                  <textPath href="#circlePath" startOffset="0%">
                    CELEBREMOS • EL BUEN COMER • LA QATRIE • CALI •
                  </textPath>
                </text>
              </svg>
              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="text-center"
                  style={{
                    animation: "spin-slow 20s linear infinite reverse",
                  }}
                >
                  <span
                    className="block text-3xl font-bold text-[#2B6E63] md:text-4xl"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    LQ
                  </span>
                  <span className="mt-1 block text-xs tracking-widest text-[#2B6E63]/60 uppercase">
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
