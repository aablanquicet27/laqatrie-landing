"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HistorySection() {
  return (
    <section className="bg-[#FFF8F0] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2
              className="text-4xl font-bold leading-tight text-[#1a1a1a] md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              ¿Y si abrimos un
            </h2>
            <p
              className="-mt-2 text-5xl italic text-[#D4A574] md:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              restaurante?
            </p>
          </motion.div>

          {/* Body text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="mb-8 text-base leading-relaxed text-[#1a1a1a]/70 md:text-lg">
              Todo empezó con una pregunta sencilla y mucho amor por la cocina.
              La Qatrie nació de la pasión por los sabores auténticos del Valle
              del Cauca, del deseo de crear un espacio donde cada mañana fuera
              especial. Desde nuestras primeras recetas hasta hoy, seguimos
              comprometidos con la calidad, la frescura y ese toque casero que
              nos hace únicos.
            </p>
            <Link
              href="#nosotros"
              className="inline-flex items-center gap-2 rounded-full bg-[#2B6E63] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#1D4E46] hover:shadow-lg"
            >
              Conoce nuestra historia
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
