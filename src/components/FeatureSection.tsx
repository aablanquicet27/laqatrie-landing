"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fontDisplay = { fontFamily: "var(--font-display)" };
const slideLeft = { opacity: 0, x: -40 };
const slideRight = { opacity: 0, x: 40 };
const visibleSlide = { opacity: 1, x: 0 };
const slowTransition = { duration: 0.8 };
const delayTransition = { duration: 0.8, delay: 0.2 };
const viewOnce = { once: true, margin: "-100px" };

export default function FeatureSection() {
  return (
    <section className="overflow-hidden bg-[#FAF5EE] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={slideLeft}
            whileInView={visibleSlide}
            transition={slowTransition}
            viewport={viewOnce}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/assets/hero-pandebono.jpg"
                alt="Pandebono recien horneado"
                width={600}
                height={700}
                className="h-[400px] w-full object-cover md:h-[500px] lg:h-[550px]"
              />
            </div>

            <div
              className="absolute -right-4 -bottom-4 z-10 flex h-28 w-28 items-center justify-center rounded-full bg-[#C8A882] shadow-xl md:-right-8 md:-bottom-8 md:h-36 md:w-36"
              style= animation: "float 3s ease-in-out infinite" 
            >
              <span
                className="text-center text-sm font-bold leading-tight text-white md:text-base"
                style={fontDisplay}
              >
                Recien
                <br />
                horneado
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={slideRight}
            whileInView={visibleSlide}
            transition={delayTransition}
            viewport={viewOnce}
          >
            <p className="mb-2 text-lg font-light tracking-wide text-[#1a1a1a]/50">
              El
            </p>
            <h2
              className="mb-6 text-5xl font-bold text-[#1a1a1a] md:text-6xl lg:text-7xl"
              style={fontDisplay}
            >
              Pandebono
            </h2>
            <p
              className="mb-8 text-3xl italic text-[#C8A882] md:text-4xl"
              style={fontDisplay}
            >
              recien horneado
            </p>
            <p className="mb-8 max-w-md text-base leading-relaxed text-[#1a1a1a]/70 md:text-lg">
              Nuestro pandebono es el corazon de La Qatrie. Hecho con queso
              fresco del Valle, almidon de yuca y mucho amor. Crujiente por
              fuera, suave por dentro, el acompanante perfecto para tu
              desayuno o brunch.
            </p>
            <a
              href="#pedir"
              className="inline-flex items-center gap-2 rounded-full bg-[#1B2A4A] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#0F1D35] hover:shadow-lg"
            >
              Pedir ahora
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
