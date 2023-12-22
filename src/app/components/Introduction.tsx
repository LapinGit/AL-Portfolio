
import React from "react";

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
          <h1 className="text-white text-xl md:text-3xl mb-2 font-sans">A fresh graduate from Mapúa University</h1>
          <p className="text-white mb-2 font-sans"> Aspiring Frontend Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
