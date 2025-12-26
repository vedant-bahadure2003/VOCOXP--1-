import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaShieldAlt,
  FaBriefcase,
  FaIndustry,
  FaUserCheck,
  FaUserSecret,
} from "react-icons/fa";

/* Images */
import usedv1 from "../assets/usedVocoXp/used1.png";
import usedv2 from "../assets/usedVocoXp/used2.png";
import usedv4 from "../assets/usedVocoXp/WhatsApp Image 2025-12-18 at 3.20.09 PM.jpeg";
import usedv7 from "../assets/usedVocoXp/WhatsApp Image 2025-12-20 at 11.17.33 AM.jpeg";

const productSlides = [
  {
    id: 1,
    image: usedv1,
    title: "Stop the Risk",
    description:
      "Unverified entry is a direct threat to your family and assets.",
    tag: "Security Risk",
    icon: <FaUserSecret />,
  },
  {
    id: 2,
    image: usedv2,
    title: "Verified Peace",
    description:
      "Instant digital verification ensures only trusted individuals enter.",
    tag: "VOCOxP Solved",
    icon: <FaShieldAlt />,
  },
  {
    id: 3,
    image: usedv1,
    title: "Devotee Management",
    description:
      "Smooth and secure entry management for temples and gatherings.",
    tag: "Public Spaces",
    icon: <FaUserCheck />,
  },
  {
    id: 4,
    image: usedv4,
    title: "Office Integrity",
    description:
      "Authenticate employees and visitors with a single scan.",
    tag: "Corporate",
    icon: <FaBriefcase />,
  },
  {
    id: 5,
    image: usedv7,
    title: "Industrial Trust",
    description:
      "Secure large workforces without compromising productivity.",
    tag: "Industrial",
    icon: <FaIndustry />,
  },
];

const ProductVisualizer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((p) => (p + 1) % productSlides.length);

  const prevSlide = () =>
    setCurrentIndex((p) =>
      p === 0 ? productSlides.length - 1 : p - 1
    );

  const current = productSlides[currentIndex];

  return (
    <div className="w-full max-w-7xl mx-auto relative">
      {/* SOFT GLOW */}
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 blur-3xl rounded-[2.5rem]"
      />

      <div className="relative h-[450px] rounded-[2.5rem] overflow-hidden
        bg-gradient-to-br from-[#0a0f3d] via-[#0b1a6b] to-[#020617]
        border border-white/10 shadow-2xl flex flex-col md:flex-row">

        {/* LEFT IMAGE */}
        <div className="relative flex-1 h-[450px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${current.image})` }}
            />
          </AnimatePresence>

          {/* IMAGE OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* TEXT OVER IMAGE */}
          <div className="absolute bottom-8 left-8 z-20 max-w-md">
            <h3 className="text-3xl font-black text-white mb-2">
              {current.title}
            </h3>
            <p className="text-sm text-gray-300">
              {current.description}
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="w-full md:w-[380px]
          bg-white/5 backdrop-blur-2xl
          border-l border-white/10
          p-6 flex flex-col">

          <h4 className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
            Real-World Protection
          </h4>

          <div className="flex-1 space-y-2">
            {productSlides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(idx)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300
                  ${
                    idx === currentIndex
                      ? "bg-gradient-to-r from-emerald-500/30 to-cyan-500/20 border border-emerald-400/60 shadow-[0_0_20px_rgba(16,185,129,0.35)]"
                      : "opacity-70 hover:opacity-100 hover:bg-white/10"
                  }`}
              >
                <div
                  className={`h-9 w-9 rounded-lg flex items-center justify-center text-sm
                    ${
                      idx === currentIndex
                        ? "bg-gradient-to-br from-emerald-400 to-cyan-400 text-black shadow-lg"
                        : "bg-white/10 text-cyan-400"
                    }`}
                >
                  {slide.icon}
                </div>

                <div className="text-left">
                  <p
                    className={`text-[10px] font-black uppercase tracking-widest
                      ${
                        idx === currentIndex
                          ? "text-white"
                          : "text-gray-400"
                      }`}
                  >
                    {slide.tag}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* CONTROLS */}
          <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="h-10 w-10 rounded-full border border-white/20 text-white
                flex items-center justify-center
                hover:bg-gradient-to-br hover:from-emerald-500 hover:to-cyan-500
                hover:scale-110 transition-all"
              >
                <FaChevronLeft size={12} />
              </button>

              <button
                onClick={nextSlide}
                className="h-10 w-10 rounded-full border border-white/20 text-white
                flex items-center justify-center
                hover:bg-gradient-to-br hover:from-emerald-500 hover:to-cyan-500
                hover:scale-110 transition-all"
              >
                <FaChevronRight size={12} />
              </button>
            </div>

            <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              0{currentIndex + 1}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductVisualizer;
