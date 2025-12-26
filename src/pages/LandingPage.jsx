import React from 'react';
import Navbar from '../components/shared/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Privacy from '../components/Privacy/Privacy';
import Enquiry from '../components/Enquiry/Enquiry';
import Footer from '../components/shared/Footer';

const LandingPage = () => {
    return (
        <main className="relative">
            {/* Fixed Navigation */}
            <Navbar />

            {/* Hero Section - Threat Focus */}
            <Hero />

            {/* About Section - Risk Scenarios & Solution */}
            <About />

            {/* Privacy Section - Trust & Security */}
            <Privacy />

            {/* Enquiry Section - Contact Form */}
            <Enquiry />

            {/* Footer */}
            <Footer />
        </main>
    );
};

export default LandingPage;
