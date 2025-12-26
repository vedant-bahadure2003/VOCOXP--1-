import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const ParticleEffect = ({ count = 50 }) => {
    // Generate particles with enhanced random properties
    const particles = useMemo(() => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 5 + 2,
            duration: Math.random() * 12 + 8,
            delay: Math.random() * 4,
            opacity: Math.random() * 0.4 + 0.2,
        }));
    }, [count]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
            {/* Enhanced Rising Particles with glow */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                        background: `rgba(59, 130, 246, ${particle.opacity})`,
                        boxShadow: `0 0 ${particle.size * 2}px rgba(59, 130, 246, ${particle.opacity * 0.8})`,
                    }}
                    animate={{
                        y: [-30, -150],
                        x: [0, Math.random() * 60 - 30],
                        opacity: [0, particle.opacity, particle.opacity * 0.8, 0],
                        scale: [0.5, 1, 1.2, 0.8],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: 'easeOut',
                    }}
                />
            ))}

            {/* Enhanced Floating Dust/Accent Particles */}
            {Array.from({ length: 25 }, (_, i) => {
                const size = Math.random() * 4 + 1;
                const opacity = Math.random() * 0.5 + 0.2;
                return (
                    <motion.div
                        key={`dust-${i}`}
                        className="absolute rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: size,
                            height: size,
                            background: `rgba(30, 64, 175, ${opacity})`,
                            boxShadow: `0 0 ${size * 3}px rgba(30, 64, 175, ${opacity * 0.6})`,
                        }}
                        animate={{
                            y: [0, -60, 0],
                            x: [0, Math.random() * 40 - 20, 0],
                            opacity: [opacity * 0.3, opacity, opacity * 0.3],
                            scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                            duration: Math.random() * 8 + 6,
                            repeat: Infinity,
                            delay: Math.random() * 4,
                            ease: 'easeInOut',
                        }}
                    />
                );
            })}

            {/* Enhanced Light Gradient Layers */}
            <motion.div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at 50% 100%, rgba(59, 130, 246, 0.12) 0%, transparent 60%)',
                }}
                animate={{
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <motion.div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at 30% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)',
                }}
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2,
                }}
            />

            <motion.div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at 70% 50%, rgba(30, 64, 175, 0.08) 0%, transparent 50%)',
                }}
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 4,
                }}
            />
        </div>
    );
};

export default ParticleEffect;
