import React from 'react';
import { motion } from 'framer-motion';
import RiskCard, { riskScenarios } from './RiskCard';
import SolutionReveal from './SolutionReveal';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <section id="about" className="relative py-20 md:py-32">
            {/* Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: 'linear-gradient(180deg, var(--color-void) 0%, #f1f5f9 50%, var(--color-void) 100%)',
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        className="inline-block text-red-600/80 text-sm uppercase tracking-[0.25em] mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        The Real Threat
                    </motion.span>

                    <h2
                        className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        What If The Next Person
                        <br />
                        <span className="text-gradient-danger">Shouldn't Be There?</span>
                    </h2>

                    <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Every day, unverified individuals walk through doors that should protect you.
                        Handwritten logs, verbal entries, and photocopied IDs create dangerous gaps.
                    </p>
                </motion.div>

                {/* Risk Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {riskScenarios.map((scenario, index) => (
                        <RiskCard
                            key={index}
                            icon={scenario.icon}
                            title={scenario.title}
                            risk={scenario.risk}
                            description={scenario.description}
                            index={index}
                        />
                    ))}
                </motion.div>

                {/* Transition Statement */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 text-slate-500"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <span className="w-12 h-px bg-gradient-to-r from-transparent to-slate-400" />
                        <span className="text-sm uppercase tracking-widest">But there's a way</span>
                        <span className="w-12 h-px bg-gradient-to-l from-transparent to-slate-400" />
                    </motion.div>
                </motion.div>

                {/* Solution Reveal */}
                <SolutionReveal />
            </div>
        </section>
    );
};

export default About;
