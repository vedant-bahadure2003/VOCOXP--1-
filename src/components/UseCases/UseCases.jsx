import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import {
    Car,
    Bike,
    ShieldCheck,
    Scan,
    UserCheck,
    Clock,
    BadgeCheck,
    AlertTriangle,
    CheckCircle2,
    Fingerprint,
    FileCheck,
    Building2,
} from "lucide-react";

// Import images
import testDriveImg from "../../assets/images/test-drive1.png";
import rentalVerificationImg from "../../assets/images/rental-verification.png";

const UseCases = () => {
    const testDriveFeatures = [
        {
            icon: Scan,
            title: "Instant License Scan",
            description: "AI-powered document scanning verifies driving license authenticity in seconds",
        },
        {
            icon: UserCheck,
            title: "Identity Confirmation",
            description: "Real-time face matching ensures the person presenting ID is the license holder",
        },
        {
            icon: FileCheck,
            title: "Digital Record Keeping",
            description: "Maintain comprehensive audit trails for every test drive conducted",
        },
        {
            icon: Clock,
            title: "Quick Verification",
            description: "Complete verification process in under 30 seconds without delays",
        },
    ];

    const rentalFeatures = [
        {
            icon: Fingerprint,
            title: "Biometric Verification",
            description: "Advanced biometric checks ensure genuine customer identity",
        },
        {
            icon: BadgeCheck,
            title: "License Validation",
            description: "Verify license validity, expiration, and driving eligibility instantly",
        },
        {
            icon: AlertTriangle,
            title: "Risk Assessment",
            description: "Get instant alerts for flagged or suspicious documents",
        },
        {
            icon: Building2,
            title: "Business Integration",
            description: "Seamlessly integrate with existing rental management systems",
        },
    ];

    // Simplified animation variants for better performance
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <section id="usecases" className="relative py-12 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50">
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 border border-cyan-200/50 mb-6">
                        <ShieldCheck className="w-4 h-4 text-cyan-600" />
                        <span className="text-cyan-700 text-sm font-semibold">
                            Industry Solutions
                        </span>
                    </div>
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Trusted Verification for{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">
                            Every Industry
                        </span>
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        From showroom test drives to beachside rentals, VOCOxP ensures secure
                        identity verification wherever you need it.
                    </p>
                </motion.div>

                {/* Test Drive Showroom Section */}
                <motion.div
                    className="mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                >
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        {/* Left - Image */}
                        <motion.div
                            className="relative order-2 lg:order-1"
                            variants={fadeInLeft}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="relative group">
                                {/* Main Image Container */}
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20">
                                    <img
                                        src={testDriveImg}
                                        alt="VOCOxP Test Drive Verification"
                                        className="w-full h-auto object-cover"
                                        loading="lazy"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-transparent" />
                                </div>

                                {/* Floating Badge */}
                                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 z-20">
                                    <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl shadow-xl border border-blue-100">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                                            <Car className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-900">Test Drive</div>
                                            <div className="text-xs text-slate-500">Secure & Fast</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl" />
                            </div>
                        </motion.div>

                        {/* Right - Content */}
                        <motion.div
                            className="order-1 lg:order-2"
                            variants={fadeInRight}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200/50 mb-4">
                                <Car className="w-4 h-4 text-blue-600" />
                                <span className="text-blue-700 text-xs font-semibold uppercase tracking-wider">
                                    Showroom Solution
                                </span>
                            </div>

                            <h3
                                className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4"
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                Test Drive Verification at{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                                    Showrooms
                                </span>
                            </h3>

                            <p className="text-slate-600 text-base md:text-lg mb-6 leading-relaxed">
                                Ensure every test drive starts with verified customer credentials.
                                VOCOxP empowers automotive showrooms to instantly authenticate
                                driving licenses, protecting your valuable assets while delivering
                                a seamless customer experience.
                            </p>

                            {/* Features Grid */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                {testDriveFeatures.map((feature, index) => {
                                    const Icon = feature.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="group p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/50 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300">
                                                    <Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-slate-900 text-sm mb-1">
                                                        {feature.title}
                                                    </h4>
                                                    <p className="text-slate-500 text-xs leading-relaxed">
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Divider */}
                <div className="flex items-center justify-center gap-4 mb-20">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                </div>

                {/* Bike Rental Verification Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                >
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        {/* Left - Content */}
                        <motion.div
                            variants={fadeInLeft}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50 mb-4">
                                <Bike className="w-4 h-4 text-emerald-600" />
                                <span className="text-emerald-700 text-xs font-semibold uppercase tracking-wider">
                                    Rental Solution
                                </span>
                            </div>

                            <h3
                                className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4"
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                Secure{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                                    Bike Rental
                                </span>{" "}
                                Verification
                            </h3>

                            <p className="text-slate-600 text-base md:text-lg mb-6 leading-relaxed">
                                Whether at tourist destinations, city rental hubs, or coastal getaways,
                                VOCOxP ensures your rental fleet is in trusted hands. Verify customer
                                identity and driving credentials before handing over the keys, reducing
                                theft risk and ensuring compliance.
                            </p>

                            {/* Features Grid */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                {rentalFeatures.map((feature, index) => {
                                    const Icon = feature.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="group p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/50 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center flex-shrink-0 group-hover:from-emerald-500 group-hover:to-teal-500 transition-all duration-300">
                                                    <Icon className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-slate-900 text-sm mb-1">
                                                        {feature.title}
                                                    </h4>
                                                    <p className="text-slate-500 text-xs leading-relaxed">
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Right - Image */}
                        <motion.div
                            className="relative"
                            variants={fadeInRight}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="relative group">
                                {/* Main Image Container */}
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/20">
                                    <img
                                        src={rentalVerificationImg}
                                        alt="VOCOxP Bike Rental Verification"
                                        className="w-full h-auto object-cover"
                                        loading="lazy"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-tl from-emerald-900/20 via-transparent to-transparent" />
                                </div>

                                {/* Floating Badge */}
                                <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 z-20">
                                    <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl shadow-xl border border-emerald-100">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                                            <CheckCircle2 className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-900">Verified ✓</div>
                                            <div className="text-xs text-slate-500">License Detected</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Status Card */}
                                <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 z-20">
                                    <div className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl shadow-lg">
                                        <div className="flex items-center gap-2 text-white text-sm font-semibold">
                                            <Bike className="w-4 h-4" />
                                            <span>Rental Ready</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-2xl" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Bottom Stats Section */}
                <motion.div
                    className="mt-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {[
                            { value: "10,000+", label: "Test Drives Verified", icon: Car },
                            { value: "5,000+", label: "Rentals Secured", icon: Bike },
                            { value: "100%", label: "Document Accuracy", icon: ShieldCheck },
                            { value: "< 30s", label: "Verification Time", icon: Clock },
                        ].map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={index}
                                    className="relative p-5 md:p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/50 text-center group hover:border-blue-200 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                                        <Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs md:text-sm text-slate-500">
                                        {stat.label}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default UseCases;
