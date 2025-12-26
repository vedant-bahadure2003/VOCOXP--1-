import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileCheck, Server, UserCheck } from 'lucide-react';

const Privacy = () => {
    const privacyFeatures = [
        {
            icon: Lock,
            title: 'End-to-End Encryption',
            description: 'All data is encrypted in transit and at rest using industry-standard protocols.',
        },
        {
            icon: Shield,
            title: 'Privacy-First Design',
            description: 'We collect only what is necessary and never share personal data with third parties.',
        },
        {
            icon: UserCheck,
            title: 'Role-Based Access',
            description: 'Strict access controls ensure only authorized personnel can view sensitive data.',
        },
        {
            icon: FileCheck,
            title: 'Full Audit Logs',
            description: 'Every action is logged and traceable, ensuring complete accountability.',
        },
        {
            icon: Server,
            title: 'Secure Infrastructure',
            description: 'Enterprise-grade servers with continuous monitoring and threat detection.',
        },
        {
            icon: Eye,
            title: 'Transparent Practices',
            description: 'Clear policies on data handling, retention, and your rights as a user.',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <section id="privacy" className="relative py-20 md:py-32">
            {/* Background with subtle gradient */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: 'linear-gradient(180deg, var(--color-void) 0%, rgba(236, 253, 245, 0.5) 50%, var(--color-void) 100%)',
                }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 mb-6"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Shield className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-600 text-sm font-medium">Your Privacy Matters</span>
                    </motion.div>

                    <h2
                        className="text-3xl md:text-5xl font-bold text-slate-800 mb-6"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Security You Can Trust
                    </h2>

                    <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        VOCOxP is built with security and privacy at its core. Your data is protected
                        by enterprise-grade encryption and strict access controls.
                    </p>
                </motion.div>

                {/* Privacy Features Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {privacyFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="glass-card p-6 group"
                            variants={itemVariants}
                            whileHover={{ y: -5, borderColor: 'rgba(5, 150, 105, 0.3)' }}
                        >
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 
                              flex items-center justify-center mb-5 group-hover:from-emerald-200 group-hover:to-emerald-100 
                              transition-all duration-500">
                                <feature.icon className="w-6 h-6 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
                            </div>

                            <h3
                                className="text-xl font-bold text-slate-800 mb-3"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                {feature.title}
                            </h3>

                            <p className="text-slate-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Compliance Note */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <p className="text-slate-500 text-sm">
                        VOCOxP complies with applicable data protection regulations and industry standards.
                        <br />
                        <a href="#" className="text-emerald-600 hover:text-emerald-700 transition-colors underline underline-offset-2">
                            Read our full Privacy Policy
                        </a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Privacy;
