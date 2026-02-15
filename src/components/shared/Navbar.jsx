import React, { useState, useEffect, useCallback, useRef, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import BusinessEnquiryModal from "./BusinessEnquiryModal";

const Navbar = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const lastScrollRef = useRef(0);
  const ticking = useRef(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Business Partner", href: "#", isModal: true },
    { name: "Business Park", href: "#privacy" },
    { name: "Privacy", href: "#privacy" },
  ];

  // Throttled scroll handler for better performance
  useEffect(() => {
    const handleScroll = () => {
      lastScrollRef.current = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setIsScrolled(lastScrollRef.current > 50);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Memoized toggle handler
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  // Memoized close handler
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleNavClick = useCallback((e, link) => {
    if (link.isModal) {
      e.preventDefault();
      setIsEnquiryOpen(true);
      setIsMobileMenuOpen(false);
    }
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
          ${isScrolled
            ? "py-3 bg-white/70 backdrop-blur-lg border-b border-slate-200/50 shadow-sm"
            : "py-3 bg-transparent "
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <div
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-100 
                            flex items-center justify-center group-hover:shadow-lg 
                            group-hover:shadow-blue-500/20 transition-all duration-300"
            >
              <img src="/web/Images/vocoxp-logoo.png" alt="" />{" "}
            </div>
            <span
              className={`text-2xl font-extrabold tracking-wider uppercase transition-colors duration-300 ${isScrolled ? "text-black" : "text-white"}`}
              style={{
                fontFamily: "'Orbitron', sans-serif",
                letterSpacing: "0.08em",
              }}
            >
              VOCO
              <span className={isScrolled ? "text-blue-700" : "text-blue-300"}>
                xP
              </span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`transition-colors text-sm font-medium relative group cursor-pointer
                                    ${isScrolled
                    ? "text-black hover:text-blue-600"
                    : "text-white hover:text-blue-600"
                  }`}
                whileHover={{ y: -2 }}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full
                                    ${isScrolled ? "bg-blue-500" : "bg-white"}`}
                />
              </motion.a>
            ))}

            <motion.a
              href="#enquiry"
              className="btn-primary text-sm py-2.5 px-5"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden p-2 transition-colors ${isScrolled
                ? "text-slate-600 hover:text-blue-600"
                : "text-white hover:text-blue-300"
              }`}
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
              onClick={closeMobileMenu}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute top-20 left-4 right-4 glass-dark p-6"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="text-slate-700 hover:text-blue-600 text-lg font-medium py-2 
                               border-b border-slate-200/50 last:border-0 cursor-pointer"
                    onClick={(e) => {
                      handleNavClick(e, link);
                      if (!link.isModal) closeMobileMenu();
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.name}
                  </motion.a>
                ))}

                <motion.a
                  href="#enquiry"
                  className="btn-primary text-center mt-2"
                  onClick={closeMobileMenu}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Get Started
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Business Enquiry Modal */}
      <BusinessEnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
