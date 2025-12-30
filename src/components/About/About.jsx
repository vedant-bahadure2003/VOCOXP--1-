import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ChevronRight, Sparkles, Zap, Target, Lock, Eye, Users } from "lucide-react";

// Import images from assets
import verificationImg from "../../assets/carasoul/ver1.png";
import marketingImg from "../../assets/carasoul/mar2.png";
import usedImg1 from "../../assets/usedVocoXp/used1.png";
import usedImg2 from "../../assets/usedVocoXp/used2.png";

const About = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Shield,
      title: "Digital Identity Verification",
      description: "Real-time identity authentication with advanced AI-powered document scanning and facial recognition technology.",
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-400/10",
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "24/7 surveillance integration with instant alerts and comprehensive visitor tracking across all entry points.",
      color: "from-purple-500 to-pink-400",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-pink-400/10",
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "Military-grade encryption ensuring your data remains protected with zero compromises on security.",
      color: "from-emerald-500 to-teal-400",
      bgColor: "bg-gradient-to-br from-emerald-500/10 to-teal-400/10",
    },
    {
      icon: Users,
      title: "Complete Audit Trail",
      description: "Every entry, exit, and interaction is logged and traceable, providing full accountability and compliance.",
      color: "from-orange-500 to-amber-400",
      bgColor: "bg-gradient-to-br from-orange-500/10 to-amber-400/10",
    },
  ];

  const stats = [
    { value: "99.9%", label: "Accuracy Rate" },
    { value: "500+", label: "Organizations" },
    { value: "1M+", label: "Verifications" },
    { value: "<2s", label: "Response Time" },
  ];

  const useCases = [
    {
      image: verificationImg,
      title: "Instant Verification",
      description: "Verify identities in seconds with our advanced mobile technology",
    },
    {
      image: marketingImg,
      title: "Seamless Integration",
      description: "Works with your existing security infrastructure effortlessly",
    },
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-blue-50/30" />

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Hero Section with Image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-semibold">About VOCOxP</span>
            </motion.div>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Redefining{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_auto] animate-[gradient-shift_3s_linear_infinite]">
                Security
              </span>{" "}
              for the Modern World
            </h2>

            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-8">
              VOCOxP transforms how organizations verify identities and manage access.
              Our cutting-edge platform combines AI-powered verification with seamless
              user experience, ensuring safety without sacrificing convenience.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-slate-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image Stack */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                className="relative z-20 rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={usedImg1}
                  alt="VOCOxP in action"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
              </motion.div>

              {/* Floating Secondary Image */}
              <motion.div
                className="absolute -bottom-8 -left-8 z-30 w-48 md:w-56 rounded-2xl overflow-hidden shadow-xl border-4 border-white"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                animate={{ y: [0, -10, 0] }}
                style={{ animationDuration: "3s", animationIterationCount: "infinite" }}
              >
                <img
                  src={usedImg2}
                  alt="Verification process"
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-40" />
              <div className="absolute -bottom-4 -right-8 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-30" />
            </div>
          </motion.div>
        </div>

        {/* Interactive Features Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Zap className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 text-sm font-semibold">Core Features</span>
            </motion.div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
              Powerful Capabilities at Your Fingertips
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Feature Cards */}
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = activeFeature === index;

                return (
                  <motion.div
                    key={index}
                    className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${isActive
                      ? "bg-white shadow-xl shadow-blue-500/10 border-2 border-blue-200"
                      : "bg-white/50 border border-slate-200/50 hover:bg-white hover:shadow-lg"
                      }`}
                    onClick={() => setActiveFeature(index)}
                    whileHover={{ x: 8 }}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-7 h-7 bg-gradient-to-r ${feature.color} text-transparent `}
                          style={{ stroke: "url(#gradient-" + index + ")" }} />
                        <svg width="0" height="0">
                          <defs>
                            <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" style={{ stopColor: index === 0 ? "#3b82f6" : index === 1 ? "#a855f7" : index === 2 ? "#10b981" : "#f97316" }} />
                              <stop offset="100%" style={{ stopColor: index === 0 ? "#22d3ee" : index === 1 ? "#ec4899" : index === 2 ? "#14b8a6" : "#fbbf24" }} />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                      <motion.div
                        animate={{ x: isActive ? 5 : 0 }}
                        className="flex-shrink-0"
                      >
                        <ChevronRight className={`w-5 h-5 transition-colors ${isActive ? "text-blue-600" : "text-slate-400"}`} />
                      </motion.div>
                    </div>

                    {/* Active Indicator */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          exit={{ scaleY: 0 }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Feature Showcase */}
            <motion.div
              className="relative lg:sticky lg:top-32"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 p-8 min-h-[400px] flex flex-col justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                      backgroundSize: '32px 32px'
                    }} />
                  </div>

                  {/* Dynamic Icon */}
                  <motion.div
                    className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${features[activeFeature].color} flex items-center justify-center mb-6 shadow-lg`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    {React.createElement(features[activeFeature].icon, { className: "w-12 h-12 text-white" })}
                  </motion.div>

                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}>
                    {features[activeFeature].title}
                  </h4>
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    {features[activeFeature].description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="flex flex-wrap gap-3">
                    {["Fast", "Secure", "Reliable", "Scalable"].map((tag, i) => (
                      <motion.span
                        key={tag}
                        className="px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm font-medium"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Decorative Glow */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${features[activeFeature].color} rounded-full blur-3xl opacity-20`} />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>

        {/* Use Cases Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200/50 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Target className="w-4 h-4 text-purple-600" />
              <span className="text-purple-700 text-sm font-semibold">See It In Action</span>
            </motion.div>
            <p className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Real-World Applications
            </p>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Experience how VOCOxP seamlessly integrates into various environments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="group relative rounded-3xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -8 }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <motion.h4
                    className="text-xl md:text-2xl font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
                  >
                    {useCase.title}
                  </motion.h4>
                  <p className="text-white/80 text-sm md:text-base">{useCase.description}</p>

                  {/* Hover Button */}
                  {/* <motion.button
                    className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More <ChevronRight className="w-4 h-4" />
                  </motion.button> */}
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto p-6 rounded-3xl bg-gradient-to-br from-blue-100 to-purple-50 border border-blue-900/30">
            <blockquote
              className="text-lg md:text-xl lg:text-2xl text-slate-700 font-light leading-relaxed"
              style={{ fontFamily: "var(--font-display)" }}
            >
              "Trust should not be assumed—
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}it should be verified.
              </span>"
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-400" />
              <Shield className="w-6 h-6 text-blue-600" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-blue-400" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Add gradient animation keyframes */}
      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default About;
