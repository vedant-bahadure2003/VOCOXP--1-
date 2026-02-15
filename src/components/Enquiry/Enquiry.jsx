import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  User,
  Mail,
  Building,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Shield,
  Sparkles,
} from "lucide-react";
import FormField from "./FormField";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build email HTML template
    const emailHtml = `
      <p>Dear Team,</p>
      <p>A new enquiry has been submitted through the VOCOxP website contact form.</p>
      <h4>Enquiry Details:</h4>
      <ul>
        <li><strong>Name:</strong> ${formData.name}</li>
        <li><strong>Email:</strong> ${formData.email}</li>
        <li><strong>Organization:</strong> ${
          formData.organization || "N/A"
        }</li>
        <li><strong>Message:</strong> ${formData.message}</li>
      </ul>
      <p>Please respond to this enquiry at your earliest convenience.</p>
      <p><b>VOCOxP Website<br>Micro Integrated Semi Conductor Systems Pvt. Ltd.</b></p>
    `;

    try {
      const response = await fetch(
        "https://vocoxp.staffhandler.com/vocoxp/tenant/tenant_backend/api/tenant/email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: "support@microintegrated.in",
            subject: `VOCOxP Website Enquiry from ${formData.name} - ${
              formData.organization || "Individual"
            }`,
            html: emailHtml,
            from: '"VOCOxP Website" <transactions@mounarchtech.com>',
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to send enquiry");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", organization: "", message: "" });
    } catch (error) {
      alert("Failed to send enquiry. Please try again later.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    }
  };

  // Calculate form completion progress
  const calculateProgress = () => {
    let filled = 0;
    if (formData.name) filled++;
    if (formData.email) filled++;
    if (formData.organization) filled++;
    if (formData.message) filled++;
    return (filled / 4) * 100;
  };

  const progress = calculateProgress();

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="enquiry" className="relative py-8 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, var(--color-void) 0%, #f1f5f9 30%, #e2e8f0 70%, var(--color-void) 100%)",
        }}
      />

      {/* Decorative Floating Elements */}
      <motion.div
        className="absolute top-[10%] -left-[5%] w-96 h-96 rounded-full pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)",
        }}
        animate={{
          y: [0, -30, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] -right-[5%] w-80 h-80 rounded-full pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(circle, rgba(30, 64, 175, 0.1) 0%, transparent 70%)",
        }}
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
          scale: [1, 0.95, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[40%] right-[15%] w-48 h-48 rounded-full pointer-events-none z-[1] hidden md:block"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 15, 0],
          y: [0, -10, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 text-blue-700 text-sm font-semibold"
            style={{
              background:
                "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(30, 64, 175, 0.1) 100%)",
              border: "1px solid rgba(59, 130, 246, 0.2)",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Start Your Journey</span>
          </motion.div>

          <h2
            className="text-3xl md:text-5xl font-bold text-slate-800 mb-5 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Protect
            </span>{" "}
            Your Space?
          </h2>

          <p className="text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            Transform your security infrastructure with VOCOxP. Fill out the
            form below and our expert team will reach out within 24 hours.
          </p>
        </motion.div>

        {/* Main Form Area */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 items-start "
          variants={itemVariants}
        >
          {/* Left Side - Info Cards with Wave Route Structure */}
          <div className="relative flex flex-col justify-between lg:order-1 order-2 h-full min-h-[450px] ">
            {/* Decorative Wave Path SVG */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block"
              preserveAspectRatio="none"
              viewBox="0 0 300 450"
            >
              <motion.path
                d="M 50 50 Q 250 100 250 225 Q 250 350 50 400"
                fill="none"
                stroke="url(#waveGradient)"
                strokeWidth="2"
                strokeDasharray="8 6"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient
                  id="waveGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>

            {/* Card 1 - Left Position */}
            <motion.div
              className="relative z-10 flex items-start gap-4 p-5 bg-white/95 border border-blue-900/5 rounded-2xl shadow-sm transition-all duration-300 hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/10 lg:w-[85%] lg:self-start"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div
                className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0 text-blue-700"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(30, 64, 175, 0.1) 100%)",
                }}
              >
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-800 mb-0.5">
                  Enterprise Security
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Bank-grade encryption and compliance ready solutions
                </p>
              </div>
            </motion.div>

            {/* Card 2 - Right Position (Center-Right) */}
            <motion.div
              className="relative z-10 flex items-start gap-4 p-5 bg-white/95 border border-violet-900/5 rounded-2xl shadow-sm transition-all duration-300 hover:border-violet-500/20 hover:shadow-lg hover:shadow-violet-500/10 lg:w-[75%] lg:self-end"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div
                className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0 text-violet-600"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(124, 58, 237, 0.1) 100%)",
                }}
              >
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-800 mb-0.5">
                  24/7 Support
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Dedicated support team at your service round the clock
                </p>
              </div>
            </motion.div>

            {/* Card 3 - Left Position (Back to Left) */}
            <motion.div
              className="relative z-10 flex items-start gap-4 p-5 bg-white/95 border border-emerald-900/5 rounded-2xl shadow-sm transition-all duration-300 hover:border-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/10 lg:w-[85%] lg:self-start"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div
                className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0 text-emerald-600"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.1) 100%)",
                }}
              >
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-800 mb-0.5">
                  Quick Setup
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Get started in minutes with seamless integration
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Form */}
          <motion.div
            className="bg-white/95 backdrop-blur-xl border border-blue-900/5 rounded-3xl p-8 md:p-10 shadow-xl shadow-blue-500/5 lg:order-2 order-1"
            ref={formRef}
          >
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2 text-sm text-slate-500">
                <span>Completion Progress</span>
                <span className="font-semibold text-blue-600">
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="h-1.5 bg-blue-500/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #3b82f6 0%, #1e40af 100%)",
                  }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  className="text-center py-16 relative overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-emerald-600"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.1) 100%)",
                    }}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", damping: 10, delay: 0.2 }}
                  >
                    <CheckCircle className="w-12 h-12" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-slate-500">
                      Thank you for reaching out. Our team will get back to you
                      shortly.
                    </p>
                  </motion.div>

                  {/* Confetti Animation */}
                  <div className="absolute inset-0 pointer-events-none z-10">
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2.5 h-2.5 rounded-sm top-1/2"
                        style={{
                          left: `${10 + Math.random() * 80}%`,
                          backgroundColor: [
                            "#3b82f6",
                            "#10b981",
                            "#f59e0b",
                            "#8b5cf6",
                          ][i % 4],
                        }}
                        initial={{ y: 0, opacity: 1, scale: 1 }}
                        animate={{
                          y: [0, -100, 200],
                          opacity: [1, 1, 0],
                          scale: [1, 1.2, 0.5],
                          rotate: [0, 360, 720],
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.05,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                      icon={User}
                    />

                    <FormField
                      label="Email Address"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@company.com"
                      required
                      icon={Mail}
                    />
                  </div>

                  <FormField
                    label="Organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="e.g. Acme Corporation"
                    icon={Building}
                  />

                  <FormField
                    label="Your Message"
                    type="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your security needs and how we can help..."
                    required
                    rows={5}
                  />

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full py-4 px-8 mt-2 rounded-xl text-white font-semibold text-base cursor-pointer overflow-hidden transition-all duration-300 disabled:opacity-80 disabled:cursor-not-allowed hover:shadow-2xl hover:shadow-blue-500/30"
                    style={{
                      background:
                        "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)",
                      boxShadow: "0 8px 30px rgba(30, 64, 175, 0.3)",
                      fontFamily: "var(--font-display)",
                    }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.div
                          key="loading"
                          className="flex items-center justify-center gap-2.5"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <motion.div
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                          <span>Sending...</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="default"
                          className="flex items-center justify-center gap-2.5"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <span>Send Enquiry</span>
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Button Glow Effect */}
                    <motion.div
                      className="absolute -inset-0.5 rounded-2xl -z-10"
                      style={{
                        background:
                          "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)",
                        filter: "blur(15px)",
                      }}
                      animate={{
                        opacity: [0.5, 0.8, 0.5],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Bottom Contact Info */}
        <motion.div
          className="text-center mt-10 text-sm text-slate-500"
          variants={itemVariants}
        >
          <p>
            Prefer direct contact? Email us at{" "}
            <motion.a
              href="mailto:contact@microintegrated.in"
              className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              contact@microintegrated.in
            </motion.a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Enquiry;
