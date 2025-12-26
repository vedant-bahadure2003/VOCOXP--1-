import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Lock, Eye, FileCheck, Users } from 'lucide-react';

const SolutionReveal = () => {
    const features = [
        { icon: Shield, text: 'Digital Identity Verification' },
        { icon: FileCheck, text: 'Document Authentication' },
        { icon: Eye, text: 'Real-time Monitoring' },
        { icon: Lock, text: 'End-to-End Encryption' },
        { icon: Users, text: 'Complete Audit Trail' },
        { icon: CheckCircle, text: 'Instant Access Control' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <motion.div
            className="relative py-20 px-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
        >
            {/* Background Gradient - Light accent */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: 'linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.03) 50%, transparent 100%)',
                }}
            />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Section Title */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Shield className="w-4 h-4 text-blue-600" />
                        <span className="text-blue-600 text-sm font-medium">The Solution</span>
                    </motion.div>

                    <h2
                        className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        VOCOxP Sees What
                        <span className="text-gradient-trust"> You Can't</span>
                    </h2>

                    <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        One platform that verifies identities, authenticates documents, monitors access,
                        and maintains complete audit trails—so every decision is visible and provable.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center gap-3 p-4 md:p-5 rounded-xl bg-gradient-to-br from-blue-50 to-white 
                         border border-blue-100 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, x: 5 }}
                        >
                            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                                <feature.icon className="w-5 h-5 text-blue-600" />
                            </div>
                            <span className="text-slate-700 font-medium text-sm md:text-base">{feature.text}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Trust Statement */}
                <motion.p
                    className="text-center mt-16 text-xl md:text-2xl text-slate-600 font-light italic"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    style={{ fontFamily: 'var(--font-display)' }}
                >
                    "Trust should not be assumed—
                    <span className="text-blue-600 font-normal"> it should be verified.</span>"
                </motion.p>
            </div>
        </motion.div>
    );
};

export default SolutionReveal;
