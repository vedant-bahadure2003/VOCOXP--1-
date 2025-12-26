import React from "react";
import AboutVocoXp from "../component/AboutVocoXp";

const VideoContentSectionTailwind = () => {
  return (
<section className="bg-gradient-to-br from-[#1c2a47] from-50% to-[#041841] to-50% py-15 px-4 lg:px-10">      
      <div className="text-center">
        <h2
          className="
              text-3xl md:text-5xl font-extrabold
              px-6 py-2 rounded-xl inline-block
              text-[#e6dbbd]
              relative
            "
          // shadow water glass
          // style={{
          //   WebkitBoxReflect:
          //     "below 6px linear-gradient(transparent, rgba(255,255,255,0.25))",
          // }}
        >
          Why Choose VOCO
          <span className="text-orange-400">x</span>
          <span className="text-emerald-300">P</span>
        </h2>

        {/* Accent divider */}
       
         <div className="flex justify-center">
                <div className="h-[3px] w-44 rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
              </div>

        <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-200 leading-relaxed">
          Powerful verification tools designed for{" "}
          <span className="text-cyan-400 font-semibold">
            security, efficiency
          </span>{" "}
          and seamless digital trust.
        </p>
      </div>

      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-5">
        {/* VIDEO - 60% */}
        <div className="w-full lg:w-[50%] md:pt-12">
          <div className="relative w-full pb-[65.25%] bg-[#17203B] rounded-2xl shadow-2xl shadow-cyan-900/50 overflow-hidden border border-cyan-500/30 transition duration-500 hover:border-cyan-400">
            <video
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              controls
              autoPlay
              muted
              loop
            >
              <source
                src="https://khajuraho.staffhandler.com/videos/vocoxp_video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* USE CASES - 40% */}
        <div className="w-full lg:w-[50%] text-white flex justify-center lg:justify-start">
          {/* <InnerAbout /> */}
          <AboutVocoXp />

        </div>
      </div>
    </section>
  );
};

export default VideoContentSectionTailwind;
