"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";

const tabs = ["Cali"];

type LocationItem = { name: string; address: string; gradient: string };

const locations: Record<string, LocationItem[]> = {
  Cali: [
    {
      name: "Granada",
      address: "Calle 1 Oeste #5-32",
      gradient: "from-[#1B2A4A] to-[#0F1D35]",
    },
    {
      name: "Ciudad Jardin",
      address: "Carrera 105 #14-120",
      gradient: "from-[#0F1D35] to-[#0A1428]",
    },
    {
      name: "San Fernando",
      address: "Calle 5 #36-15",
      gradient: "from-[#C8A882] to-[#a8885a]",
    },
    {
      name: "El Penon",
      address: "Avenida 2 Norte #8-45",
      gradient: "from-[#2D4A7A] to-[#1B2A4A]",
    },
  ],
};

const fadeIn = { opacity: 0 };
const visibleFade = { opacity: 1 };
const viewOnce = { once: true, margin: "-100px" };
const viewAlways = { once: true };
const fontDisplay = { fontFamily: "var(--font-display)" };

export default function LocationsSection() {
  const [activeTab, setActiveTab] = useState("Cali");

  return (
    <section id="ubicaciones" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={fadeIn}
          whileInView={visibleFade}
          transition= duration: 0.6 
          viewport={viewOnce}
          className="mb-12 text-center"
        >
          <h2
            className="mb-4 text-4xl font-bold text-[#1a1a1a] md:text-5xl lg:text-6xl"
            style={fontDisplay}
          >
            Nuestras{" "}
            <span className="italic text-[#C8A882]">sedes</span>
          </h2>
          <p className="mx-auto max-w-xl text-base text-[#1a1a1a]/60 md:text-lg">
            Visitanos en cualquiera de nuestras sedes en la ciudad
          </p>
        </motion.div>

        <div className="mb-10 flex justify-center gap-3">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            const cls = isActive
              ? "bg-[#1B2A4A] text-white shadow-md"
              : "bg-[#f0ebe5] text-[#1a1a1a]/60 hover:bg-[#e0d8cf]";
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-8 py-2.5 text-sm font-semibold transition-all ${cls}`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <motion.div
          initial={fadeIn}
          whileInView={visibleFade}
          transition= duration: 0.6, delay: 0.2 
          viewport={viewAlways}
          className="location-swiper"
        >
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {(locations[activeTab] || []).map((location, index) => (
              <SwiperSlide key={index}>
                <div className="group cursor-pointer overflow-hidden rounded-2xl">
                  <div
                    className={`flex h-[280px] flex-col items-center justify-center bg-gradient-to-br ${location.gradient} p-6 transition-transform duration-300 group-hover:scale-[1.02]`}
                  >
                    <MapPin
                      size={40}
                      className="mb-4 text-white/60"
                      strokeWidth={1.5}
                    />
                    <h3
                      className="mb-2 text-2xl font-bold text-white"
                      style={fontDisplay}
                    >
                      {location.name}
                    </h3>
                    <p className="text-sm text-white/60">{location.address}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          initial={fadeIn}
          whileInView={visibleFade}
          transition= duration: 0.6, delay: 0.3 
          viewport={viewAlways}
          className="mt-12 text-center"
        >
          <Link
            href="#ubicaciones"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#1B2A4A] px-8 py-3.5 text-sm font-semibold text-[#1B2A4A] transition-all hover:bg-[#1B2A4A] hover:text-white"
          >
            Ver todas las sedes
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
