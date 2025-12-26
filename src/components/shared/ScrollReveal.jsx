import React from 'react';
import { motion } from 'framer-motion';

/**
 * ScrollReveal - Reusable wrapper for scroll-triggered animations
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child elements to animate
 * @param {string} props.direction - Animation direction: 'up', 'down', 'left', 'right'
 * @param {number} props.delay - Animation delay in seconds
 * @param {number} props.duration - Animation duration in seconds
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.once - Whether to animate only once (default: true)
 */
const ScrollReveal = ({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.6,
    className = '',
    once = true,
}) => {
    // Calculate initial position based on direction
    const getInitialPosition = () => {
        switch (direction) {
            case 'up':
                return { y: 40, x: 0 };
            case 'down':
                return { y: -40, x: 0 };
            case 'left':
                return { y: 0, x: 40 };
            case 'right':
                return { y: 0, x: -40 };
            default:
                return { y: 40, x: 0 };
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
            viewport={{ once, margin: '-50px' }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
