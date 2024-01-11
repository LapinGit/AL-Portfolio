"use client";
import React, { useEffect, useState } from "react";
import { RxVercelLogo } from "react-icons/rx";
import { BiLogoNetlify } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";

const Skills = () => {
  const TechData = [
    {
      id: 1,
      name: "Storage And Deployment",
      iconnames: (
        <div className=" text-white text-1xl sm:text-sm sm:gap-5 flex justify-around ">
          <span>{`Vercel`} </span>
          <span>{`Netlify`} </span> <span>{`Github`}</span>
        </div>
      ),
      icons: [
        <RxVercelLogo key="one" />,
        <BiLogoNetlify key="two" />,
        <FaGithub key="three" />,
      ],
    },
    {
      id: 2,
      name: "Programming Languages",
      iconnames: (
        <div className=" text-white text-1xl sm:text-sm  flex justify-around ">
          <span>{`JavaScript`} </span>
          <span>{`TypeScript`} </span>
        </div>
      ),
      icons: [<IoLogoJavascript key="twelve" />, <SiTypescript key="four" />],
    },
    {
      id: 3,
      name: "Frontend Technologies",
      iconnames: (
        <div className=" text-white text-1xl sm:text-sm flex justify-around  sm:w-[105%]   lg:w-[101%]   ">
          <span className=" ml-3	">{`HTML`} </span>
          <span className=" ml-6">{`React`} </span>
          <span className=" ml-7 ">{`Next`} </span>
          <span className=" sm:ml-5  "> {`TailwindCSS`} </span>
        </div>
      ),
      icons: [
        <FaHtml5 key="five" />,
        <SiReact key="six" />,
        <SiNextdotjs key="seven" />,
        <SiTailwindcss key="eight" />,
      ],
    },
    {
      id: 4,
      name: "Backend Technologies",
      iconnames: (
        <div className=" text-white text-1xl   flex justify-around ">
          <span>{`Prisma`} </span>
        </div>
      ),
      icons: [<SiPrisma key="nine" />],
    },
    {
      id: 5,
      name: "Database Technologies",
      iconnames: (
        <div className=" text-white text-1xl sm:text-sm gap-7 flex justify-around ">
          <span>{`PostgreSQL`} </span>
          <span className="mr-4">{`MySQL`} </span>
        </div>
      ),
      icons: [<SiPostgresql key="ten" />, <SiMysql key="eleven" />],
    },
  ];

  const [activeTab, setActiveTab] = useState(TechData[0]);
  useEffect(() => {}, [activeTab]);

  return (
    <div className="bg-black">
      {/* Container */}
      <div className="w-[50%]  xs:w-[65%]  flex flex-col justify-center items-center pt-8 pb-2 ">
        <div className="text-3xl font-bold mt-14  text-white items-center justify-center  flex  ">
          Technology
        </div>
      </div>

      {/* TABS */}
      <div className=" overflow-x-scroll no-scrollbar  ">
        <div className=" flex flex-col items-center sm:flex-wrap 	 	">
          <div className="flex pt-5 ">
            {TechData.map((tab, index) => (
              <button
                key={index}
                className={`${
                  activeTab?.id === tab.id
                    ? "bg-blue-500 text-white "
                    : "bg-white text-black"
                } lg:w-[150px] md:w-[140px] sm:w-[80px] sm:text-xs 	 py-2 rounded-md mx-1 font-semibold    `}
                onClick={() => setActiveTab(tab)}
                role="tab"
                aria-selected={activeTab === tab}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* TECH ICONS */}
      <div className=" flex items-center justify-center h-[15vh] transition-enter transition-enter-active overflow-hidden	  no-scrollbar   ">
        {TechData.map((data, index) => {
          return (
            <div
              key={index}
              className={`  flex flex-col  lg:w-[30%] sm:w-[60%] md:w-[60%]       ${
                activeTab?.id === data.id
                  ? "block transition-all ease-in-out duration-700 transition-leave transition-leave-active "
                  : "invisible "
              }`}
            >
              {/* ICONS */}
              <div className="text-white max-sm:text-sm	sm:gap-6 flex text-5xl justify-around       ">
                {data.icons}
              </div>
              {/* Icon Name */}
              <div>{data.iconnames}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
