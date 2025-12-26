import React from "react";
import { 
  FaShieldAlt, FaUserCheck, FaFingerprint, FaFolderOpen, 
  FaWallet, FaCogs, FaHandshake, FaRocket 
} from "react-icons/fa";

const AboutVocoXp = () => {
  const categories = [
    {
      label: "Operations & Trust",
      accent: "cyan",
      color: "text-cyan-400",
      borderColor: "border-cyan-500/30",
      glow: "group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]",
      points: [
        { text: "Safeguard business operations as an agency owner", icon: <FaShieldAlt /> },
        { text: "Seamless verification for individual users", icon: <FaUserCheck /> },
        { text: "Digital verification made easy", icon: <FaFingerprint /> },
        { text: "Efficient member and document management", icon: <FaFolderOpen /> },
      ],
    },
    {
      label: "Innovation & Growth",
      accent: "orange",
      color: "text-orange-400",
      borderColor: "border-orange-500/30",
      glow: "group-hover:shadow-[0_0_20px_rgba(251,146,60,0.3)]",
      points: [
        { text: "Integrated wallet functionality", icon: <FaWallet /> },
        { text: "Comprehensive administrative capabilities", icon: <FaCogs /> },
        { text: "Reliable partner for verification needs", icon: <FaHandshake /> },
        { text: "Future of digital verification and communication", icon: <FaRocket /> },
      ],
    },
  ];

  return (
    <div className="w-full max-w-5xl pt-10">
      <div className="grid grid-cols-1 gap-5">
        {categories.map((cat, catIdx) => (
          <div key={catIdx} className="space-y-4">
            {/* Category Header */}
            <div className="flex items-center gap-2">
              <span className={`flex-shrink-0  text-sm px-3 py-1 rounded-md bg-white/5 border ${cat.borderColor} text-[10px] font-black uppercase tracking-widest ${cat.color}`}>
                   {cat.label}
              </span>
             
              <div className={`h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent`}></div>
            </div>

            {/* 4 Point Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {cat.points.map((point, idx) => (
                <div
                  key={idx}
                  className={`group relative flex items-center gap-4 p-4 rounded-xl 
                             bg-white/[0.03] backdrop-blur-md border ${cat.borderColor}
                             transition-all duration-500 hover:-translate-y-2 
                             hover:bg-white/[0.07] ${cat.glow}`}
                >
                  {/* Icon with circular "Radar" effect */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full bg-[#051129] border border-white/10 flex items-center justify-center text-xl ${cat.color} z-10 relative`}>
                      {point.icon}
                    </div>
                    {/* Background Radar Pulse */}
                    <div className={`absolute inset-0 rounded-full ${cat.color.replace('text', 'bg')} opacity-0 group-hover:opacity-20 group-hover:animate-ping`}></div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold text-slate-200 leading-snug group-hover:text-white transition-colors fsstyle"
                    >
                      {point.text}
                    </p>
                  </div>

                  {/* Corner Accent Decor */}
                  <div className={`absolute top-0 right-0 w-8 h-8 opacity-20 group-hover:opacity-100 transition-opacity`}>
                     <div className={`absolute top-2 right-2 w-1 h-1 rounded-full ${cat.color.replace('text', 'bg')}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutVocoXp;