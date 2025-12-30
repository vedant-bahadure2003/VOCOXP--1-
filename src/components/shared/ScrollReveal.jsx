import React, { memo } from 'react';
import { motion } from 'framer-motion';

/**
 * ScrollReveal - Optimized reusable wrapper for scroll-triggered animations
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child elements to animate
 * @param {string} props.direction - Animation direction: 'up', 'down', 'left', 'right'
 * @param {number} props.delay - Animation delay in seconds
 * @param {number} props.duration - Animation duration in seconds
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.once - Whether to animate only once (default: true)
 */
const ScrollReveal = memo(({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.5, // Reduced from 0.6 for snappier feel
    className = '',
    once = true,
}) => {
    // Calculate initial position based on direction - reduced offsets for better performance
    const getInitialPosition = () => {
        switch (direction) {
            case 'up':
                return { y: 20, x: 0 }; // Reduced from 40
            case 'down':
                return { y: -20, x: 0 }; // Reduced from -40
            case 'left':
                return { y: 0, x: 20 }; // Reduced from 40
            case 'right':
                return { y: 0, x: -20 }; // Reduced from -40
            default:
                return { y: 20, x: 0 };
        }
    };

    const initial = getInitialPosition();

    const variants = {
        hidden: {
            opacity: 0,
            y: initial.y,
            x: initial.x,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration,
                delay,
                ease: [0.16, 1, 0.3, 1], // Cinematic easing
            },
        },
    };

    return (
        <motion.div
            className={className}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: '-30px', amount: 0.1 }}
            style={{ willChange: 'transform, opacity' }}
        >
            {children}
        </motion.div>
    );
});

ScrollReveal.displayName = 'ScrollReveal';

export default ScrollReveal;

