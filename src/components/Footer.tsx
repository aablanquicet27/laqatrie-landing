"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#0F1D35] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-12 grid items-center gap-8 md:grid-cols-3">
          <div className="flex gap-4 md:justify-start justify-center">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all hover:border-[#C8A882] hover:text-[#C8A882]"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all hover:border-[#C8A882] hover:text-[#C8A882]"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>

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

          <div className="flex md:justify-end justify-center">
            <Link
              href="#pedir"
              className="inline-flex items-center gap-2 rounded-full bg-[#C8A882] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#b89872]"
            >
              Pide en linea
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

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
            Contactanos
          </Link>
        </div>

        <div className="mb-8 h-px w-full bg-white/10" />

        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between">
          <p className="text-xs text-white/40">
            La Qatrie. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <Link href="#" className="transition-colors hover:text-white/60">
              Politica de privacidad
            </Link>
            <Link href="#" className="transition-colors hover:text-white/60">
              Terminos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
