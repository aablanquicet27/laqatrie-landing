"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const fontDisplay = { fontFamily: "var(--font-display)" };
const fadeUp = { opacity: 0, y: 30 };
const visible = { opacity: 1, y: 0 };
const slowTransition = { duration: 0.8 };
const delayTransition = { duration: 0.8, delay: 0.2 };
const viewOnce = { once: true, margin: "-100px" };

export default function HistorySection() {
  return (
    <section className="bg-[#FAF5EE] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={fadeUp}
            whileInView={visible}
            transition={slowTransition}
            viewport={viewOnce}
          >
            <h2
              className="text-4xl font-bold leading-tight text-[#1a1a1a] md:text-5xl lg:text-6xl"
              style={fontDisplay}
            >
              Y si abrimos un
            </h2>
            <p
              className="-mt-2 text-5xl italic text-[#C8A882] md:text-6xl lg:text-7xl"
              style={fontDisplay}
            >
              restaurante?
            </p>
          </motion.div>

          <motion.div
            initial={fadeUp}
            whileInView={visible}
            transition={delayTransition}
            viewport={viewOnce}
          >
            <p className="mb-8 text-base leading-relaxed text-[#1a1a1a]/70 md:text-lg">
              Todo empezo con una pregunta sencilla y mucho amor por la cocina.
              La Qatrie nacio de la pasion por los sabores autenticos del Valle
              del Cauca, del deseo de crear un espacio donde cada manana fuera
              especial. Desde nuestras primeras recetas hasta hoy, seguimos
              comprometidos con la calidad, la frescura y ese toque casero que
              nos hace unicos.
            </p>
            <Link
              href="#nosotros"
              className="inline-flex items-center gap-2 rounded-full bg-[#1B2A4A] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#0F1D35] hover:shadow-lg"
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
