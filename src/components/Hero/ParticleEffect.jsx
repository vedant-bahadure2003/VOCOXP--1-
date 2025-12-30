import React, { useMemo, memo } from 'react';

/**
 * Optimized ParticleEffect - Uses CSS animations for GPU acceleration
 * Reduced particle count for better performance
 */
const ParticleEffect = memo(({ count = 25 }) => {
    // Generate particles with random properties - memoized to prevent recalculation
    const particles = useMemo(() => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 2,
            duration: Math.random() * 10 + 8,
            delay: Math.random() * 5,
            opacity: Math.random() * 0.3 + 0.15,
            drift: Math.random() * 40 - 20,
        }));
    }, [count]);

    // Generate dust particles - reduced from 25 to 10
    const dustParticles = useMemo(() => {
        return Array.from({ length: 10 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 6 + 5,
            delay: Math.random() * 3,
            opacity: Math.random() * 0.4 + 0.1,
        }));
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
            {/* Rising Particles - CSS animated for GPU acceleration */}
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="absolute rounded-full particle-rise"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                        background: `rgba(59, 130, 246, ${particle.opacity})`,
                        boxShadow: `0 0 ${particle.size * 2}px rgba(59, 130, 246, ${particle.opacity * 0.6})`,
                        animationDuration: `${particle.duration}s`,
                        animationDelay: `${particle.delay}s`,
                        '--drift': `${particle.drift}px`,
                        willChange: 'transform, opacity',
                        transform: 'translateZ(0)',
                    }}
                />
            ))}

            {/* Floating Dust Particles - CSS animated */}
            {dustParticles.map((particle) => (
                <div
                    key={`dust-${particle.id}`}
                    className="absolute rounded-full particle-float"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                        background: `rgba(30, 64, 175, ${particle.opacity})`,
                        boxShadow: `0 0 ${particle.size * 2}px rgba(30, 64, 175, ${particle.opacity * 0.5})`,
                        animationDuration: `${particle.duration}s`,
                        animationDelay: `${particle.delay}s`,
                        willChange: 'transform, opacity',
                        transform: 'translateZ(0)',
                    }}
                />
            ))}

            {/* Static Gradient Layers - No animation for performance */}
            <div
                className="absolute inset-0 gradient-pulse-slow"
                style={{
                    background: 'radial-gradient(ellipse at 50% 100%, rgba(59, 130, 246, 0.1) 0%, transparent 60%)',
                    willChange: 'opacity',
                }}
            />

            <div
                className="absolute inset-0 gradient-pulse-slow"
                style={{
                    background: 'radial-gradient(ellipse at 30% 50%, rgba(59, 130, 246, 0.06) 0%, transparent 50%)',
                    animationDelay: '2s',
                }}
            />
        </div>
    );
});

ParticleEffect.displayName = 'ParticleEffect';

export default ParticleEffect;
