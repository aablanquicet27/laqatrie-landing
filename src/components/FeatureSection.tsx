"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FeatureSection() {
  return (
    <section className="overflow-hidden bg-[#FFF8F0] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/assets/hero-pandebono.jpg"
                alt="Pandebono recién horneado"
                width={600}
                height={700}
                className="h-[400px] w-full object-cover md:h-[500px] lg:h-[550px]"
              />
            </div>

            {/* Floating sticker */}
            <div
              className="absolute -right-4 -bottom-4 z-10 flex h-28 w-28 items-center justify-center rounded-full bg-[#D4A574] shadow-xl md:-right-8 md:-bottom-8 md:h-36 md:w-36"
              style={{ animation: "float 3s ease-in-out infinite" }}
            >
              <span
                className="text-center text-sm font-bold leading-tight text-white md:text-base"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Recién
                <br />
                horneado
              </span>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="mb-2 text-lg font-light tracking-wide text-[#1a1a1a]/50">
              El
            </p>
            <h2
              className="mb-6 text-5xl font-bold text-[#1a1a1a] md:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Pandebono
            </h2>
            <p
              className="mb-8 text-3xl italic text-[#D4A574] md:text-4xl"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              recién horneado
            </p>
            <p className="mb-8 max-w-md text-base leading-relaxed text-[#1a1a1a]/70 md:text-lg">
              Nuestro pandebono es el corazón de La Qatrie. Hecho con queso
              fresco del Valle, almidón de yuca y mucho amor. Crujiente por
              fuera, suave por dentro — el acompañante perfecto para tu
              desayuno o brunch.
            </p>
            <a
              href="#pedir"
              className="inline-flex items-center gap-2 rounded-full bg-[#2B6E63] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#1D4E46] hover:shadow-lg"
            >
              Pedir ahora
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
