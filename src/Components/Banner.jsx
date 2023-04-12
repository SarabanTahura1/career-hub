import React from "react";
import person from "../assets/All Images/person.png";

const Banner = () => {
  return (
    <div className="w-full container mx-auto px-3 md:p-0 h-fit lg:h-screen bg-gradient-t-r from-[#7e90f40d] to-[#98ffff0d]">
      <div className="lg:h-[calc(100vh-40px)] w-full flex justify-center items-center">
        <div className="max-x-7xl lg:grid grid-cols-2 gap-10 items-center">
          <div className="flex flex-col justify-center gap-6 items-start">
            <h1 className="text-3xl">
              One Step Closer To Your{" "}
              <span className="text-pink-400">Dream Job</span>
            </h1>
            <p>
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Get Started
            </button>
          </div>
          <img src={person} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
