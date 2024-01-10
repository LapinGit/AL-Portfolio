import React from "react";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-black  pt-12">
      {/* Container */}
      <div className="m-0 select-none flex flex-col justify-center items-center">
        {/* EMAIL ICON */}
        <div className="text-4xl text-white ">
          <MdOutlineEmail />
        </div>
        {/* TEXT */}
        <div className="text-2xl font-bold mb-2 text-white">
        Get in touch
        </div>
      </div>
    </section>
  );
};

export default Footer;
