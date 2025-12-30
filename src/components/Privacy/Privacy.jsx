import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield, Lock, Eye, FileCheck, Server, UserCheck,
  CheckCircle, ArrowRight, Fingerprint, KeyRound,
  ShieldCheck, Database, Verified
} from "lucide-react";

// Import document images for verification showcase
import aadharImg from "../../assets/doc/aadhar.webp";
import passportImg from "../../assets/doc/passport.webp";
import pancardImg from "../../assets/doc/pancard.webp";
import drivingImg from "../../assets/doc/driving.webp";
import voterImg from "../../assets/doc/voter.webp";
import digitalImg from "../../assets/doc/digital.webp";

const Privacy = () => {
  const [activeDoc, setActiveDoc] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const privacyFeatures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "Military-grade AES-256 encryption protects your data in transit and at rest.",
      color: "from-emerald-500 to-teal-400",
      bgColor: "bg-gradient-to-br from-emerald-500/10 to-teal-400/10",
    },
    {
      icon: Shield,
      title: "Privacy-First Design",
      description: "Zero data sharing with third parties. Your information stays with you.",
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-400/10",
    },
    {
      icon: UserCheck,
      title: "Role-Based Access",
      description: "Granular permissions ensure only authorized personnel access sensitive data.",
      color: "from-purple-500 to-pink-400",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-pink-400/10",
    },
    {
      icon: FileCheck,
      title: "Full Audit Logs",
      description: "Complete traceability of every action for compliance and accountability.",
      color: "from-orange-500 to-amber-400",
      bgColor: "bg-gradient-to-br from-orange-500/10 to-amber-400/10",
    },
    {
      icon: Server,
      title: "Secure Infrastructure",
      description: "Enterprise-grade servers with 24/7 monitoring and threat detection.",
      color: "from-rose-500 to-red-400",
      bgColor: "bg-gradient-to-br from-rose-500/10 to-red-400/10",
    },
    {
      icon: Eye,
      title: "Transparent Practices",
      description: "Clear policies on data handling, retention, and your complete rights.",
      color: "from-indigo-500 to-violet-400",
      bgColor: "bg-gradient-to-br from-indigo-500/10 to-violet-400/10",
    },
  ];

  const verifiedDocuments = [
    { name: "Aadhaar Card", image: aadharImg, verified: true },
    { name: "Passport", image: passportImg, verified: true },
    { name: "PAN Card", image: pancardImg, verified: true },
    { name: "Driving License", image: drivingImg, verified: true },
    { name: "Voter ID", image: voterImg, verified: true },
    { name: "Digital ID", image: digitalImg, verified: true },
  ];

  const securityStats = [
    { value: "256-bit", label: "AES Encryption", icon: KeyRound },
    { value: "99.99%", label: "Uptime SLA", icon: Server },
    { value: "0", label: "Data Breaches", icon: ShieldCheck },
    { value: "24/7", label: "Monitoring", icon: Eye },
  ];

  return (
    <section id="privacy" className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/30 to-white" />

        {/* Floating Security Orbs */}
        <motion.div
          className="absolute top-20 right-20 w-80 h-80 bg-emerald-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-10 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-emerald-300/10 to-cyan-300/10 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #059669 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50 mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span className="text-emerald-700 text-sm font-semibold">Privacy & Security</span>
          </motion.div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Your Data,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-[length:200%_auto] animate-gradient-text">
              Protected
            </span>
          </h2>

          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Built with security at its core. Enterprise-grade encryption, strict access controls,
            and complete transparency—your privacy is not just a feature, it's our foundation.
          </p>
        </motion.div>

        {/* Security Stats Bar */}
        <motion.div
          className="mb-20 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.4) 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }} />
          </div>

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6">
            {securityStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/20 mb-3">
                  <stat.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>
                  {stat.value}
                </div>
                <div className="text-emerald-300/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/20 rounded-full blur-3xl" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Left: Document Verification Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200/50 mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <Fingerprint className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 text-sm font-semibold">Verified Documents</span>
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
                Secure Document Verification
              </h3>
              <p className="text-slate-600 mt-3">
                All government-issued IDs are verified through official channels with
                end-to-end encryption throughout the process.
              </p>
            </div>

            {/* Document Carousel */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-100 to-white border border-slate-200/50 p-6">
              {/* Active Document Display */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-white shadow-lg">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeDoc}
                    src={verifiedDocuments[activeDoc].image}
                    alt={verifiedDocuments[activeDoc].name}
                    className="w-full h-full object-contain p-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>

                {/* Verified Badge */}
                <motion.div
                  className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-emerald-500 rounded-full text-white text-sm font-medium"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  <Verified className="w-4 h-4" />
                  Verified
                </motion.div>

                {/* Document Name */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-lg font-semibold text-slate-800">
                    {verifiedDocuments[activeDoc].name}
                  </span>
                </div>
              </div>

              {/* Document Thumbnails */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {verifiedDocuments.map((doc, index) => (
                  <motion.button
                    key={index}
                    className={`flex-shrink-0 w-16 h-12 rounded-xl overflow-hidden border-2 transition-all ${activeDoc === index
                        ? "border-emerald-500 shadow-lg shadow-emerald-500/20"
                        : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    onClick={() => setActiveDoc(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-contain bg-white p-1"
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Privacy Features */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200/50 mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <Database className="w-4 h-4 text-purple-600" />
                <span className="text-purple-700 text-sm font-semibold">Security Features</span>
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
                Enterprise-Grade Protection
              </h3>
            </div>

            {privacyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const isHovered = hoveredFeature === index;

              return (
                <motion.div
                  key={index}
                  className={`relative p-5 rounded-2xl cursor-pointer transition-all duration-300 ${isHovered
                      ? "bg-white shadow-xl border-2 border-emerald-200"
                      : "bg-white/60 border border-slate-200/50 hover:bg-white hover:shadow-lg"
                    }`}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{feature.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                    <motion.div
                      animate={{ x: isHovered ? 5 : 0 }}
                      className="flex-shrink-0 mt-1"
                    >
                      <ArrowRight className={`w-5 h-5 transition-colors ${isHovered ? "text-emerald-600" : "text-slate-400"}`} />
                    </motion.div>
                  </div>

                  {/* Active Indicator */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        exit={{ scaleY: 0 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Compliance & Trust Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto p-8 md:p-10 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200/30">
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {["GDPR", "ISO 27001", "SOC 2", "HIPAA Ready"].map((badge, index) => (
                <motion.div
                  key={badge}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-emerald-200 shadow-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-medium text-slate-700">{badge}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-slate-600 text-lg mb-4">
              VOCOxP complies with applicable data protection regulations and industry standards.
            </p>

            <motion.a
              href="https://vocoxp.com/uploads/LEGAL_TERMS.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-medium shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30 transition-shadow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FileCheck className="w-5 h-5" />
              Read Full Privacy Policy
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Privacy;
