"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const initialAnim = { opacity: 0, scale: 0.8 };
const animateAnim = { opacity: 1, scale: 1 };
const animTransition = { delay: 2, duration: 0.5 };
const hoverScale = { scale: 1.1 };
const tapScale = { scale: 0.95 };

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/573001234567"
      target="_blank"
      rel="noopener noreferrer"
      initial={initialAnim}
      animate={animateAnim}
      transition={animTransition}
      whileHover={hoverScale}
      whileTap={tapScale}
      className="fixed right-6 bottom-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3.5 font-semibold text-white shadow-lg shadow-[#25D366]/30 transition-shadow hover:shadow-xl hover:shadow-[#25D366]/40"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={24} fill="white" stroke="white" />
      <span className="hidden text-sm sm:inline">Escribenos</span>
    </motion.a>
  );
}
