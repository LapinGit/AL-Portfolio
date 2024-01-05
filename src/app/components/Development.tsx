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
      <div className="w-[100%] flex justify-center items-center pb-3">
        <p className=" font-sans text-1xl">
          Websites I have designed and coded
        </p>
      </div>
      {/* PROJECTS LINK */}


      
      <div className=" ">
        {ProjectsData.map((category) => (
          <Link
            href={category.link}
            key={category.id}
            className="text-lg mb-4  justify-center flex flex=row sm:p-4 rounded-xl bg-red-500"
          >
            
            {category.image && (
              <div className="pb-4 sm:pb-0 sm:w-1/3 bg-orange-500 pr-5">
                <Image
                  alt=""
                  className="rounded-lg"
                  width={400}
                  height={400}
                  src={category.image}
                />
              </div>
            )}
            
  

          </Link>
        ))}
               {ProjectsData.map((category) => (
      <div key={category.id}>

      </div>

))}


      </div>


      {/* END */}
    </div>
  );
};

export default Development;
