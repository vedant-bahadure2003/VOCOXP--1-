import React from "react";
import Features from "./Features";
import AboutVocoXp from "./AboutVocoXp";
import { motion } from "framer-motion";
import bgimg from "../assets/images/bg-img-about.jpg";
import Bubbles from "./Bubbles"


const AboutTabs = () => {
  return (
    <section className="relative w-full overflow-hidden">

      {/* =========================
          FEATURES SECTION
      ========================= */}
      <div
        className="
          relative pt-10
          bg-gradient-to-br from-[#e7e0a5] via-[#e6e2aff3] to-[#ece5a6]
        "
      >
      <Bubbles />

      {/* <div
        className="relative pt-16 overflow-hidden"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        
        <div className="absolute inset-0 bg-[#e7e0a5]/60 backdrop-blur-sm" /> */}

        <div className="relative pb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Heading */}
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-black text-[#1f2933]">
                Platform Features
              </h2>

              {/* Accent divider */}
              <div className="flex justify-center mt-3">
                <div className="h-[3px] w-44 rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
              </div>

              <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
                Powerful verification tools designed for{" "}
                <span className="text-indigo-600 font-semibold">
                  security, efficiency
                </span>{" "}
                and seamless digital trust.
              </p>
            </div>

            <Features />
          </motion.div>
        </div>
      </div>

      {/* =========================
          BENEFITS / ABOUT SECTION
      ========================= */}
      {/* <div
        className="relative py-20"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-md" />

        <motion.div
          className="relative max-w-7xl mx-auto px-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-black text-[#2f3e2f]">
              Value Benefits
            </h2>
            <div className="flex justify-center mt-2">
              <div className="h-[2px] w-40 bg-gradient-to-r from-transparent via-[#9da540] to-transparent" />
            </div>
            <p className="mt-3 max-w-3xl mx-auto text-lg text-[#5a5a4a]">
              Why organizations trust VOCOxP for identity and document
              verification.
            </p>
          </div>

          <AboutVocoXp />
        </motion.div>
      </div> */}
    </section>
  );
};

export default AboutTabs;
