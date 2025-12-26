import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import ThreatOverlay from './ThreatOverlay';
import ParticleEffect from './ParticleEffect';
import { HeroContent, SlideIndicators, heroSlides } from './HeroContent';

const Hero = () => {
    const heroRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-advance slides every 6 seconds
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, currentSlide]);

    // Pause autoplay on user interaction, resume after 10 seconds
    const handleSlideChange = (index) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    // Parallax scroll effect
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

    // Image transition variants - Smooth crossfade
    const imageVariants = {
        enter: {
            opacity: 0,
            scale: 1.05,
        },
        center: {
            opacity: 1,
            scale: 1,
            transition: {
                opacity: { duration: 1.0, ease: [0.4, 0, 0.2, 1] },
                scale: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
            },
        },
        exit: {
            opacity: 0,
            scale: 1,
            transition: {
                opacity: { duration: 1.0, ease: [0.4, 0, 0.2, 1] },
                scale: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
            },
        },
    };

    return (
        <section
            ref={heroRef}
            id="hero"
            className="relative min-h-screen w-full overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}
        >
            {/* Background Images with Smooth Transitions */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y: backgroundY }}
            >
                <AnimatePresence initial={false}>
                    <motion.div
                        key={currentSlide}
                        className="absolute inset-0"
                        variants={imageVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                    >
                        {/* Main Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
                            style={{
                                backgroundImage: `url(${heroSlides[currentSlide].image})`,
                                filter: 'brightness(0.8) contrast(1.2) saturate(1.1) grayscale(0.2)',
                            }}
                        />

                        {/* Dark Gradient Overlay - Enhances image visibility */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background: `
                                    linear-gradient(to top, 
                                        rgba(15, 23, 42, 0.85) 0%, 
                                        rgba(15, 23, 42, 0.65) 30%,
                                        rgba(30, 41, 59, 0.45) 50%,
                                        rgba(30, 41, 59, 0.25) 70%,
                                        rgba(51, 65, 85, 0.15) 90%,
                                        rgba(71, 85, 105, 0.05) 100%
                                    )
                                `,
                            }}
                        />

                        {/* Enhanced Blue Accent Glow - Pulsing */}
                        <motion.div
                            className="absolute inset-0"
                            style={{
                                background: 'radial-gradient(ellipse at 50% 40%, rgba(59, 130, 246, 0.2) 0%, rgba(30, 64, 175, 0.1) 30%, transparent 70%)',
                            }}
                            animate={{
                                opacity: [0.6, 1, 0.6],
                            }}
                            transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />

                        {/* Subtle Vignette for Depth */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background: 'radial-gradient(ellipse at center, transparent 20%, rgba(15, 23, 42, 0.3) 100%)',
                            }}
                        />
                    </motion.div>
                </AnimatePresence>
            </motion.div>

            {/* Threat Overlay Effects */}
            <ThreatOverlay />

            {/* Particle Effects */}
            <motion.div style={{ opacity: overlayOpacity }}>
                <ParticleEffect count={80} />
            </motion.div>

            {/* Hero Content with Slide Transitions */}
            <AnimatePresence mode="wait">
                <HeroContent key={currentSlide} currentSlide={currentSlide} />
            </AnimatePresence>

            {/* Slide Indicators */}
            <SlideIndicators
                currentSlide={currentSlide}
                totalSlides={heroSlides.length}
                onSlideChange={handleSlideChange}
            />

            {/* Slide Navigation Arrows */}
            <div className="absolute bottom-10 right-10 z-30 hidden md:flex items-center gap-2">
                <motion.button
                    className="w-10 h-10 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center
                     text-slate-500 hover:text-blue-600 hover:bg-white/90 transition-all shadow-md"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSlideChange((currentSlide - 1 + heroSlides.length) % heroSlides.length)}
                    aria-label="Previous slide"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </motion.button>
                <motion.button
                    className="w-10 h-10 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center
                     text-slate-500 hover:text-blue-600 hover:bg-white/90 transition-all shadow-md"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSlideChange((currentSlide + 1) % heroSlides.length)}
                    aria-label="Next slide"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </motion.button>
            </div>

            {/* Bottom Dark Gradient Fade */}
            <div
                className="absolute bottom-0 left-0 right-0 h-48 z-10 pointer-events-none"
                style={{
                    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.6) 30%, transparent 100%)',
                }}
            />
        </section>
    );
};

export default Hero;
