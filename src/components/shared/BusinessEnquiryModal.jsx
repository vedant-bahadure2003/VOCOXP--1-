import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    X,
    Send,
    User,
    Phone,
    Mail,
    MessageSquare,
    Sparkles,
    CheckCircle2,
} from "lucide-react";

const BusinessEnquiryModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const validate = () => {
        const errs = {};
        if (!formData.name.trim()) errs.name = "Name is required";
        if (!formData.mobile.trim()) errs.mobile = "Mobile number is required";
        else if (!/^[0-9]{10}$/.test(formData.mobile.trim()))
            errs.mobile = "Enter a valid 10-digit number";
        if (!formData.email.trim()) errs.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()))
            errs.email = "Enter a valid email";
        if (!formData.message.trim()) errs.message = "Message is required";
        return errs;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) {
            setErrors(errs);
            return;
        }
        setIsSubmitting(true);

        // Build email HTML template (same pattern as Enquiry component)
        const emailHtml = `
      <p>Dear Team,</p>
      <p>A new <strong>Business Partnership Enquiry</strong> has been submitted through the VOCOxP website.</p>
      <h4>Enquiry Details:</h4>
      <ul>
        <li><strong>Name:</strong> ${formData.name}</li>
        <li><strong>Mobile:</strong> ${formData.mobile}</li>
        <li><strong>Email:</strong> ${formData.email}</li>
        <li><strong>Message:</strong> ${formData.message}</li>
      </ul>
      <p>Please respond to this business enquiry at your earliest convenience.</p>
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
                        subject: `VOCOxP Business Partnership Enquiry from ${formData.name}`,
                        html: emailHtml,
                        from: '"VOCOxP Website" <transactions@mounarchtech.com>',
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to send enquiry");
            }

            setIsSubmitted(true);
            setFormData({ name: "", mobile: "", email: "", message: "" });
        } catch (error) {
            alert("Failed to send enquiry. Please try again later.");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => {
                setIsSubmitted(false);
                onClose();
            }, 4000);
        }
    };

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Reset form state when modal closes
    useEffect(() => {
        if (!isOpen) {
            setErrors({});
            setIsSubmitted(false);
        }
    }, [isOpen]);

    const inputFields = [
        {
            name: "name",
            label: "Full Name",
            type: "text",
            icon: User,
            placeholder: "John Doe",
        },
        {
            name: "mobile",
            label: "Mobile Number",
            type: "tel",
            icon: Phone,
            placeholder: "9876543210",
        },
        {
            name: "email",
            label: "Email Address",
            type: "email",
            icon: Mail,
            placeholder: "john@company.com",
        },
    ];

    const confettiColors = ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6"];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0"
                        style={{
                            background:
                                "radial-gradient(ellipse at center, rgba(30,58,138,.45) 0%, rgba(0,0,0,.7) 100%)",
                        }}
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Modal */}
                    <motion.div
                        className="relative w-full max-w-lg rounded-2xl overflow-hidden"
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(255,255,255,.97) 0%, rgba(241,245,249,.97) 100%)",
                            boxShadow:
                                "0 25px 60px -12px rgba(0,0,0,.35), 0 0 0 1px rgba(255,255,255,.15), inset 0 1px 0 rgba(255,255,255,.6)",
                        }}
                        initial={{ opacity: 0, scale: 0.88, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.88, y: 40 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Decorative top gradient bar */}
                        <div
                            className="h-1.5 w-full"
                            style={{
                                background:
                                    "linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)",
                            }}
                        />

                        {/* Header */}
                        <div className="px-7 pt-6 pb-4 flex items-start justify-between">
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                                    style={{
                                        background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                                    }}
                                >
                                    <Sparkles className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-800 leading-tight">
                                        Business Enquiry
                                    </h2>
                                    <p className="text-xs text-slate-500 mt-0.5">
                                        Partner with VOCOxP — let's build something great
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="px-7 pb-7">
                            <AnimatePresence mode="wait">
                                {isSubmitted ? (
                                    /* ─── Success State ─── */
                                    <motion.div
                                        key="success"
                                        className="flex flex-col items-center justify-center py-12 text-center relative overflow-hidden"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                    >
                                        <motion.div
                                            className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                                            style={{
                                                background:
                                                    "linear-gradient(135deg, #22c55e, #16a34a)",
                                            }}
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 18,
                                                delay: 0.15,
                                            }}
                                        >
                                            <CheckCircle2 className="w-8 h-8 text-white" />
                                        </motion.div>
                                        <h3 className="text-xl font-bold text-slate-800">
                                            Thank You!
                                        </h3>
                                        <p className="text-sm text-slate-500 mt-2 max-w-xs">
                                            Your business enquiry has been received. Our partnership
                                            team will get back to you within 24 hours.
                                        </p>

                                        {/* Confetti Animation */}
                                        <div className="absolute inset-0 pointer-events-none z-10">
                                            {[...Array(12)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="absolute w-2.5 h-2.5 rounded-sm top-1/2"
                                                    style={{
                                                        left: `${10 + Math.random() * 80}%`,
                                                        backgroundColor: confettiColors[i % 4],
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
                                    /* ─── Form ─── */
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        className="space-y-4"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        {inputFields.map((field, i) => {
                                            const Icon = field.icon;
                                            return (
                                                <motion.div
                                                    key={field.name}
                                                    initial={{ opacity: 0, y: 12 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: i * 0.07 }}
                                                >
                                                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">
                                                        {field.label}
                                                    </label>
                                                    <div className="relative">
                                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                                            <Icon className="w-4 h-4" />
                                                        </span>
                                                        <input
                                                            type={field.type}
                                                            name={field.name}
                                                            value={formData[field.name]}
                                                            onChange={handleChange}
                                                            placeholder={field.placeholder}
                                                            className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-700 
                                placeholder:text-slate-400 outline-none transition-all duration-200
                                focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 
                                ${errors[field.name]
                                                                    ? "border-red-400 bg-red-50/40"
                                                                    : "border-slate-200 bg-white hover:border-slate-300"
                                                                }`}
                                                        />
                                                    </div>
                                                    {errors[field.name] && (
                                                        <p className="text-xs text-red-500 mt-1 ml-1">
                                                            {errors[field.name]}
                                                        </p>
                                                    )}
                                                </motion.div>
                                            );
                                        })}

                                        {/* Message */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 12 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.21 }}
                                        >
                                            <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">
                                                Message
                                            </label>
                                            <div className="relative">
                                                <span className="absolute left-3 top-3 text-slate-400">
                                                    <MessageSquare className="w-4 h-4" />
                                                </span>
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder="Tell us about your business goals and how you'd like to partner..."
                                                    rows={3}
                                                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-700 
                            placeholder:text-slate-400 outline-none transition-all duration-200 resize-none
                            focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500
                            ${errors.message
                                                            ? "border-red-400 bg-red-50/40"
                                                            : "border-slate-200 bg-white hover:border-slate-300"
                                                        }`}
                                                />
                                            </div>
                                            {errors.message && (
                                                <p className="text-xs text-red-500 mt-1 ml-1">
                                                    {errors.message}
                                                </p>
                                            )}
                                        </motion.div>

                                        {/* Submit */}
                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="relative w-full py-3 rounded-xl text-white text-sm font-semibold flex items-center justify-center gap-2 
                        transition-all duration-300 disabled:opacity-70 overflow-hidden"
                                            style={{
                                                background: isSubmitting
                                                    ? "linear-gradient(135deg, #94a3b8, #64748b)"
                                                    : "linear-gradient(135deg, #3b82f6, #7c3aed)",
                                                boxShadow: isSubmitting
                                                    ? "none"
                                                    : "0 4px 14px -3px rgba(59,130,246,.5)",
                                            }}
                                            whileHover={
                                                !isSubmitting
                                                    ? {
                                                        scale: 1.01,
                                                        boxShadow:
                                                            "0 6px 20px -3px rgba(59,130,246,.6)",
                                                    }
                                                    : {}
                                            }
                                            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                            initial={{ opacity: 0, y: 12 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.28 }}
                                        >
                                            <AnimatePresence mode="wait">
                                                {isSubmitting ? (
                                                    <motion.div
                                                        key="loading"
                                                        className="flex items-center justify-center gap-2"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                    >
                                                        <motion.div
                                                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                                                            animate={{ rotate: 360 }}
                                                            transition={{
                                                                duration: 1,
                                                                repeat: Infinity,
                                                                ease: "linear",
                                                            }}
                                                        />
                                                        <span>Sending Enquiry…</span>
                                                    </motion.div>
                                                ) : (
                                                    <motion.div
                                                        key="default"
                                                        className="flex items-center justify-center gap-2"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                    >
                                                        <Send className="w-4 h-4" />
                                                        <span>Submit Enquiry</span>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            {/* Button Glow Effect */}
                                            {!isSubmitting && (
                                                <motion.div
                                                    className="absolute -inset-0.5 rounded-xl -z-10"
                                                    style={{
                                                        background:
                                                            "linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%)",
                                                        filter: "blur(15px)",
                                                    }}
                                                    animate={{
                                                        opacity: [0.4, 0.7, 0.4],
                                                        scale: [1, 1.05, 1],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: "easeInOut",
                                                    }}
                                                />
                                            )}
                                        </motion.button>

                                        <p className="text-[11px] text-center text-slate-400 mt-2">
                                            We respect your privacy. Your information is safe with us.
                                        </p>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default BusinessEnquiryModal;
