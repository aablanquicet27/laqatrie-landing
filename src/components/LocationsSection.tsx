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

const locations: Record<
  string,
  { name: string; address: string; gradient: string }[]
> = {
  Cali: [
    {
      name: "Granada",
      address: "Calle 1 Oeste #5-32",
      gradient: "from-[#2B6E63] to-[#1D4E46]",
    },
    {
      name: "Ciudad Jardín",
      address: "Carrera 105 #14-120",
      gradient: "from-[#1D4E46] to-[#0f2e29]",
    },
    {
      name: "San Fernando",
      address: "Calle 5 #36-15",
      gradient: "from-[#D4A574] to-[#b8895a]",
    },
    {
      name: "El Peñón",
      address: "Avenida 2 Norte #8-45",
      gradient: "from-[#4a9e8f] to-[#2B6E63]",
    },
  ],
};

export default function LocationsSection() {
  const [activeTab, setActiveTab] = useState("Cali");

  return (
    <section id="ubicaciones" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <h2
            className="mb-4 text-4xl font-bold text-[#1a1a1a] md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Nuestras{" "}
            <span className="italic text-[#D4A574]">sedes</span>
          </h2>
          <p className="mx-auto max-w-xl text-base text-[#1a1a1a]/60 md:text-lg">
            Visitanos en cualquiera de nuestras sedes en la ciudad
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mb-10 flex justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-8 py-2.5 text-sm font-semibold transition-all ${
                activeTab === tab
                  ? "bg-[#2B6E63] text-white shadow-md"
                  : "bg-[#f5f0eb] text-[#1a1a1a]/60 hover:bg-[#e8e0d8]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Locations carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
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
                      style={{
                        fontFamily: "var(--font-playfair), serif",
                      }}
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="#ubicaciones"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#2B6E63] px-8 py-3.5 text-sm font-semibold text-[#2B6E63] transition-all hover:bg-[#2B6E63] hover:text-white"
          >
            Ver todas las sedes
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
