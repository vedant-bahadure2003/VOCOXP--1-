import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaSkullCrossbones,
  FaShieldAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import logobg from "../assets/images/vocoxplogo.jpeg";
import imgThreat1 from "../assets/images/WhatsApp Image 2025-12-18 at 4.51.08 PM (1).jpeg";
import imgThreat2 from "../assets/images/WhatsApp Image 2025-12-18 at 4.51.09 PM (1).jpeg";
import imgSolution1 from "../assets/images/WhatsApp Image 2025-12-18 at 4.51.08 PM.jpeg";
import imgSolution2 from "../assets/images/WhatsApp Image 2025-12-18 at 4.51.09 PM (2).jpeg";

const slides = [
  {
    id: 1,
    type: "threat",
    title: "THE FAKE ID CRISIS",
    tag: "DANGER",
    desc: "Human eyes fail. Professional fakes are bypassing security right now.",
    image: imgThreat1,
  },
  {
    id: 2,
    type: "threat",
    title: "UNVERIFIED ENTRY",
    tag: "BREACH",
    desc: "Every 'standard' entry is a potential blind spot for infiltration.",
    image: imgThreat2,
  },
  {
    id: 3,
    type: "solution",
    title: "INSTANT CERTAINTY",
    tag: "ACTIVE",
    desc: "Stop threats before they step inside with 99.9% AI accuracy.",
    image: imgSolution1,
  },
  {
    id: 4,
    type: "solution",
    title: "TOTAL CROWD CONTROL",
    tag: "SHIELD",
    desc: "Secure high-traffic zones with biometric precision and speed.",
    image: imgSolution2,
  },
];

const UltraModernCarousel = () => {
  const [index, setIndex] = useState(0);
  const current = slides[index];
  const isThreat = current.type === "threat";

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % slides.length),
      7000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-linear-to-r from-[#081025] via-[#0b1c3d] to-[#081025]">
      <div className="relative w-full max-w-6xl mx-auto px-4 pt-10 md:pt-15 flex flex-col items-center">
        {/* MAIN CONTAINER: Flex-col on mobile, relative on desktop */}
        <div className="relative w-full flex flex-col md:block h-auto md:h-125 rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/5 shadow-2xl">
          {/* 1. IMAGE SECTION (Horizontal on Mobile) */}
          <div className="relative w-full h-50 md:h-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <img
                  src={current.image}
                  className="w-full h-full object-cover"
                  alt=""
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* LOGO (Always Top Left) */}
            <div className="absolute top-4 left-4 z-50 bg-[#002046]/90 p-1.5 px-3 rounded-lg backdrop-blur-md border border-white/10">
              <div className="flex items-center gap-2">
                <img
                  src={logobg}
                  className="w-5 h-5 object-contain"
                  alt="Logo"
                />
                <span className="text-white font-black text-xs uppercase">
                  VOCO<span className="text-orange-400">x</span>
                  <span className="text-emerald-300">P</span>
                </span>
              </div>
            </div>
          </div>

          {/* 2. INFO BOX (Below image on Mobile, Floating on Desktop) */}
          <div className="relative md:absolute md:bottom-10 md:left-10 z-50 w-full md:w-70 p-4 md:p-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-white/5 md:bg-black/60 backdrop-blur-2xl border border-white/10 p-5 rounded-2xl md:rounded-[1.2rem]"
              >
                <div
                  className={`flex items-center gap-2 mb-2 font-black text-[9px] tracking-widest uppercase ${
                    isThreat ? "text-red-500" : "text-emerald-400"
                  }`}
                >
                  {isThreat ? (
                    <FaSkullCrossbones size={10} className="animate-pulse" />
                  ) : (
                    <FaShieldAlt size={10} />
                  )}
                  {current.tag}
                </div>

                <h2 className="text-xl md:text-xl font-black text-white mb-2 leading-tight uppercase">
                  {current.title}
                </h2>

                <p className="text-gray-400 text-[11px] leading-relaxed mb-4 line-clamp-2 md:line-clamp-none">
                  {current.desc}
                </p>

                <button
                  className={`w-full py-2.5 rounded-lg font-black text-[10px] uppercase flex items-center justify-center gap-2 transition-transform active:scale-95 ${
                    isThreat
                      ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                      : "bg-white text-black"
                  }`}
                >
                  {isThreat ? "ELIMINATE RISK" : "ACTIVATE PROTECTION"}
                  <FaArrowRight size={10} />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 3. DESKTOP NAVIGATION */}
          <div className="hidden md:flex absolute right-10 top-1/2 -translate-y-1/2 z-50 flex-col gap-4">
            <button
              onClick={() =>
                setIndex((prev) => (prev - 1 + slides.length) % slides.length)
              }
              className="w-12 h-12 rounded-full border border-white/10 bg-black/40 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
              className="w-12 h-12 rounded-full border border-white/10 bg-black/40 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* 4. PROGRESS DOTS */}
        <div className="mt-8 flex gap-3">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                index === i ? "w-12 bg-white" : "w-2 bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UltraModernCarousel;
