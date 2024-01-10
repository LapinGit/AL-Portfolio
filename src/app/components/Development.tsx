"use client"
import { ProjectsData } from "@/utils/data";
import Link from "next/link";
import React from "react";
import { LuMonitorStop } from "react-icons/lu";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";

const Development = () => {
  return (
    // wrapper
    <div className="bg-black  text-white  overflow-hidden  ">
      {/* container */}
      <div className="w-[47%] flex flex-col justify-center items-center pt-8 pb-2 ">
        <div className="text-3xl font-bold mt-14  ">Projects</div>
      </div>
      {/* Computer Icon */}
      <div className="w-[100%] flex justify-center items-center text-5xl ">
        <LuMonitorStop />
      </div>
      {/* TEXT */}
      <div className="w-[100%] flex justify-center items-center pb-10 ">
        <p className=" font-sans text-1xl select-none  ">
          Websites I have designed and coded
        </p>
      </div>
      {/* PROJECTS LINK */}

      {ProjectsData.map((category) => (
        <div className=" sticky max-w-[1200px] mx-auto py-12   ">
          <div className="flex justify-center     ">
            <Link href={category.link} key={category.id}>
              {category.image && (
                <Image
                  alt=""
                  width={400}
                  height={250}
                  src={category.image}
                  className="mx-6 rounded-xl hidden md:block  hover:scale-105   "
                />
              )}
            </Link>
            {/* Projects Description */}
            <div className=" flex-col flex justify-center sm:w-[80%] md:w-[35%]  ">
              <div className="flex text-2xl font-bold mb-3 select-none     ">
                {category.title}
              </div>
              <div className="select-none  z-20 md:min-h-[70px] md:max-w-[100%] rounded-lg p-4 bg-white text-black  ">
                {category.description}
              </div>
              {/* Tech tags */}
              <div className="flex my-4 overflow-x-scroll no-scrollbar overflow-hidden w-[105%] ">
                {category.technologies.map((tag, i) => (
                  <span key={i} className="mono mx-2 sm:text-sm 	 ">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-end w-[100%]   ">
                <div className="text-2xl  ">
                  <Link
                    passHref
                    target="_blank"
                    rel="noreferrer"
                    href={category.source} className=""
                  >
                    <AiFillGithub className="btn-icon " />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* END */}
    </div>
  );
};

export default Development;
