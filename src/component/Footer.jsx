import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#002046] text-center p-4 text-xs  text-gray-400 border-t border-offwhite">
        © {new Date().getFullYear()} VOCOxP — All Rights Reserved.
      </footer>
    </>
  );
};

export default Footer;
