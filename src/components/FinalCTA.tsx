"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const fontDisplay = { fontFamily: "var(--font-display)" };
const fadeIn = { opacity: 0 };
const visibleFade = { opacity: 1 };
const viewOnce = { once: true, margin: "-100px" };
const viewAlways = { once: true };
const t06 = { duration: 0.6 };
const t06d2 = { duration: 0.6, delay: 0.2 };
const t06d4 = { duration: 0.6, delay: 0.4 };
const bgHero = { backgroundImage: "url(/assets/hero-sopa.jpg)" };

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-44">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={bgHero}
      />
      <div className="absolute inset-0 bg-[#0F1D35]/85" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
        <motion.h2
          initial={fadeIn}
          whileInView={visibleFade}
          transition={t06}
          viewport={viewOnce}
          className="mb-2 text-4xl font-bold text-white md:text-5xl"
          style={fontDisplay}
        >
          Come algo
        </motion.h2>

        <motion.p
          initial={fadeIn}
          whileInView={visibleFade}
          transition={t06d2}
          viewport={viewOnce}
          className="mb-10 text-6xl italic text-[#C8A882] md:text-7xl lg:text-8xl"
          style={fontDisplay}
        >
          Delicioso
        </motion.p>

        <motion.div
          initial={fadeIn}
          whileInView={visibleFade}
          transition={t06d4}
          viewport={viewAlways}
        >
          <Link
            href="#pedir"
            className="inline-flex items-center gap-2 rounded-full bg-[#C8A882] px-10 py-4 text-base font-semibold text-white transition-all hover:bg-[#b89872] hover:shadow-xl"
          >
            Pide en linea
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
