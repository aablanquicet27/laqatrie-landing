"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section id="pedir" className="bg-[#2B6E63] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-2 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Come lo que quieras
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-8 text-5xl italic text-[#D4A574] md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Come Rico
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              href="#pedir"
              className="inline-flex items-center gap-2 rounded-full bg-[#D4A574] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#c49564] hover:shadow-xl"
            >
              Pide en línea ahora
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-4 text-sm tracking-wide text-white/60"
          >
            Domicilios en Cali
          </motion.p>

          {/* Lifestyle image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-14"
          >
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/assets/hero-sopa.jpg"
                alt="Sopa colombiana tradicional"
                width={1200}
                height={600}
                className="h-[300px] w-full object-cover md:h-[400px] lg:h-[500px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
