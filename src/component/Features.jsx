import React from "react";
import service from "../assets/images/handshake-removebg-preview.png";
import {
  FaShieldAlt,
  FaWallet,
  FaFileAlt,
  FaTools,
  FaLock,
  FaUsers,
  FaHandshake,
  FaMobileAlt,
} from "react-icons/fa";

const featuresData = [
  {
    id: 1,
    title: "Digital Verification",
    points: ["Aadhaar, PAN, Voter ID", "Authenticity assurance"],
    icon: <FaShieldAlt />,
    gradient: "from-[#0ea5e9] to-[#3b82f6]",
  },
  {
    id: 2,
    title: "User Convenience",
    points: ["Wallet integration", "Easy top-up"],
    icon: <FaWallet />,
    gradient: "from-[#8b5cf6] to-[#c084fc]",
  },
  {
    id: 3,
    title: "Document Verification",
    points: ["DL & Academic Records", "Reports"],
    icon: <FaFileAlt />,
    gradient: "from-[#3b82f6] to-[#60a5fa]",
  },
  {
    id: 4,
    title: "Simplify Processes",
    points: ["Reduce manual effort", "Central IDs"],
    icon: <FaTools />,
    gradient: "from-[#f59e0b] to-[#fcd34d]",
  },
  {
    id: 5,
    title: "Security",
    points: ["Document authenticity", "Fraud safeguard"],
    icon: <FaLock />,
    gradient: "from-[#ef4444] to-[#f87171]",
  },
  {
    id: 6,
    title: "Admin Efficiency",
    points: ["Automate tasks", "Manage profiles"],
    icon: <FaUsers />,
    gradient: "from-[#10b981] to-[#34d399]",
  },
  {
    id: 7,
    title: "Collaboration",
    points: ["Secure channels", "Transparent trust"],
    icon: <FaHandshake />,
    gradient: "from-[#f59e0b] to-[#fbbf24]",
  },
  {
    id: 8,
    title: "Mobile Access",
    points: ["Play Store App", "SMS Verification"],
    icon: <FaMobileAlt />,
    gradient: "from-[#ec4899] to-[#f472b6]",
  },
];

const Features = () => {
  const leftFeatures = featuresData.slice(0, 4);
  const rightFeatures = featuresData.slice(4, 8);

  const ServiceItem = ({ feature, isRight }) => (
    <div
      className={`group flex items-center gap-4 mb-8
        rounded-2xl
        bg-white/20 backdrop-blur-md
        px-4 py-3
        shadow-lg shadow-black/10
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]
        transition-all duration-500
        ${isRight ? "flex-row" : "flex-row-reverse text-right"}
      `}
    >
      {/* Text */}
      <div className="flex-1">
        <h4
          className="text-sm font-black uppercase tracking-wider mb-1"
          style={{
            background: `linear-gradient(90deg, ${feature.gradient
              .replace("from-", "")
              .replace("to-", "")})`,
          }}
        >
          {feature.title}
        </h4>
        <div
          className={`flex flex-col ${isRight ? "items-start" : "items-end"}`}
        >
          {feature.points.map((point, idx) => (
            <span
              key={idx}
              className="text-[12px] text-slate-800 font-semibold leading-tight"
            >
              {point}
            </span>
          ))}
        </div>
      </div>

      {/* Icon Circle */}
      <div
        className={`relative w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-2xl border-2
          transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg]
          bg-gradient-to-br ${feature.gradient}
          text-white
        `}
      >
        <div className="text-2xl">{feature.icon}</div>
        <div
          className={`hidden lg:block absolute top-1/2 w-10 h-[3px] rounded-full opacity-40
            ${isRight ? "-left-10" : "-right-10"} bg-gradient-to-r ${
            feature.gradient
          }`}
        />
      </div>
    </div>
  );

  return (
    <section className="relative ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="hidden lg:block lg:w-1/3">
            {leftFeatures.map((f) => (
              <ServiceItem key={f.id} feature={f} isRight={false} />
            ))}
          </div>

          {/* Center Hub */}
          <div className="relative w-72 h-72 flex-shrink-0">
            <div className="absolute inset-0 rounded-full border border-dashed border-cyan-800/90 animate-[spin_25s_linear_infinite]" />

            <div
              className="absolute inset-5 rounded-full bg-gradient-to-br from-indigo-700 via-purple-700 to-blue-900
              flex flex-col items-center justify-center text-center p-6
              shadow-[0_0_60px_rgba(99,102,241,0.45)]
              border border-white/20"
            >
              <div className="">
                <img src={service} alt="" />
                <h3 className="text-[#d5f382] text-2xl">Our Services</h3>
              </div>
              <div className="h-1 w-12 bg-cyan-300 my-3 rounded-full" />
              <p className="text-[10px] text-cyan-100 tracking-widest font-bold uppercase">
                What We Do
              </p>
            </div>
          </div>

          {/* Right Column / Mobile */}
          <div className="lg:w-1/3 w-full">
            <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuresData.map((f) => (
                <ServiceItem key={f.id} feature={f} isRight={true} />
              ))}
            </div>
            <div className="hidden lg:block">
              {rightFeatures.map((f) => (
                <ServiceItem key={f.id} feature={f} isRight={true} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
