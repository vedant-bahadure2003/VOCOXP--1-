import React from 'react';
import { motion } from 'framer-motion';

const ThreatOverlay = () => {
    return (
        <div className="absolute inset-0 pointer-events-none z-10">
            {/* Enhanced Vignette with stronger pulse */}
            <motion.div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 40%, rgba(59, 130, 246, 0.08) 100%)',
                }}
                animate={{
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Multiple Scan Lines for depth */}
            <motion.div
                className="absolute left-0 w-full h-1"
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
                }}
                animate={{
                    top: ['-5%', '105%'],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />

            <motion.div
                className="absolute left-0 w-full h-0.5"
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(30, 64, 175, 0.2), transparent)',
                }}
                animate={{
                    top: ['-5%', '105%'],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 1.5,
                }}
            />

            {/* Enhanced Blue Edge Pulses - Left */}
            <motion.div
                className="absolute left-0 top-0 h-full w-48"
                style={{
                    background: 'linear-gradient(to right, rgba(59, 130, 246, 0.15), transparent)',
                }}
                animate={{
                    opacity: [0.5, 0.9, 0.5],
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Enhanced Blue Edge Pulses - Right */}
            <motion.div
                className="absolute right-0 top-0 h-full w-48"
                style={{
                    background: 'linear-gradient(to left, rgba(59, 130, 246, 0.15), transparent)',
                }}
                animate={{
                    opacity: [0.5, 0.9, 0.5],
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1.25,
                }}
            />

            {/* Enhanced Blue Edge Pulses - Top */}
            <motion.div
                className="absolute left-0 top-0 h-32 w-full"
                style={{
                    background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.12), transparent)',
                }}
                animate={{
                    opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Enhanced Corner Brackets - Top Left */}
            <motion.div
                className="absolute top-6 left-6 w-20 h-20"
                style={{
                    border: '3px solid rgba(59, 130, 246, 0.4)',
                    borderRight: 'none',
                    borderBottom: 'none',
                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
                }}
                animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Enhanced Corner Brackets - Top Right */}
            <motion.div
                className="absolute top-6 right-6 w-20 h-20"
                style={{
                    border: '3px solid rgba(59, 130, 246, 0.4)',
                    borderLeft: 'none',
                    borderBottom: 'none',
                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
                }}
                animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                }}
            />

            {/* Enhanced Corner Brackets - Bottom Left */}
            <motion.div
                className="absolute bottom-6 left-6 w-20 h-20"
                style={{
                    border: '3px solid rgba(59, 130, 246, 0.4)',
                    borderRight: 'none',
                    borderTop: 'none',
                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
                }}
                animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                }}
            />

            {/* Enhanced Corner Brackets - Bottom Right */}
            <motion.div
                className="absolute bottom-6 right-6 w-20 h-20"
                style={{
                    border: '3px solid rgba(59, 130, 246, 0.4)',
                    borderLeft: 'none',
                    borderTop: 'none',
                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
                }}
                animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1.5,
                }}
            />

            {/* Enhanced Grid Overlay */}
            <motion.div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(30, 64, 175, 0.06) 1px, transparent 5px),
                        linear-gradient(90deg, rgba(30, 64, 175, 0.06) 1px, transparent 5px)
                    `,
                    backgroundSize: '40px 40px',
                }}
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Center Pulse Effect */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                }}
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
        </div>
    );
};

export default ThreatOverlay;
