"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-44">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/hero-pandebono.jpg)" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1D4E46]/85" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-2 text-4xl font-bold text-white md:text-5xl"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Come algo
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-10 text-6xl italic text-[#D4A574] md:text-7xl lg:text-8xl"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Delicioso
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="#pedir"
            className="inline-flex items-center gap-2 rounded-full bg-[#D4A574] px-10 py-4 text-base font-semibold text-white transition-all hover:bg-[#c49564] hover:shadow-xl"
          >
            Pide en línea
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
