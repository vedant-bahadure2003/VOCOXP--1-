import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Get the base URL from Vite config
const BASE_URL = import.meta.env.BASE_URL || '/';

// Slide data with unique taglines for each scenario
const heroSlides = [
    {
        id: 1,
        image: `${BASE_URL}Images/vocoxp-hero1.png`,
        preHeadline: 'You Think Your Home Is Safe',
        headline: 'The Danger Is Already Inside',
        highlightWord: 'Danger',
        subtext: 'Escaped convicts. Hidden criminals. They could be in your neighborhood right now.',
        subtextSecondary: 'That stranger next door might have a past you\'d never imagine.',
    },
    {
        id: 2,
        image: `${BASE_URL}Images/vocoxp-hero2.png`,
        preHeadline: 'Everyone Looks Professional',
        headline: 'But One Is A Threat',
        highlightWord: 'Threat',
        subtext: 'In a sea of verified employees, one unverified person can cause disaster.',
        subtextSecondary: 'Your workplace security is only as strong as your weakest verification.',
    },
    {
        id: 3,
        image: `${BASE_URL}Images/vocoxp-hero3.png`,
        preHeadline: 'You Trust Them With Your Children',
        headline: 'What If They Can\'t Be Trusted?',
        highlightWord: 'Trusted',
        subtext: 'Background-unchecked teachers. Hidden criminal records. Dangerous secrets.',
        subtextSecondary: 'Schools need protection. Your children deserve verified safety.',
    },
    {
        id: 4,
        image: `${BASE_URL}Images/vocoxp-hero4.png`,
        preHeadline: 'A Day Of Celebration',
        headline: 'Hides A Hidden Risk',
        highlightWord: 'Hidden',
        subtext: 'Fraudulent identities. Concealed intentions. The picture-perfect moment hiding danger.',
        subtextSecondary: 'Trust should never be assumed—it should be verified.',
    },
];

const HeroContent = ({ currentSlide }) => {
    const slide = heroSlides[currentSlide];

    // Letter animation for dramatic text reveal
    const letters = slide.headline.split('');

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
                type: 'spring',
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
            <motion.p
                className="text-sm md:text-base uppercase tracking-[0.3em] text-cyan-300 mb-6 font-semibold"
                style={{
                    textShadow: `
                        0 0 10px rgba(69, 214, 236, 0.8),
                        0 0 20px rgba(34, 211, 238, 0.6),
                        0 0 40px rgba(34, 211, 238, 0.4),
                        0 2px 4px rgba(0, 0, 0, 0.5)
                    `,
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {slide.preHeadline}
            </motion.p>

            {/* Main Headline with Letter Animation */}
            <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8"
                style={{ fontFamily: 'var(--font-display)' }}
                variants={containerVariants}
            >
                {letters.map((letter, index) => (
                    <motion.span
                        key={`${slide.id}-${index}`}
                        variants={letterVariants}
                        className={letter === ' ' ? 'inline-block w-3 md:w-4' : 'inline-block'}
                        style={{
                            color: index >= highlightStart && index < highlightEnd
                                ? '#ef4444'
                                : '#ffffff',
                            textShadow: '0 2px 20px rgba(0, 0, 0, 0.3)',
                        }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.h1>

            {/* Subtext */}
            <motion.p
                className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mb-3 leading-relaxed"
                style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}
                variants={subtextVariants}
            >
                {slide.subtext}
            </motion.p>

            <motion.p
                className="text-base md:text-lg text-gray-300 max-w-2xl mb-12 leading-relaxed"
                style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}
                variants={subtextVariants}
                transition={{ delay: 1 }}
            >
                {slide.subtextSecondary}
            </motion.p>

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
                    className="px-8 py-3.5 text-base md:text-lg font-semibold rounded-xl
                        bg-white/10 backdrop-blur-sm border border-white/30 text-white
                        hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                    style={{ fontFamily: 'var(--font-display)' }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    See The Risk
                </motion.a>
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
              ${index === currentSlide ? 'bg-blue-600' : 'bg-slate-300 group-hover:bg-slate-400'}`}
                        layoutId="slideIndicator"
                    >
                        {index === currentSlide && (
                            <motion.div
                                className="h-full bg-blue-500 rounded-full"
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 6, ease: 'linear' }}
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
