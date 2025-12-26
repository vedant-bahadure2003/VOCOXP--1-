import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Linkedin, Twitter, Mail } from 'lucide-react';

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

    return (
        <footer className="relative py-16 border-t border-slate-200">
            {/* Background */}
            <div
                className="absolute inset-0 z-0"
                style={{ background: 'var(--color-void)' }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Column */}
                    <div>
                        <motion.a
                            href="#hero"
                            className="flex items-center gap-2 mb-4 group"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 
                              flex items-center justify-center">
                                <Shield className="w-5 h-5 text-white" />
                            </div>
                            <span
                                className="text-xl font-bold text-slate-800"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                VOCO<span className="text-blue-600">xP</span>
                            </span>
                        </motion.a>

                        <p className="text-slate-500 text-sm leading-relaxed mb-4">
                            Trust should not be assumed—it should be verified.
                            Protecting organizations with digital identity verification.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4
                            className="text-slate-800 font-semibold mb-4"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-slate-500 hover:text-blue-600 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4
                            className="text-slate-800 font-semibold mb-4"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Connect
                        </h4>

                        <div className="flex gap-3 mb-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center
                            text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-all"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>

                        <p className="text-slate-500 text-sm">
                            contact@vocoxp.com
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {currentYear} VOCOxP. All rights reserved.
                    </p>

                    <div className="flex gap-6 text-sm">
                        <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
