import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";

const ImageCarousel = ({ images, currentIndex, setCurrentIndex }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length, setCurrentIndex]);

  // Logic to show "Fake" or "Verified" based on index for demo purposes
  const isVerified = currentIndex % 2 === 0;

  return (
    <div className="relative w-full max-w-lg">
      {/* MAIN IMAGE CONTAINER */}
      <div className="relative h-[450px] lg:h-[550px] w-full rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-4 border-white">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* FLOATING STATUS CARD (The "Modern" Touch) */}
        <motion.div 
          key={`status-${currentIndex}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[80%] bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-white/50"
        >
          <div className={`p-2 rounded-full ${isVerified ? 'bg-emerald-100' : 'bg-red-100'}`}>
            {isVerified ? (
              <IoCheckmarkCircle className="text-emerald-600 text-2xl" />
            ) : (
              <IoCloseCircle className="text-red-600 text-2xl" />
            )}
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest font-black text-slate-400">System Result</p>
            <p className={`font-bold ${isVerified ? 'text-emerald-700' : 'text-red-700'}`}>
              {isVerified ? "Identity Verified" : "Potential Threat Detected"}
            </p>
          </div>
        </motion.div>
      </div>

      {/* NAV DOTS */}
      <div className="flex justify-center gap-3 mt-8">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              currentIndex === i ? "w-10 bg-[#1e3a8a]" : "w-2 bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;