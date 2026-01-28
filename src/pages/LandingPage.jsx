import React from 'react';
import Navbar from '../components/shared/Navbar';
import Hero from '../components/Hero/Hero';
import VideoShowcase from '../components/VideoShowcase/VideoShowcase';
import About from '../components/About/About';
import UseCases from '../components/UseCases/UseCases';
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

            {/* Use Cases - Test Drive & Rental Verification */}
            <UseCases />

            {/* Privacy Section - Trust & Security */}
            <Privacy />

            {/* Video Showcase - Product Demo */}
            <VideoShowcase />

            {/* Enquiry Section - Contact Form */}
            <Enquiry />

            {/* Footer */}
            <Footer />
        </main>
    );
};

export default LandingPage;
