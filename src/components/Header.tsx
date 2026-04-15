"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const leftNav = [
  { label: "Menu", href: "#menu" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Visitanos", href: "#ubicaciones" },
];

const rightNav = [
  { label: "Reservas", href: "#reservas" },
  { label: "Contactanos", href: "#contacto" },
];

const overlayVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const sidebarVariants = { hidden: { x: "100%" }, visible: { x: 0 } };
const sidebarTransition = { type: "spring", damping: 30, stiffness: 300 };
const fadeTransition = { duration: 0.3 };

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
                className="text-sm font-medium tracking-wide text-white/90 transition-colors hover:text-[#C8A882]"
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
                className="text-sm font-medium tracking-wide text-white/90 transition-colors hover:text-[#C8A882]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#pedir"
              className="rounded-full bg-[#C8A882] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#b89872] hover:shadow-lg"
            >
              Pide en linea
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex items-center gap-2 rounded-full bg-[#C8A882]/20 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-[#C8A882]/40 lg:hidden"
            aria-label="Abrir menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={fadeTransition}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={sidebarTransition}
              className="fixed top-0 right-0 z-50 flex h-full w-80 flex-col bg-[#1B2A4A] shadow-2xl"
            >
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
                  aria-label="Cerrar menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col gap-1 px-4 pt-6">
                {[...leftNav, ...rightNav].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-4 py-3.5 text-lg font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto px-6 pb-8">
                <Link
                  href="#pedir"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full rounded-full bg-[#C8A882] px-6 py-3.5 text-center text-base font-semibold text-white transition-all hover:bg-[#b89872]"
                >
                  Pide en linea
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
