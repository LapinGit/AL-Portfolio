"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    // Wrapper
    <div className="bg-black z-50 sticky  select-none top-0 w-full h-[75px] flex justify-between items-center px-4 ">
      {/* Container */}
      <div className="justify-between z-50 sticky  w-full max-w-[1000px] mx-auto">
        <div className=" flex items-center   justify-between select-none top-0 h-[75px] px-4 ">
          {/* Left Side */}
          <div className="cursor-pointer m-0 text-3xl font-bold text-white">
            <Link href="/"> AL </Link>
          </div>
          {/* Right side */}
          {/* Menu */}
          <div className="flex text-white   sticky  gap-12 xs:gap-5 ">
            <Link href="resume  " className="cursor-pointer">
              <div className=" ">Resume</div>
            </Link>
            <Link
              href="https://mail.google.com/mail/u/0/?fs=1&to=alfonsolapinoria.work@gmail.com&su=Inquiry&tf=cm "
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer">
              <div className="">Contact</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
