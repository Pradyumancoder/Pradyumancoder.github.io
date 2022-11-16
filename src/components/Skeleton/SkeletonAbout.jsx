import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const SkeletonAbout = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black w-full text-white h-[100%] pt-16 flex flex-col justify-center">
      <div className="animate-pulse flex flex-col mt-4 w-[90%] justify-center mx-auto">
        {/* <div className="grid md:grid-cols-2 mx-auto space-y-6 py-1 my-4 w-[98%] items-center justify-center md:justify-center"> */}
        <div className="grid md:grid-cols-2 grid-cols-1  space-y-6 py-1 my-4 w-[98%] justify-center items-center">
        
        <div className="md:h-64 md:w-64 h-[7.8rem] w-[7.8rem] mx-auto bg-slate-700 rounded-full animate-pulse ">
            <div className="flex flex-col justify-center items-center md:gap-2 animate-pulse ">
              <div className=" flex flex-col items-center justify-center my-8 md:gap-4 mx-8 md:my-20">
                {/* <p className="font-bold  text-gray-500 ml-3  "></p>
                <AiOutlineLoading3Quarters size={20} color="white" className="animate-spin-slow m-auto"></AiOutlineLoading3Quarters> */}
              </div>
            </div>
          </div>
          <div className="animate-pulse flex flex-col mt-4 w-auto md:w-[90%]  md:mx-auto justify-center">
            <div className=" bg-slate-700 h-10 w-100 rounded"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-4 bg-slate-700 rounded my-2"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-4 bg-slate-700 rounded "></div>
                  <div className="h-4 bg-slate-700 rounded"></div>
                  <div className="h-4 bg-slate-700 rounded"></div>
                </div>
                <div className="h-4 bg-slate-700 rounded"></div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-4 bg-slate-700 rounded "></div>
                  <div className="h-4 bg-slate-700 rounded"></div>
                  <div className="h-4 bg-slate-700 rounded"></div>
                </div>
                <div className="h-4 bg-slate-700 rounded"></div>
              </div>
            </div>
            <div className=" bg-slate-700 h-10 w-40 mx-auto my-4 rounded"></div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default SkeletonAbout;
