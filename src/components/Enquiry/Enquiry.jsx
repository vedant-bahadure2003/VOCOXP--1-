import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Building, MessageSquare, CheckCircle } from 'lucide-react';
import FormField from './FormField';

const Enquiry = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organization: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset after showing success
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', organization: '', message: '' });
        }, 3000);
    };

    return (
        <section id="enquiry" className="relative py-20 md:py-32">
            {/* Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: 'linear-gradient(180deg, var(--color-void) 0%, #f1f5f9 50%, var(--color-void) 100%)',
                }}
            />

            {/* Decorative Elements */}
            <motion.div
                className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-30 blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)' }}
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 8, repeat: Infinity }}
            />

            <div className="relative z-10 max-w-3xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
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
                        <Send className="w-4 h-4 text-blue-600" />
                        <span className="text-blue-600 text-sm font-medium">Get Started</span>
                    </motion.div>

                    <h2
                        className="text-3xl md:text-5xl font-bold text-slate-800 mb-6"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Protect Your Space Today
                    </h2>

                    <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Ready to secure your organization? Reach out to learn how VOCOxP can help
                        you verify, protect, and trust every person who enters your space.
                    </p>
                </motion.div>

                {/* Form Card */}
                <motion.div
                    className="glass-dark p-8 md:p-10"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {isSubmitted ? (
                        <motion.div
                            className="text-center py-12"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.div
                                className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', damping: 10 }}
                            >
                                <CheckCircle className="w-10 h-10 text-emerald-600" />
                            </motion.div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-2">Thank You!</h3>
                            <p className="text-slate-600">We'll be in touch with you shortly.</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    label="Your Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                    icon={User}
                                />

                                <FormField
                                    label="Email Address"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@company.com"
                                    required
                                    icon={Mail}
                                />
                            </div>

                            <FormField
                                label="Organization"
                                name="organization"
                                value={formData.organization}
                                onChange={handleChange}
                                placeholder="Your company or organization"
                                icon={Building}
                            />

                            <FormField
                                label="Message"
                                type="textarea"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about your security needs..."
                                required
                                rows={5}
                            />

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full btn-primary flex items-center justify-center gap-3 text-lg py-4"
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <motion.div
                                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                        />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Enquiry
                                    </>
                                )}
                            </motion.button>
                        </form>
                    )}
                </motion.div>

                {/* Contact Alternative */}
                <motion.p
                    className="text-center text-slate-500 text-sm mt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    Prefer direct contact? Email us at{' '}
                    <a href="mailto:contact@vocoxp.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                        contact@vocoxp.com
                    </a>
                </motion.p>
            </div>
        </section>
    );
};

export default Enquiry;
