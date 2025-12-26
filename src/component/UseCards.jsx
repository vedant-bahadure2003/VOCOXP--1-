import React from "react";
import { FaBolt, FaRegHandshake, FaHeadset, FaPlay } from "react-icons/fa";

const UseCards = () => {
  const stats = [
    { icon: <FaBolt />, val: "8+", label: "Features", color: "from-cyan-500/20 to-teal-500/20", border: "border-cyan-400/30", text: "text-cyan-400" },
    { icon: <FaRegHandshake />, val: "4+", label: "Use Cases", color: "from-purple-500/20 to-pink-500/20", border: "border-purple-400/30", text: "text-purple-400" },
    { icon: <FaHeadset />, val: "24/7", label: "Support", color: "from-orange-500/20 to-yellow-500/20", border: "border-orange-400/30", text: "text-orange-400" },
  ];

  return (
    <section className="w-full relative bg-gradient-to-r from-[#081025] via-[#0b1c3d] to-[#081025]  py-12 px-6 md:px-16 overflow-hidden">
      {/* Dynamic Background Blurs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* LEFT: Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 w-full lg:w-auto">
          {stats.map((item, idx) => (
            <div key={idx} className={`flex flex-col items-center gap-2 p-6 w-full sm:w-40 rounded-2xl bg-gradient-to-br ${item.color} border ${item.border} backdrop-blur-md hover:translate-y-[-5px] transition-all duration-300 group shadow-xl`}>
              <div className={`${item.text} text-3xl group-hover:scale-110 transition-transform`}>{item.icon}</div>
              <div className="text-3xl font-black text-white tracking-tighter">
                {item.val.split('').map((char, i) => (
                  <span key={i} className={char === '+' || char === '/' ? "text-lg align-top opacity-70" : ""}>{char}</span>
                ))}
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>

        {/* RIGHT: Modern Video Action Card */}
        <a 
          href="#" 
          target="#" 
          rel="#"
          className="group relative flex items-center justify-between p-1 rounded-3xl bg-gradient-to-r from-blue-300 via-purple-300 to-pink-200 w-full lg:max-w-md shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] transition-all duration-500"
        >
          <div className="flex items-center gap-6 bg-[#0b1224] w-full h-full rounded-[calc(1rem-1px)] p-6 transition-colors group-hover:bg-[#0f1930]">
            
            {/* Play Button with Pulse */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
              <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-white to-gray-300 text-[#060b1a] shadow-lg group-hover:scale-110 transition-transform duration-500">
                <FaPlay className="ml-1 text-xl" />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col">
              <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-1">Our Product</span>
              <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                Watch Video 
              </h3>
              <p className="text-gray-500 text-sm mt-1">See how it works in 2 minutes</p>
            </div>

            {/* Shimmer Overlay */}
            {/* <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div> */}
          </div>
        </a>

      </div>
    </section>
  );
};

export default UseCards;