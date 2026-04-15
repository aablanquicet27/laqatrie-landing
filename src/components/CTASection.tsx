"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const fontDisplay = { fontFamily: "var(--font-display)" };
const fadeIn = { opacity: 0 };
const visibleFade = { opacity: 1 };
const scaleUp = { opacity: 0, scale: 0.95 };
const visible = { opacity: 1, scale: 1 };
const viewOnce = { once: true, margin: "-100px" };
const viewAlways = { once: true };
const t06 = { duration: 0.6 };
const t06d2 = { duration: 0.6, delay: 0.2 };
const t06d4 = { duration: 0.6, delay: 0.4 };
const t05d5 = { duration: 0.5, delay: 0.5 };
const t08d3 = { duration: 0.8, delay: 0.3 };

export default function CTASection() {
  return (
    <section id="pedir" className="bg-[#1B2A4A] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={fadeIn}
            whileInView={visibleFade}
            transition={t06}
            viewport={viewOnce}
            className="mb-2 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            style={fontDisplay}
          >
            Come lo que quieras
          </motion.h2>

          <motion.p
            initial={fadeIn}
            whileInView={visibleFade}
            transition={t06d2}
            viewport={viewOnce}
            className="mb-8 text-5xl italic text-[#C8A882] md:text-6xl lg:text-7xl"
            style={fontDisplay}
          >
            Come Rico
          </motion.p>

          <motion.div
            initial={fadeIn}
            whileInView={visibleFade}
            transition={t06d4}
            viewport={viewAlways}
          >
            <Link
              href="#pedir"
              className="inline-flex items-center gap-2 rounded-full bg-[#C8A882] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#b89872] hover:shadow-xl"
            >
              Pide en linea ahora
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          <motion.p
            initial={fadeIn}
            whileInView={visibleFade}
            transition={t05d5}
            viewport={viewAlways}
            className="mt-4 text-sm tracking-wide text-white/60"
          >
            Domicilios en Cali
          </motion.p>

          <motion.div
            initial={scaleUp}
            whileInView={visible}
            transition={t08d3}
            viewport={viewOnce}
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
