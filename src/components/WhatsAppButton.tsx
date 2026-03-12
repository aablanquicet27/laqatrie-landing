"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/573001234567"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed right-6 bottom-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3.5 font-semibold text-white shadow-lg shadow-[#25D366]/30 transition-shadow hover:shadow-xl hover:shadow-[#25D366]/40"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={24} fill="white" stroke="white" />
      <span className="hidden text-sm sm:inline">Escríbenos</span>
    </motion.a>
  );
}
