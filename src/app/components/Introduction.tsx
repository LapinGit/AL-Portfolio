import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";

const Introduction = () => {
  return (
    <div className="bg-black">
      {/* Container */}
      <div className="grid place-items-center w-full h-[calc(103vh-100px)] mt-0">
        {/* Intro-start */}
        <div className="w-[80%] md:w-[60%]">
          <h1 className="text-5xl md:text-7xl mb-6 text-white">
            Alfonso Aurel Lapinoria
          </h1>
          <h1 className="text-white text-xl md:text-3xl mb-2 font-sans">
            A graduate from Mapúa University
          </h1>
          <p className="text-white mb-2 font-sans">
            {" "}
            Aspiring Frontend Developer
          </p>
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
       
      </div>
    </div>
  );
};

export default Introduction;
