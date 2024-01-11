import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { ImMail4 } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-black  pt-12  ">
      {/* Container */}
      <div className="m-0 select-none flex flex-col justify-center items-center">
        {/* EMAIL ICON */}
        <div className="text-4xl text-white ">
          <MdOutlineEmail />
        </div>
        {/* TEXT */}
        <div className="text-2xl font-bold mb-2 text-white">Get in touch</div>
        <div className="text-white text-lg font-semibold mt-4 items-center justify-center text-center  w-[90%]	">
          You can send me an{" "}
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&to=alfonsolapinoria.work@gmail.com&su=Inquiry&tf=cm"
            className="font-extrabold hyperlink "
            target="_blank"
            rel="noreferrer"
          >
            email
          </a>{" "}
          or take a look at my resume.
        </div>
        {/* LINKS */}
        <div className="flex mt-12  ">
          <div className="btn">
            <a
              href="https://github.com/LapinGit"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="btn-icon  text-slate-100" />
            </a>
          </div>
          <div className="btn ">
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&to=alfonsolapinoria.work@gmail.com&su=Inquiry&tf=cm"
              target="_blank"
              rel="noreferrer"
            >
              <ImMail4 className="btn-icon  text-slate-100" />
            </a>
          </div>
          <div className="btn ">
            <a
              href="https://www.linkedin.com/in/alfonso-aurel-lapinoria-281293250/"
              target="_blank"
              rel="noreferrer"
            >
              <SiLinkedin className="btn-icon  text-slate-100" />
            </a>
          </div>
        </div>
       
      </div>
      <footer className="w-full max-w-[1000px]">
      <div className="h-[100px] flex justify-center items-center mt-auto ">
        <p className="text-white">Alfonso Aurel Lapinoria | {new Date().getFullYear()}</p>
        </div>
        </footer>
    </section>
  );
};

export default Footer;
