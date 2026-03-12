"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    image: "/assets/hero-pandebono.jpg",
    subtitle: "Restaurante de desayunos y brunch en Cali",
    heading: "Celebramos",
    accent: "El buen comer",
    tagline: "desde siempre",
  },
  {
    image: "/assets/hero-sopa.jpg",
    subtitle: "Tradición colombiana en cada plato",
    heading: "Sabores que",
    accent: "alimentan el alma",
    tagline: "",
  },
];

export default function HeroCarousel() {
  return (
    <section className="hero-swiper relative h-screen w-full">
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        speed={1000}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full overflow-hidden">
              {/* Background image with Ken Burns */}
              <div
                className="ken-burns-img absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/45" />

              {/* Content */}
              <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                  <div className="max-w-2xl">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="mb-4 text-sm font-medium tracking-[0.2em] text-white/70 uppercase md:text-base"
                    >
                      {slide.subtitle}
                    </motion.p>

                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="mb-2 text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      {slide.heading}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="mb-3 text-4xl italic text-[#D4A574] md:text-5xl lg:text-6xl"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      {slide.accent}
                    </motion.p>

                    {slide.tagline && (
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="text-lg font-light tracking-wide text-white/80 md:text-xl"
                      >
                        {slide.tagline}
                      </motion.p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
