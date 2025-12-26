import React from "react";
import vocoverify from "../assets/images/vocoverify.png";
import aadhar from "../assets/doc/aadhar.webp";
import digital from "../assets/doc/digital.webp";
import driving from "../assets/doc/driving.webp";
import pancard from "../assets/doc/pancard.webp";
import passport from "../assets/doc/passport.webp";
import voter from "../assets/doc/voter.webp";

// Component to represent a single ID card with image
const IdCard = ({ title, img }) => (
  <div
    className="
      flex flex-col items-center justify-center p-3 
      bg-white/5 backdrop-blur-md rounded-xl
      shadow-lg hover:shadow-2xl transition-shadow duration-300
      w-40 h-32
    "
  >
    <img
      src={img}
      alt={title}
      className="w-60 h-30 mb-2 object-contain rounded-md"
    />
    <p className="text-xs font-semibold uppercase text-center text-white">
      {title}
    </p>
  </div>
);

const AboutVocoInfo = () => {
  const supportedIds = [
    { title: "Aadhar", img: aadhar },
    { title: "Voter ID", img: voter },
    { title: "Passport", img: passport },
    { title: "PAN Card", img: pancard },
    { title: "Driver's License", img: driving },
    { title: "Digital Verification", img: digital },
  ];

  return (
    <section className="bg-[#081025] py-10 px-4 sm:px-6 font-poppins">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* TEXT SECTION */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-gray-300">
          <h3 className="text-xl sm:text-2xl text-center font-bold mb-4 text-white">
            Supported Verification Documents
          </h3>
          <p className="text-sm sm:text-base mb-6 text-center text-white lg:text-left">
            VOCO<span className="text-orange-400">x</span>
            <span className="text-emerald-300">P</span> securely verifies human
            visitors using key government-issued identification documents:
          </p>

          {/* ID CARDS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {supportedIds.map((id, index) => (
              <IdCard key={index} title={id.title} img={id.img} />
            ))}
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={vocoverify}
            alt="Voco Verify Flow"
            className="
              w-full
              max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
              h-auto
              md:h-100
              rounded-xl
              shadow-2xl 
              border border-white/20
            "
          />
        </div>
      </div>
    </section>
  );
};

export default AboutVocoInfo;
