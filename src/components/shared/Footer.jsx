import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Privacy', href: '#privacy' },
        { name: 'Contact', href: '#enquiry' },
    ];

    const socialLinks = [
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:contact@vocoxp.com', label: 'Email' },
    ];

    const legalLinks = [
        { name: 'Privacy Policy', href: 'https://vocoxp.com/uploads/LEGAL_TERMS.pdf' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
    ];

    return (
        <footer className="relative overflow-hidden">
            {/* Gradient Top Border */}
            <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500" />

            {/* Main Footer Content */}
            <div className="relative py-16 md:py-20">
                {/* Background */}
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900 to-slate-950" />

                {/* Floating Orbs */}
                <motion.div
                    className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, 30, 0],
                        y: [0, 20, 0],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, -20, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    {/* Top Section - CTA */}
                    <motion.div
                        className="text-center mb-16 pb-8 border-b border-white/10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3
                            className="text-2xl md:text-3xl font-bold text-white mb-4"
                            style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
                        >
                            Ready to Secure Your Organization?
                        </h3>
                        <p className="text-slate-400 mb-6 max-w-xl mx-auto">
                            Join hundreds of organizations that trust VOCOxP for their security needs.
                        </p>
                        {/* <motion.a
                            href="#enquiry"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white"
                            style={{
                                background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                                boxShadow: "0 4px 20px rgba(59, 130, 246, 0.35)",
                                fontFamily: "var(--font-display)",
                            }}
                            whileHover={{ scale: 1.03, boxShadow: "0 8px 30px rgba(139, 92, 246, 0.4)" }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Get Started Free
                            <ArrowRight className="w-4 h-4" />
                        </motion.a> */}
                    </motion.div>

                    {/* Main Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                        {/* Brand Column */}
                        <div className="lg:col-span-1">
                            <motion.a
                                href="#hero"
                                className="flex items-center gap-2 mb-5 group"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 
                            flex items-center justify-center group-hover:shadow-lg 
                            group-hover:shadow-blue-500/20 transition-all duration-300">
                                    <img src="/web/Images/logo-vocoxp2.png" alt="" />                        </div>
                                <span
                                    className="text-2xl font-bold text-white"
                                    style={{ fontFamily: 'var(--font-display)' }}
                                >
                                    VOCO<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">xP</span>
                                </span>
                            </motion.a>

                            <p className="text-slate-400 text-sm leading-relaxed mb-5">
                                Trust should not be assumed—it should be verified. Protecting organizations worldwide with intelligent identity verification.
                            </p>

                            {/* Social Links */}
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-blue-500/50 transition-all"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4
                                className="text-white font-semibold mb-5 flex items-center gap-2"
                                style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
                            >
                                <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
                                Quick Links
                            </h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <motion.a
                                            href={link.href}
                                            className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                                            whileHover={{ x: 4 }}
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors" />
                                            {link.name}
                                        </motion.a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal Links */}
                        <div>
                            <h4
                                className="text-white font-semibold mb-5 flex items-center gap-2"
                                style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
                            >
                                <span className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent rounded-full" />
                                Legal
                            </h4>
                            <ul className="space-y-3">
                                {legalLinks.map((link) => (
                                    <li key={link.name}>
                                        <motion.a
                                            href={link.href}
                                            className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                                            whileHover={{ x: 4 }}
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors" />
                                            {link.name}
                                            {link.href.startsWith('http') && (
                                                <ExternalLink className="w-3 h-3 opacity-50" />
                                            )}
                                        </motion.a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4
                                className="text-white font-semibold mb-5 flex items-center gap-2"
                                style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
                            >
                                <span className="w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent rounded-full" />
                                Contact
                            </h4>
                            <ul className="space-y-4">
                                <li>
                                    <a
                                        href="mailto:contact@vocoxp.com"
                                        className="text-slate-400 hover:text-white transition-colors text-sm flex items-start gap-3"
                                    >
                                        <Mail className="w-4 h-4 mt-0.5 text-blue-400" />
                                        contact@vocoxp.com
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="tel:+911234567890"
                                        className="text-slate-400 hover:text-white transition-colors text-sm flex items-start gap-3"
                                    >
                                        <Phone className="w-4 h-4 mt-0.5 text-emerald-400" />
                                        +91 123 456 7890
                                    </a>
                                </li>
                                <li className="text-slate-400 text-sm flex items-start gap-3">
                                    <MapPin className="w-4 h-4 mt-0.5 text-purple-400 flex-shrink-0" />
                                    <span>Pune, India</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-500 text-sm flex items-center gap-1">
                            © {currentYear} VOCOxP
                        </p>

                        <div className="flex items-center gap-2 text-slate-500 text-xs">
                            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                All Systems Operational
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
