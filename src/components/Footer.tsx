"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#1D4E46] text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Row 1: Social | Logo | CTA */}
        <div className="mb-12 grid items-center gap-8 md:grid-cols-3">
          {/* Social links */}
          <div className="flex gap-4 md:justify-start justify-center">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all hover:border-[#D4A574] hover:text-[#D4A574]"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all hover:border-[#D4A574] hover:text-[#D4A574]"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>

          {/* Logo */}
          <div className="flex justify-center">
            <Link href="/">
              <Image
                src="/assets/logo.jpg"
                alt="La Qatrie"
                width={140}
                height={70}
                className="h-[55px] w-auto rounded-md object-contain"
              />
            </Link>
          </div>

          {/* CTA */}
          <div className="flex md:justify-end justify-center">
            <Link
              href="#pedir"
              className="inline-flex items-center gap-2 rounded-full bg-[#D4A574] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#c49564]"
            >
              Pide en línea
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Row 2: Utility links */}
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          <Link
            href="#reservas"
            className="rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium text-white/70 transition-all hover:border-white/40 hover:text-white"
          >
            Reservas
          </Link>
          <Link
            href="#contacto"
            className="rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium text-white/70 transition-all hover:border-white/40 hover:text-white"
          >
            Contáctanos
          </Link>
        </div>

        {/* Divider */}
        <div className="mb-8 h-px w-full bg-white/10" />

        {/* Row 3: Copyright */}
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} La Qatrie. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <Link href="#" className="transition-colors hover:text-white/60">
              Política de privacidad
            </Link>
            <Link href="#" className="transition-colors hover:text-white/60">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
