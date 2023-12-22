import { ProjectsData } from "@/utils/data";
import Link from "next/link";
import React from "react";
import { LuMonitorStop } from "react-icons/lu";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Development = () => {
  return (
    // wrapper
    <div className="bg-black text-white ">
      {/* container */}
      <div className="w-[47%] flex flex-col justify-center items-center pt-8 pb-2  ">
        <div className="text-3xl font-bold mt-14 ">Projects</div>
      </div>
      {/* Computer Icon */}
      <div className="w-[100%] flex justify-center items-center text-5xl">
        <LuMonitorStop />
      </div>
      {/* TEXT */}
      <div className="w-[100%] flex justify-center items-center ">
        <p className=" font-sans text-1xl">
          Websites I have designed and coded
        </p>
      </div>
      {/* PROJECTS LINK */}
      <div className="">
        {ProjectsData.map((category) => (
          <Link
            href={category.link}
            key={category.id}
            className="text-lg tracking-tight mb-4 flex sm:flex-row flex-col sm:p-4 sm:hover:shadow-xl rounded-xl relative group transition-colors duration-300 ease-in-out sm:hover:bg-primary sm:hover:text-background bg-red-500"
          >
            <ArrowUpRight
              size={18}
              className="absolute sm:top-0 bottom-0 right-0 sm:mt-4 mt-2 sm:mr-4 mr-2 bg-secondary sm:group-hover:bg-primary sm:group-hover:text-secondary rounded"
            />

            {category.image && (
              <div className="pb-4 sm:pb-0 sm:w-1/3">
                <Image
                  alt=""
                  className="rounded-lg"
                  width={500}
                  height={200}
                  src={category.image}
                />
              </div>
            )}
            
      <div className="text-xl sm:ml-5 sm:w-2/3">
        {category.title}
        <div className="text-[15px] py-2">{category.description}</div>
       
      </div>
          </Link>
        ))}
      </div>

      {/* END */}
    </div>
  );
};

export default Development;
