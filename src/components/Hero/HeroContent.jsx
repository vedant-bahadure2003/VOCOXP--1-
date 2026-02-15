import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Get the base URL from Vite config
const BASE_URL = import.meta.env.BASE_URL || "/";

// Slide data with unique taglines for each scenario
const heroSlides = [
  {
    id: 1,
    image: `${BASE_URL}Images/vocoxp-hero1.png`,
    preHeadline: "You Think Your Home Is Safe",
    headline: "The Danger Is Already Inside",
    highlightWord: "Danger",
    subtext:
      "Escaped convicts. Hidden criminals. They could be in your neighborhood right now.",
    subtextSecondary:
      "That stranger next door might have a past you'd never imagine.",
  },
  {
    id: 2,
    image: `${BASE_URL}Images/vocoxp-hero2.png`,
    preHeadline: "Everyone Looks Professional",
    headline: "But One Is A Threat",
    highlightWord: "Threat",
    subtext:
      "In a sea of verified employees, one unverified person can cause disaster.",
    subtextSecondary:
      "Your workplace security is only as strong as your weakest verification.",
  },
  {
    id: 3,
    image: `${BASE_URL}Images/vocoxp-hero3.png`,
    preHeadline: "You Trust Them With Your Children",
    headline: "What If They Can't Be Trusted?",
    highlightWord: "Trusted",
    subtext: "Schools need protection. Your children deserve verified safety. Designed to ensure compliance with the latest DPDP Act 2023 and DPDP Rules 2025.",
    // "Background-unchecked teachers. Hidden criminal records. Dangerous secrets.",
    subtextSecondary:
      "Schools need protection. Your children deserve verified safety. Designed to ensure compliance with the latest DPDP Act 2023 and DPDP Rules 2025.",
  },
  {
    id: 4,
    image: `${BASE_URL}Images/vocoxp-hero4.png`,
    preHeadline: "A Day Of Celebration",
    headline: "Hides A Hidden Risk",
    highlightWord: "Hidden",
    subtext:
      "Fraudulent identities. Concealed intentions. The picture-perfect moment hiding danger.",
    subtextSecondary: "Trust should never be assumed—it should be verified.",
  },
];

const HeroContent = ({ currentSlide }) => {
  const slide = heroSlides[currentSlide];

  // Letter animation for dramatic text reveal
  const letters = slide.headline.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      rotateX: -60,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120,
      },
    },
  };

  const subtextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Find the start index of the highlight word in the headline
  const highlightStart = slide.headline.indexOf(slide.highlightWord);
  const highlightEnd = highlightStart + slide.highlightWord.length;

  return (
    <motion.div
      key={slide.id}
      className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 text-center"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      {/* Pre-headline */}
      <motion.div
        className="mb-5 flex items-center justify-center gap-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="hidden sm:block h-[2px] w-10 md:w-16 bg-gradient-to-r from-transparent to-cyan-400 rounded-full" />
        <p
          className="text-base md:text-2xl lg:text-3xl uppercase tracking-[0.25em] font-bold
                     bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent
                     drop-shadow-lg"
          style={{
            textShadow: `
              0 0 20px rgba(69, 214, 236, 0.9),
              0 0 40px rgba(34, 211, 238, 0.5),
              0 0 60px rgba(34, 211, 238, 0.3)
            `,
            WebkitTextStroke: "0.5px rgba(165, 243, 252, 0.4)",
          }}
        >
          {slide.preHeadline}
        </p>
        <span className="hidden sm:block h-[2px] w-10 md:w-16 bg-gradient-to-l from-transparent to-cyan-400 rounded-full" />
      </motion.div>

      {/* Main Headline with Letter Animation */}
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8"
        style={{ fontFamily: "var(--font-display)" }}
        variants={containerVariants}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={`${slide.id}-${index}`}
            variants={letterVariants}
            className={
              letter === " " ? "inline-block w-3 md:w-4" : "inline-block"
            }
            style={{
              color:
                index >= highlightStart && index < highlightEnd
                  ? "#ef4444"
                  : "#ffffff",
              textShadow: "0 2px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mb-3 leading-relaxed"
        style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)" }}
        variants={subtextVariants}
      >
        {slide.subtext}
      </motion.p>

      {/* <motion.p
        className="text-base md:text-lg text-gray-300 max-w-2xl mb-12 leading-relaxed"
        style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)" }}
        variants={subtextVariants}
        transition={{ delay: 1 }}
      >
        {slide.subtextSecondary}
      </motion.p> */}

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        variants={ctaVariants}
      >
        <motion.a
          href="#enquiry"
          className="btn-primary animate-pulse-glow text-base md:text-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Protect Your Space
        </motion.a>
        <motion.a
          href="#about"
          className="px-8 py-2 text-base md:text-lg font-semibold rounded-xl
                        bg-white/10 backdrop-blur-sm border border-white/30 text-white
                        hover:bg-white/20 hover:border-white/50 transition-all duration-300"
          style={{ fontFamily: "var(--font-display)" }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          See The Risk
        </motion.a>
      </motion.div>

      {/* Download Section */}
      <motion.div
        className="mt-10 flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-2">
          <span className="hidden sm:block h-[1px] w-8 bg-gradient-to-r from-transparent to-white/40 rounded-full" />
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/70 font-medium">
            Free to Download &bull; Zero Subscription Model
          </p>
          <span className="hidden sm:block h-[1px] w-8 bg-gradient-to-l from-transparent to-white/40 rounded-full" />
        </div>

        <div className="flex flex-row items-center gap-3">
          {/* Google Play Store */}
          <motion.a
            href="https://play.google.com/store/apps/details?id=com.mi.vocoxp"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-5 py-2.5 rounded-xl
                       bg-white/10 backdrop-blur-md border border-white/20
                       hover:bg-white/20 hover:border-white/40 transition-all duration-300"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg
              viewBox="0 0 512 512"
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M270.7 264.9L46.1 496.4c5.3 7.4 14.2 11.6 23.5 11.6 5.3 0 10.6-1.5 15.2-4.4L332.4 353l-61.7-88.1z"
                fill="#EA4335"
              />
              <path
                d="M430.8 236.8L337 183.2 270.7 264.9l66.5 93.2 93.7-54.6c14.5-8.4 23.1-23.6 23.1-40.3s-8.6-32-23.2-26.4z"
                fill="#FBBC04"
              />
              <path
                d="M46.1 16.2C44.1 21.6 43 27.5 43 33.8v444.4c0 6.3 1.1 12.2 3.1 17.6l228.3-230.9L46.1 16.2z"
                fill="#4285F4"
              />
              <path
                d="M272.4 256L337 183.2 84.8 36c-4.6-2.9-9.9-4.4-15.2-4.4-9.3 0-18.2 4.2-23.5 11.6L272.4 256z"
                fill="#34A853"
              />
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider leading-none">
                Get it on
              </span>
              <span className="text-sm md:text-base font-semibold text-white leading-tight">
                Google Play
              </span>
            </div>
          </motion.a>

          {/* Apple App Store */}
          <motion.a
            href="https://apps.apple.com/in/app/vocoxp/id6756875071"
            className="group flex items-center gap-2.5 px-5 py-2.5 rounded-xl
                       bg-white/10 backdrop-blur-md border border-white/20
                       hover:bg-white/20 hover:border-white/40 transition-all duration-300 relative"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7" fill="white">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider leading-none">
                Download on
              </span>
              <span className="text-sm md:text-base font-semibold text-white leading-tight">
                App Store
              </span>
            </div>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Slide indicators component
const SlideIndicators = ({ currentSlide, totalSlides, onSlideChange }) => {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-3">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSlideChange(index)}
          className="group relative p-2"
          aria-label={`Go to slide ${index + 1}`}
        >
          <motion.div
            className={`w-12 h-1 rounded-full transition-all duration-300
              ${index === currentSlide ? "bg-blue-600" : "bg-slate-300 group-hover:bg-slate-400"}`}
            layoutId="slideIndicator"
          >
            {index === currentSlide && (
              <motion.div
                className="h-full bg-blue-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
                key={currentSlide}
              />
            )}
          </motion.div>
        </button>
      ))}
    </div>
  );
};

// Export both components and slides data
export { HeroContent, SlideIndicators, heroSlides };
export default HeroContent;
