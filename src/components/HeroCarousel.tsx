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
    subtitle: "Tradicion colombiana en cada plato",
    heading: "Sabores que",
    accent: "alimentan el alma",
    tagline: "",
  },
];

const fadeUp = { opacity: 0, y: 30 };
const fadeIn = { opacity: 0 };
const visible = { opacity: 1, y: 0 };
const visibleFade = { opacity: 1 };
const heroAutoplay = { delay: 6000, disableOnInteraction: false };
const heroPagination = { clickable: true };
const fontDisplay = { fontFamily: "var(--font-display)" };

export default function HeroCarousel() {
  return (
    <section className="hero-swiper relative h-screen w-full">
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        autoplay={heroAutoplay}
        pagination={heroPagination}
        loop={true}
        speed={1000}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full overflow-hidden">
              <div
                className="ken-burns-img absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-[#0F1D35]/55" />

              <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                  <div className="max-w-2xl">
                    <motion.p
                      initial={fadeIn}
                      whileInView={visibleFade}
                      transition= duration: 0.6, delay: 0.2 
                      viewport= once: true 
                      className="mb-4 text-sm font-medium tracking-[0.2em] text-white/70 uppercase md:text-base"
                    >
                      {slide.subtitle}
                    </motion.p>

                    <motion.h1
                      initial={fadeUp}
                      whileInView={visible}
                      transition= duration: 0.8, delay: 0.3 
                      viewport= once: true 
                      className="mb-2 text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl"
                      style={fontDisplay}
                    >
                      {slide.heading}
                    </motion.h1>

                    <motion.p
                      initial={fadeUp}
                      whileInView={visible}
                      transition= duration: 0.8, delay: 0.5 
                      viewport= once: true 
                      className="mb-3 text-4xl italic text-[#C8A882] md:text-5xl lg:text-6xl"
                      style={fontDisplay}
                    >
                      {slide.accent}
                    </motion.p>

                    {slide.tagline && (
                      <motion.p
                        initial={fadeIn}
                        whileInView={visibleFade}
                        transition= duration: 0.6, delay: 0.7 
                        viewport= once: true 
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
