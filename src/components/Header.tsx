"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const leftNav = [
  { label: "Menú", href: "#menu" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Visítanos", href: "#ubicaciones" },
];

const rightNav = [
  { label: "Reservas", href: "#reservas" },
  { label: "Contáctanos", href: "#contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "header-solid" : "header-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Left nav - desktop */}
          <nav className="hidden items-center gap-8 lg:flex">
            {leftNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium tracking-wide text-white/90 transition-colors hover:text-[#D4A574]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Logo - centered */}
          <Link href="/" className="relative z-10 flex-shrink-0 lg:mx-12">
            <Image
              src="/assets/logo.jpg"
              alt="La Qatrie"
              width={140}
              height={70}
              className="h-[50px] w-auto rounded-md object-contain lg:h-[60px]"
              priority
            />
          </Link>

          {/* Right nav - desktop */}
          <nav className="hidden items-center gap-8 lg:flex">
            {rightNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium tracking-wide text-white/90 transition-colors hover:text-[#D4A574]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#pedir"
              className="rounded-full bg-[#D4A574] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#c49564] hover:shadow-lg"
            >
              Pide en línea
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex items-center gap-2 rounded-full bg-[#D4A574]/20 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-[#D4A574]/40 lg:hidden"
            aria-label="Abrir menú"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 flex h-full w-80 flex-col bg-[#2B6E63] shadow-2xl"
            >
              {/* Close button */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                <Image
                  src="/assets/logo.jpg"
                  alt="La Qatrie"
                  width={100}
                  height={50}
                  className="h-[40px] w-auto rounded-md object-contain"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Cerrar menú"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-1 px-4 pt-6">
                {[...leftNav, ...rightNav].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-4 py-3.5 text-lg font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* CTA */}
              <div className="mt-auto px-6 pb-8">
                <Link
                  href="#pedir"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full rounded-full bg-[#D4A574] px-6 py-3.5 text-center text-base font-semibold text-white transition-all hover:bg-[#c49564]"
                >
                  Pide en línea
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
