
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // --- IMAGES ---
// import marriageImg from "../assets/carasoul/mar2.png";
// import img1 from "../assets/carasoul/ver1.png";
// import img3 from "../assets/carasoul/WhatsApp Image 2025-12-18 at 4.51.08 PM.jpeg";
// import img4 from "../assets/carasoul/WhatsApp Image 2025-12-18 at 4.51.09 PM (1).jpeg";
// import img5 from "../assets/carasoul/WhatsApp Image 2025-12-18 at 4.51.09 PM (2).jpeg";
// import img6 from "../assets/carasoul/WhatsApp Image 2025-12-18 at 4.51.09 PM.jpeg";

// const carouselImages = [
//   marriageImg,
//   img1,
//   img3,
//   img4,
//   img5,
//   img6,
// ];

// /* =======================
//    IMAGE CAROUSEL
// ======================= */
// const ImageCarousel = ({ images, currentIndex, setCurrentIndex }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     if (isHovered || images.length === 0) return;

//     const interval = setInterval(() => {
//       setCurrentIndex((prev) =>
//         prev === images.length - 1 ? 0 : prev + 1
//       );
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [images.length, isHovered, setCurrentIndex]);

//   if (!images.length) {
//     return (
//       <div className="h-[500px] lg:h-[700px] w-full rounded-2xl bg-slate-200 animate-pulse" />
//     );
//   }

//   return (
//     <div
//       className="relative"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Image Container */}
//       <div className="relative h-[500px] mt-15 lg:h-[500px] rounded-[2rem] overflow-hidden border-[2px] border-white bg-slate-200">
//         <AnimatePresence mode="wait">
//           <motion.img
//             key={currentIndex}
//             src={images[currentIndex]}
//             alt={`Slide ${currentIndex + 1}`}
//             initial={{ opacity: 0, scale: 1.04 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.96 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="w-full h-full object-fit"
//           />
//         </AnimatePresence>
//       </div>

//       {/* Dots */}
//       <div className="flex justify-center gap-3 mt-6">
//         {images.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrentIndex(i)}
//             className={`h-1.5 rounded-full transition-all duration-500 ${
//               currentIndex === i
//                 ? "w-6 bg-[#1e3a8a]"
//                 : "w-2 bg-[#fdfcfb] hover:bg-slate-400"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// /* =======================
//    FRONT COMPONENT
// ======================= */
// const FrontComponent = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   return (
//     <div className="relative w-full bg-[#ebe298] overflow-hidden">
//       <main className="relative max-w-7xl mx-auto flex items-center gap-10 min-h-screen pt-10 mb-10 pb-24">
//         <div className="w-full md:w-[70%]">
//           <ImageCarousel
//             images={carouselImages}
//             currentIndex={currentIndex}
//             setCurrentIndex={setCurrentIndex}
//           />
//         </div>
//         <div className="w-full md:w-[30%]">
//           <ImageCarousel
//             images={carouselImages}
//             currentIndex={currentIndex}
//             setCurrentIndex={setCurrentIndex}
//           />
//         </div>
//       </main>

//       {/* Bottom Wave */}
//       <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
//         <svg
//           viewBox="0 0 1200 120"
//           preserveAspectRatio="none"
//           className="block w-full h-[120px]"
//         >
//           <defs>
//             <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//               <stop offset="0%" stopColor="#081025" />
//               <stop offset="50%" stopColor="#0b1c3d" />
//               <stop offset="100%" stopColor="#081025" />
//             </linearGradient>
//           </defs>

//           <path
//             d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86
//                82.39-16.72,168.19-17.73,250.45-.39
//                C823.78,31,906.67,72,985.66,92.83
//                c70.05,18.48,146.53,26.09,214.34,3V120H0V0
//                C49.49,27.2,121.76,47,196.32,54.67
//                A422.65,422.65,0,0,0,321.39,56.44Z"
//             fill="url(#waveGradient)"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default FrontComponent;


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  XCircle,
  AlertTriangle,
  EyeOff,
  UserCheck,
  CheckCircle,
  BadgeCheck,
  ShieldCheck,
  Eye,
} from "lucide-react";
const iconMap = {
  XCircle,
  AlertTriangle,
  EyeOff,
  UserCheck,
  CheckCircle,
  BadgeCheck,
  ShieldCheck,
  Eye,
};

import { IoShieldCheckmarkSharp } from "react-icons/io5";
// import Bubbles from "./Bubbles";

// --- IMAGES ---
import marriageImg from "../assets/carasoul/mar2.png";
import img1 from "../assets/carasoul/ver1.png";
import img3 from "../assets/carasoul/WhatsApp Image 2025-12-18 at 4.51.08 PM.jpeg";
import img4 from "../assets/carasoul/WhatsApp Image 2025-12-18 at 4.51.09 PM (1).jpeg";
import img5 from "../assets/carasoul/WhatsApp Image 2025-12-18 at 4.51.09 PM (2).jpeg";
import img6 from "../assets/carasoul/WhatsApp Image 2025-12-18 at 4.51.09 PM.jpeg";

const carouselImages = [marriageImg, img1, img3, img4, img5, img6];

// --- CONTENT DATA ---
const contentData = [
  /* 1️⃣ Marriage Safety */
  {
    badge: "Marriage Safety",
    title: "Secure your Marriage forever.",
    highlight: "forever",
    description:
      "Marriage is a lifetime decision. Verify criminal records, past cases, and identity details before trusting someone with your future.",
    cta: "Verify Partner",

    before: {
      title: "You only see what they show you.",
      subtitle: "Hidden past. Fake identity. Unknown risks.",
      points: [
        { icon: "XCircle", text: "Guessing" },
        { icon: "AlertTriangle", text: "Blind Trust" },
        { icon: "EyeOff", text: "Hidden Records" },
        { icon: "UserCheck", text: "Fake Profiles" },
      ],
    },

    after: {
      title: "Now you know who you’re dealing with.",
      subtitle: "Clear identity. Past visibility. Peace of mind.",
      points: [
        { icon: "CheckCircle", text: "Verified Partner" },
        { icon: "BadgeCheck", text: "Trusted Match" },
        { icon: "ShieldCheck", text: "Safe Decision" },
        { icon: "Eye", text: "Full Transparency" },
      ],
    },
  },

  /* 2️⃣ School Safety */
  {
    badge: "School Safety",
    title: "Don’t trust a fake identity.",
    highlight: "fake identity",
    description:
      "Ensure teachers and staff are fully verified. Detect fake IDs, criminal history, and misconduct before hiring.",
    cta: "Verify Staff",

    before: {
      title: "Documents can be misleading.",
      subtitle: "Fake certificates. Unknown behavior.",
      points: [
        { icon: "XCircle", text: "Fake Certificates" },
        { icon: "AlertTriangle", text: "Unknown Background" },
        { icon: "EyeOff", text: "No Police Check" },
        { icon: "UserCheck", text: "Unverified Staff" },
      ],
    },

    after: {
      title: "Every staff member is verified.",
      subtitle: "Safe students. Trusted institution.",
      points: [
        { icon: "CheckCircle", text: "Verified Identity" },
        { icon: "BadgeCheck", text: "Trusted Teachers" },
        { icon: "ShieldCheck", text: "Child Safety" },
        { icon: "Eye", text: "Clear Records" },
      ],
    },
  },

  /* 3️⃣ Corporate Safety */
  {
    badge: "Corporate Safety",
    title: "One wrong hire costs everything.",
    highlight: "wrong hire",
    description:
      "Prevent fraud, fake profiles, and insider threats before onboarding employees.",
    cta: "Verify Employee",

    before: {
      title: "Hiring based only on resumes.",
      subtitle: "Fake experience. Insider risks.",
      points: [
        { icon: "XCircle", text: "Fake Experience" },
        { icon: "AlertTriangle", text: "Risky Hiring" },
        { icon: "EyeOff", text: "No Background Check" },
        { icon: "UserCheck", text: "Unknown Employee" },
      ],
    },

    after: {
      title: "Every hire is background-verified.",
      subtitle: "Strong teams. Reduced risk.",
      points: [
        { icon: "CheckCircle", text: "Verified Resume" },
        { icon: "BadgeCheck", text: "Trusted Workforce" },
        { icon: "ShieldCheck", text: "Fraud Prevention" },
        { icon: "Eye", text: "Complete Transparency" },
      ],
    },
  },

  /* 4️⃣ Home Safety */
  {
    badge: "Home Safety",
    title: "Not every uniform means safety.",
    highlight: "safety",
    description:
      "Verify delivery agents, service staff, and unknown visitors before allowing access to your home.",
    cta: "Verify Visitor",

    before: {
      title: "Anyone can claim to be trusted.",
      subtitle: "Unknown visitors. Potential threats.",
      points: [
        { icon: "XCircle", text: "Unknown Visitors" },
        { icon: "AlertTriangle", text: "Security Risk" },
        { icon: "EyeOff", text: "No ID Proof" },
        { icon: "UserCheck", text: "Fake Uniforms" },
      ],
    },

    after: {
      title: "Every visitor is verified.",
      subtitle: "Safe home. Peace of mind.",
      points: [
        { icon: "CheckCircle", text: "Verified Entry" },
        { icon: "BadgeCheck", text: "Trusted Visitors" },
        { icon: "ShieldCheck", text: "Home Protection" },
        { icon: "Eye", text: "Clear Identity" },
      ],
    },
  },

  /* 5️⃣ Event Security */
  {
    badge: "Event Security",
    title: "Crowd safety starts with verification.",
    highlight: "verification",
    description:
      "Secure events, religious gatherings, and public places using instant identity checks.",
    cta: "Verify Entry",

    before: {
      title: "Large crowds, unknown people.",
      subtitle: "Unauthorized access. Safety threats.",
      points: [
        { icon: "XCircle", text: "No Entry Control" },
        { icon: "AlertTriangle", text: "Security Threats" },
        { icon: "EyeOff", text: "Unknown Attendees" },
        { icon: "UserCheck", text: "Fake Passes" },
      ],
    },

    after: {
      title: "Only verified people enter.",
      subtitle: "Safe events. Controlled access.",
      points: [
        { icon: "CheckCircle", text: "Verified Entry" },
        { icon: "BadgeCheck", text: "Authorized Access" },
        { icon: "ShieldCheck", text: "Crowd Safety" },
        { icon: "Eye", text: "Live Monitoring" },
      ],
    },
  },

  /* 6️⃣ Society Security */
  {
    badge: "Society Security",
    title: "Ensure verified access at home.",
    highlight: "verified access",
    description:
      "Prevent unauthorized entry by verifying tenants, visitors, and service providers.",
    cta: "Verify Access",

    before: {
      title: "Open access invites risk.",
      subtitle: "Unknown tenants. No tracking.",
      points: [
        { icon: "XCircle", text: "Unauthorized Entry" },
        { icon: "AlertTriangle", text: "Security Gaps" },
        { icon: "EyeOff", text: "No Visitor Logs" },
        { icon: "UserCheck", text: "Unverified People" },
      ],
    },

    after: {
      title: "Every entry is verified.",
      subtitle: "Secure society. Controlled access.",
      points: [
        { icon: "CheckCircle", text: "Verified Residents" },
        { icon: "BadgeCheck", text: "Trusted Visitors" },
        { icon: "ShieldCheck", text: "Society Safety" },
        { icon: "Eye", text: "Complete Visibility" },
      ],
    },
  },
];

// --- IMAGE CAROUSEL ---
const ImageCarousel = ({ images = [], currentIndex, setCurrentIndex }) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length, setCurrentIndex, isHovered]);

  if (!images.length) {
    return (
      <div className="h-[500px] w-full bg-slate-100 rounded-[1rem] animate-pulse" />
    );
  }

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[500px] lg:h-[370px]">
        <div
          className="relative rounded-[2rem] overflow-hidden
          border-[2px] border-white bg-slate-200 z-20"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full h-[500px] lg:h-[370px] object-cover"
            />
          </AnimatePresence>
        </div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-3 mt-6">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              currentIndex === i ? "w-4 bg-[#1e3a8a]" : "w-2 bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
const FrontComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentContent = contentData[currentIndex] || contentData[0];

  return (
    <div className="w-full min-h-screen bg-[#e7e0a5] overflow-hidden">
      {/* Floating Bubbles */}
      {/* <Bubbles count={20} /> */}

      <main className="relative px-6 lg:px-12 flex flex-col lg:flex-row items-center min-h-screen pt-10 pb-20 gap-6">
        {/* Left Content */}
        <div className="flex-1 w-full space-y-1 ">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mt-10 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100">
                <AlertTriangle className="w-4 h-4 text-orange-500" />
                <span className="text-xs font-black uppercase tracking-widest text-orange-600">
                  {currentContent.badge}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-black text-slate-800 leading-[1.1] relative">
                {currentContent.title.split(currentContent.highlight)[0]}
                <span className="relative inline-block text-[#1e3a8a]">
                  {currentContent.highlight}
                </span>
                {currentContent.title.split(currentContent.highlight)[1]}
              </h1>

              {/* Description */}
              <p className="text-md text-slate-700 max-w-xl leading-relaxed">
                {currentContent.description}
              </p>
              <div className="flex flex-col lg:flex-row gap-6 mt-6">
                {/* ================= BEFORE CARD ================= */}
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative w-full rounded-3xl p-5 pt-8
      bg-white/30 backdrop-blur-xl
      shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
                >
                  {/* TOP LABEL */}
                  <div className="absolute -top-3 left-1/3 -translate-x-1/2 z-30">
                    <div
                      className="flex items-center gap-2 px-3 py-1
        bg-white rounded-full
        border border-orange-500
        shadow-sm"
                    >
                      <AlertTriangle className="w-4 h-4 text-orange-500" />
                      <span className="text-orange-700 font-bold text-xs tracking-wide">
                        BEFORE
                      </span>
                    </div>
                  </div>

                  {/* CORNER BORDERS */}
                  <div className="absolute inset-0 pointer-events-none z-20">
                    <span
                      className="absolute top-0 left-0 w-1/4 h-1/4
        border-t-[3px] border-l-[3px] border-red-500
        rounded-tl-3xl"
                    />

                    <span
                      className="absolute bottom-0 right-0 w-1/4 h-1/4
        border-b-[3px] border-r-[3px] border-red-500
        rounded-br-3xl"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10 space-y-2">
                    <p className="text-slate-900 font-semibold text-md leading-[17px]">
                      {currentContent.before.title}
                    </p>

                    <p className="text-slate-700 text-xs">
                      {currentContent.before.subtitle}
                    </p>

                    <div className="grid gap-2 mt-2">
                      {currentContent.before.points.map((point, idx) => {
                        const Icon = iconMap[point.icon];
                        return (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-1
                bg-orange-100 px-2 py-1 rounded-lg
                text-orange-700 font-semibold shadow-sm"
                          >
                            <Icon className="w-4 h-4" />
                            <span className="text-xs">{point.text}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>

                {/* ================= AFTER CARD ================= */}

                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="relative w-full rounded-3xl p-5 pt-8
      bg-white/90 backdrop-blur-xl

      shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
                >
                  {/* TOP LABEL */}
                  <div className="absolute -top-3 left-1/3 -translate-x-1/2 z-30">
                    <div
                      className="flex items-center gap-2 px-3 py-1
        bg-white rounded-full
        border border-green-700
        shadow-sm"
                    >
                      <IoShieldCheckmarkSharp className="w-4 h-4 text-green-600" />
                      <span className="text-green-700 font-bold text-xs tracking-wide">
                        AFTER
                      </span>
                    </div>
                  </div>

                  {/* GLOW */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 bg-green-300 blur-3xl"
                  />

                  {/* CORNER BORDERS */}
                  <div className="absolute inset-0 pointer-events-none z-20">
                    <span
                      className="absolute top-0 left-0 w-1/4 h-1/4
        border-t-[3px] border-l-[3px] border-green-400
        rounded-tl-3xl"
                    />

                    <span
                      className="absolute bottom-0 right-0 w-1/4 h-1/4
        border-b-[3px] border-r-[3px] border-green-400
        rounded-br-3xl"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10 space-y-2">
                    <p className="text-slate-900 font-bold text-md leading-[17px]">
                      {currentContent.after.title}
                    </p>

                    <p className="text-slate-700 text-xs">
                      {currentContent.after.subtitle}
                    </p>

                    <div className="grid gap-2 mt-2">
                      {currentContent.after.points.map((point, idx) => {
                        const Icon = iconMap[point.icon];
                        return (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-1
                bg-green-100 px-2 py-1 rounded-lg
                text-green-700 font-semibold shadow-sm"
                          >
                            <Icon className="w-4 h-4" />
                            <span className="text-xs">{point.text}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Carousel */}
        <div className="flex-1 w-full ">
          <ImageCarousel
            images={carouselImages}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
      </main>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
       <svg
  viewBox="0 0 1200 120"
  preserveAspectRatio="none"
  className="relative block w-full h-22"
>
  <defs>
    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#081025" />
      <stop offset="50%" stopColor="#0b1c3d" />
      <stop offset="100%" stopColor="#081025" />
    </linearGradient>
  </defs>

  <path
    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C49.49,27.2,121.76,47,196.32,54.67A422.65,422.65,0,0,0,321.39,56.44Z"
    fill="url(#waveGradient)"
  ></path>
</svg>

      </div>
    </div>
  );
};

export default FrontComponent;
