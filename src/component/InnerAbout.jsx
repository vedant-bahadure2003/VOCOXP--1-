import React from "react";
import { FaBuilding, FaLandmark, FaParking, FaUserCheck } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";

// Images
import enterpriseImg from "../assets/usecase/enterprise.webp";
import parkingImg from "../assets/usecase/govtservice.webp";
import visitorImg from "../assets/usecase/parking.png";
import govtImg from "../assets/usecase/visitor.png";
import usedcaselogo from "../assets/usecase/usecaselogo.png";
import usecase from "../assets/usecase/usecase-name.png";
import { section } from "framer-motion/client";

const InnerAbout = () => {
  const useCases = [
    {
      title: "Agency Operations",
      desc: "Complete verification solution for agency owners",
      icon: <FaBuilding />,
      color: "border-cyan-400",
      bg: "bg-cyan-400",
      text: "text-black",
      img: enterpriseImg,
    },
    {
      title: "Enterprise Management",
      desc: "Efficient management tools for organizations",
      icon: <MdBusinessCenter />,
      color: "border-orange-500",
      bg: "bg-orange-500",
      text: "text-black",
      img: enterpriseImg,
    },
    {
      title: "Parking Management",
      desc: "Smart vehicle tracking and secure entry logs",
      icon: <FaParking />,
      color: "border-pink-500",
      bg: "bg-pink-500",
      text: "text-black",
      img: parkingImg,
    },
    {
      title: "Visitor Management",
      desc: "Track and verify every person entering premises",
      icon: <FaUserCheck />,
      color: "border-blue-700",
      bg: "bg-blue-700",
      text: "text-black",
      img: visitorImg,
    },
    {
      title: "Government Services",
      desc: "Secure verification for government applications",
      icon: <FaLandmark />,
      color: "border-yellow-500",
      bg: "bg-yellow-500",
      text: "text-black",
      img: govtImg,
    },
  ];



  return (
    <section className="w-full bg-[#f3ed94] pb-10">
      <div>
        <img
          src={usecase}
          alt="Use Case"
          className="w-72 sm:w-70 h-18 mb-10 rounded-xl"
        />
      </div>
      <div className=" px-6 lg:px-20 flex flex-col items-center lg:flex-row lg:justify-center gap-25">
        {/* LEFT SECTION */}

        <div className="flex flex-col items-center lg:mb-0">
          {/* HUB + FLOATING IMAGES */}
          <div className="relative">
         

            {/* Central Hub */}
            <div
              className="relative z-10 w-48 h-48 sm:w-60 sm:h-60
            rounded-full border-8 border-[#1a365d]
            bg-[#0f172a] flex flex-col items-center justify-center
            text-center shadow-2xl"
            >
              <img src={usedcaselogo} alt="logo" className="w-36 sm:w-30" />
              <div className="w-16 h-1 bg-orange-500 my-2"></div>
              <p className="text-white text-[10px] sm:text-xs uppercase font-bold tracking-widest">
                What We Do
              </p>
            </div>

            {/* Decorative Arc */}
            <div
              className="hidden lg:block absolute top-1/2 -right-20
            w-24 h-48 border-r-2 border-dashed border-gray-500
            rounded-full -translate-y-1/2 pointer-events-none"
            ></div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col gap-4 max-w-xl">
          {useCases.map((item, index) => (
            <div key={index} className="flex items-center group">
              {/* IMAGE */}
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-md mr-3">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONNECTOR */}
              <div className="hidden lg:flex items-center">
                <div className={`w-3 h-3 rounded-full ${item.bg} mr-4`}></div>
                <div className="w-12 h-px border-t border-dashed border-gray-500"></div>
              </div>

              {/* ICON */}
              <div
                className={`z-10 -mr-6 w-14 h-14 sm:w-16 sm:h-16
      rounded-full border-4 ${item.color}
      bg-white flex items-center justify-center text-2xl
      ${item.text} shadow-lg transition-transform
      duration-300 group-hover:scale-110`}
              >
                {item.icon}
              </div>

              {/* CONTENT */}
              <div className="flex-1 bg-white rounded-r-full rounded-l-3xl py-3 pl-10 pr-6 shadow-md">
                <h4 className="text-xs sm:text-sm font-black uppercase mb-1">
                  {item.title}
                </h4>
                <p className="text-[10px] sm:text-xs text-gray-500 font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnerAbout;
